/*
 * Page scope
 * ----------
 * The animation scripts in src/effects were first written for normal page loads, where the
 * browser throws everything away when you leave a page. In a single-page React app that
 * does not happen, so while a page's script runs we record every window/document listener,
 * timer, animation frame and observer it creates. When the page unmounts, dispose() switches
 * all of them off in one go.
 *
 * Anything created inside one of those callbacks later (a timer started from a scroll
 * handler, for example) belongs to the same scope, so it is cleaned up too.
 */

let active = null;
let installed = false;

function install() {
  if (installed) return;
  installed = true;
  const W = window;
  const ET = EventTarget.prototype;
  const add = ET.addEventListener;
  const remove = ET.removeEventListener;
  const wrappers = new WeakMap(); // original listener -> Map(key -> wrapped listener)

  ET.addEventListener = function (type, fn, opts) {
    const s = active;
    if (!s || !fn) return add.call(this, type, fn, opts);
    // The page has already loaded, so "load" / "DOMContentLoaded" would never fire again: run them soon instead.
    const isLoad = type === 'load' && this === W;
    const isReady = type === 'DOMContentLoaded' && (this === document || this === W);
    if ((isLoad && document.readyState === 'complete') || (isReady && document.readyState !== 'loading')) {
      s.later(() => (typeof fn === 'function' ? fn.call(this, new Event(type)) : fn.handleEvent(new Event(type))));
      return undefined;
    }
    const o = typeof opts === 'boolean' ? { capture: opts } : { ...(opts || {}) };
    o.signal = o.signal && AbortSignal.any ? AbortSignal.any([o.signal, s.ctl.signal]) : s.ctl.signal;
    const w = s.wrap(fn);
    const key = type + (o.capture ? ':c' : '');
    if (!wrappers.has(fn)) wrappers.set(fn, new Map());
    wrappers.get(fn).set(key, w);
    return add.call(this, type, w, o);
  };
  ET.removeEventListener = function (type, fn, opts) {
    const cap = typeof opts === 'boolean' ? opts : !!(opts && opts.capture);
    const w = fn && wrappers.get(fn)?.get(type + (cap ? ':c' : ''));
    if (w) remove.call(this, type, w, opts);
    return remove.call(this, type, fn, opts);
  };

  const st = W.setTimeout, si = W.setInterval, raf = W.requestAnimationFrame;
  W.setTimeout = function (fn, ms, ...args) {
    const s = active;
    if (!s || typeof fn !== 'function') return st.call(W, fn, ms, ...args);
    const id = st.call(W, () => { s.timers.delete(id); s.run(fn, args); }, ms);
    s.timers.add(id);
    return id;
  };
  W.setInterval = function (fn, ms, ...args) {
    const s = active;
    if (!s || typeof fn !== 'function') return si.call(W, fn, ms, ...args);
    const id = si.call(W, () => s.run(fn, args), ms);
    s.intervals.add(id);
    return id;
  };
  W.requestAnimationFrame = function (fn) {
    const s = active;
    if (!s) return raf.call(W, fn);
    const id = raf.call(W, (t) => { s.frames.delete(id); s.run(fn, [t]); });
    s.frames.add(id);
    return id;
  };

  for (const name of ['IntersectionObserver', 'ResizeObserver', 'MutationObserver']) {
    const Orig = W[name];
    if (!Orig) continue;
    W[name] = class extends Orig {
      constructor(cb, options) {
        const s = active;
        super(s ? (...x) => s.run(cb, x) : cb, options);
        if (s) s.observers.push(this);
      }
    };
  }
}

export function createScope() {
  install();
  const s = {
    dead: false,
    ctl: new AbortController(),
    timers: new Set(),
    intervals: new Set(),
    frames: new Set(),
    observers: [],
    run(fn, args = []) {
      if (s.dead) return undefined;
      const prev = active;
      active = s;
      try { return fn(...args); } finally { active = prev; }
    },
    wrap(fn) {
      return function (...args) {
        if (s.dead) return undefined;
        const prev = active;
        active = s;
        try { return typeof fn === 'function' ? fn.apply(this, args) : fn.handleEvent(...args); } finally { active = prev; }
      };
    },
    later(fn) { s.run(() => setTimeout(fn, 0)); },
    dispose() {
      s.dead = true;
      s.ctl.abort();
      s.timers.forEach(clearTimeout);
      s.intervals.forEach(clearInterval);
      s.frames.forEach(cancelAnimationFrame);
      s.observers.forEach((o) => { try { o.disconnect(); } catch (e) { /* already gone */ } });
    },
  };
  return s;
}
