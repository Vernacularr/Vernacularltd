/* Inner page behaviour: nav, menu, reveal-on-scroll, FAQ, forms and page effects.
   Runs once each time an inner page mounts (see components/Page.jsx). */
export default function initSite() {
/* Vernacular: shared behaviour for the inner pages (menu, nav, pattern, reveals, dividers, the orange piece, footer wordmark) */
(() => {
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TOUCH = matchMedia('(hover: none)').matches;
if (TOUCH) document.documentElement.classList.add('touch');
const COL = { orange:'#F7561B', yellow:'#FFC21C', cyan:'#16CDEB', purple:'#9A62F7', blue:'#0B5EDD', green:'#0AA021' };
const U=[[15,16,4,5],[12,15,5,6],[7,8,4,5],[4,7,5,6],[14,16,3,4],[12,14,4,5],[11,12,1,2],[8,11,2,3],[6,8,3,4],[4,6,4,5],[3,4,1,2],[0,3,2,3],[10,12,0,1],[8,10,1,2],[2,4,0,1],[0,2,1,2]];
const PW=160.665, PH=232.617, UU=PW/16, VV=PH/6, r2=n=>+n.toFixed(2);
function rng(seed){ let s=seed; return ()=>{ s|=0; s=s+0x6D2B79F5|0; let t=Math.imul(s^s>>>15,1|s); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }

/* ---- the approved Vernacular pattern, very faint, as section backgrounds ---- */
function tile(base, light, dark){
  const sc=.9, W=Math.round(PW*sc), H=Math.round(PH*sc), u=W/16, v=H/6;
  const c=document.createElement('canvas'); c.width=W; c.height=H; const x=c.getContext('2d');
  x.fillStyle=base; x.fillRect(0,0,W,H);
  U.forEach((k,n)=>{ x.fillStyle=n%2?dark:light; const x0=Math.round(k[0]*u), x1=Math.round(k[1]*u), y0=Math.round(k[2]*v), y1=Math.round(k[3]*v); x.fillRect(x0,y0,x1-x0,y1-y0); /* pieces touch: the pattern connects */ });
  return `url(${c.toDataURL()})`;
}
const root=document.documentElement.style;
for(const n of ['dark','cream',...Object.keys(COL)]) root.setProperty('--tex-'+n,'none');
try{
  root.setProperty('--tex-dark', tile('#1B1B1A','rgba(255,255,255,.014)','rgba(255,255,255,.005)'));
  root.setProperty('--tex-cream', tile('#F2EEE4','rgba(27,27,26,.024)','rgba(27,27,26,.008)'));
  for(const n in COL) root.setProperty('--tex-'+n, tile(COL[n],'rgba(255,255,255,.026)','rgba(0,0,0,.01)'));
}catch(e){}

/* ---- pattern pieces for visuals (audience heroes, image slots, the about headline chip) ---- */
function piecesHTML(w,h,sc,seed,keep,cls){ const r=rng(seed); let out='';
  for(let py=-1; py*PH*sc<h+PH*sc; py++) for(let px=-1; px*PW*sc<w+PW*sc; px++) U.forEach(k=>{ if(r()>keep) return;
    const x=(px*PW+k[0]*UU)*sc, y=(py*PH+k[2]*VV)*sc, ww=(k[1]-k[0])*UU*sc, hh=VV*sc;
    if(x>w||y>h||x+ww<0||y+hh<0) return;
    out+=`<i class="${cls}" style="left:${r2(x)}px;top:${r2(y)}px;width:${r2(ww)}px;height:${r2(hh)}px;--d:${(r()*1.2).toFixed(2)}s;--o:${(.35+r()*.65).toFixed(2)}"></i>`; });
  return out; }
document.querySelectorAll('[data-pieces]').forEach((el,n)=>{
  const [sc,keep]=(el.dataset.pieces||'1,.6').split(',').map(Number);
  const box=document.createElement('span'); box.className='pcs'; el.insertBefore(box,el.firstChild);
  const draw=()=>{ box.innerHTML=piecesHTML(el.clientWidth,el.clientHeight,sc,30+n,keep,'pp'); };
  draw(); let t=0; addEventListener('resize',()=>{ clearTimeout(t); t=setTimeout(draw,200); });
});

/* ---- nav: clear at the top, hides going down, returns going up, dark over cream sections ---- */
const nav=document.getElementById('navwrap'), creams=[...document.querySelectorAll('.cream')];
let lastY=scrollY;
function navState(){
  const y=scrollY, down=y>lastY+4, up=y<lastY-4;
  if(y<80) nav.classList.remove('hide','solid');
  else { nav.classList.add('solid'); if(down && !document.body.classList.contains('menu-open')) nav.classList.add('hide'); else if(up) nav.classList.remove('hide'); }
  if(Math.abs(y-lastY)>4) lastY=y;
  nav.classList.toggle('light', !document.body.classList.contains('menu-open') && creams.some(s=>{ const r=s.getBoundingClientRect(); return r.top<=50 && r.bottom>50; }));
}
addEventListener('scroll',()=>requestAnimationFrame(navState),{passive:true}); navState();

/* ---- menu ---- */
const menuBtn=document.getElementById('menuBtn'), sheet=document.getElementById('sheet');
const menuLinks=[...sheet.querySelectorAll('nav a')];
let menuFrame=0;
void sheet.offsetWidth;
function setMenu(open){
  cancelAnimationFrame(menuFrame);
  menuLinks.forEach((a,i)=>{
    const delay=open ? 0.15+i*0.05 : 0.02+(menuLinks.length-1-i)*0.05;
    a.style.transitionDelay=delay.toFixed(2)+'s';
  });
  const apply=()=>{
    document.body.classList.toggle('menu-open',open);
    menuBtn.setAttribute('aria-expanded',String(open)); menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
    sheet.setAttribute('aria-hidden',String(!open)); sheet.inert=!open;
    if(open) nav.classList.remove('hide','light'); else navState();
  };
  if(open) menuFrame=requestAnimationFrame(apply);
  else apply();
}
sheet.inert=true;
menuBtn.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
sheet.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{ if(e.key==='Escape' && document.body.classList.contains('menu-open')){ setMenu(false); menuBtn.focus(); } });
addEventListener('pageshow',()=>setMenu(false));

/* ---- every section opens the same way ---- */
const rvIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); rvIO.unobserve(e.target); } }),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>rvIO.observe(el));
/* statement lines that come into focus as they rise through the screen */
const focusLines=[...document.querySelectorAll('[data-focus]')];
function drawFocus(){ focusLines.forEach(el=>{ const r=el.getBoundingClientRect(); el.classList.toggle('on', reduce || r.top<innerHeight*.82); }); }

/* ---- dividers: the next section's colour rises in stepped columns, carrying its pattern ---- */
const seams=[...document.querySelectorAll('.seam')].map((el,n)=>{ const r=rng(40+n), cols=[]; let x=0;
  const t=el.dataset.to, bg=t==='cream'?'var(--cream) var(--tex-cream)':t==='orange'?'var(--orange) var(--tex-orange)':'var(--black) var(--tex-dark)';
  while(x<100){ const w=[1.1,1.6,1.6,2.2][Math.floor(r()*4)], b=document.createElement('b'), ii=document.createElement('i');
    ii.style.background=bg; b.style.cssText=`left:${x.toFixed(2)}%;width:${(w+.4).toFixed(2)}%`; b.appendChild(ii); el.appendChild(b); cols.push({b:ii,d:r(),h:.35+r()*.65}); x+=w; }
  return {el,cols}; });
function drawSeams(){
  for(const sm of seams){ const r=sm.el.getBoundingClientRect(); if(r.bottom<-50||r.top>innerHeight+50) continue;
    const p=reduce?1:Math.min(1,Math.max(0,(innerHeight-r.top)/(innerHeight*.75)));
    for(const c of sm.cols){ const t=Math.min(1,Math.max(0,p*1.7-c.d*.7)); const v=t>=1?1:t*c.h; if(v!==c.v){ c.b.style.transform=`translateY(${((1-v)*100).toFixed(1)}%)`; c.v=v; } } }
}

/* ---- the orange piece: sits behind the content and only shows, softly, when a section label reaches the middle ---- */
const thread=document.createElement('div'); thread.className='thread'; thread.setAttribute('aria-hidden','true');
thread.innerHTML=[6,7,8,9].map(i=>{ const k=U[i]; return `<i style="left:${r2(k[0]*UU-8*UU)}px;top:${r2(k[2]*VV-3*VV)}px;width:${r2((k[1]-k[0])*UU)}px;height:${r2(VV)}px"></i>`; }).join('');
document.body.appendChild(thread);
const anchors=[...document.querySelectorAll('[data-anchor]')], footEl=document.querySelector('.foot');
let thT=null, thC=null, thId=0;
function thTick(){
  thId=0;
  if(!thT||!thC) return;
  const k=reduce?1:.2;
  const dx=thT.x-thC.x, dy=thT.y-thC.y, dop=thT.op-thC.op;
  thC.x+=dx*k; thC.y+=dy*k; thC.op+=dop*(reduce?1:.14);
  thread.style.transform=`translate(${thC.x.toFixed(1)}px,${thC.y.toFixed(1)}px) scale(.14)`;
  thread.style.opacity=thC.op.toFixed(3);
  if(Math.abs(dx)>0.4||Math.abs(dy)>0.4||Math.abs(dop)>0.012) thId=requestAnimationFrame(thTick);
}
function kickThread(){ if(!thId) thId=requestAnimationFrame(thTick); }
function drawThread(){
  if(!anchors.length) return;
  const H=innerHeight, mid=H*.5; let best=null, bd=1e9;
  anchors.forEach(a=>{ const r=a.getBoundingClientRect(); if(r.width===0) return; const y=r.top+r.height/2, d=Math.abs(y-mid);
    if(d<bd){ bd=d; best=a.classList.contains('tdot')?{x:r.left+r.width*.5,y}:{x:r.left+7,y}; } });
  if(!best) return;
  const w=Math.max(0,1-bd/(H*.28)), op=.6*w*w*(3-2*w);
  thT={x:best.x,y:best.y,op}; if(!thC) thC={...thT};
  const fr=footEl&&footEl.getBoundingClientRect(); thread.classList.toggle('ink', !!fr && best.y>fr.top);
}

/* ---- footer wordmark rises letter by letter ---- */
const footWord=document.getElementById('footWord'), fsl=footWord?[...footWord.querySelectorAll('.fs')]:[];
function drawFoot(){ if(!footWord) return; const r=footWord.getBoundingClientRect();
  const p=reduce?1:Math.max(0,(innerHeight-r.top)/(r.height*1.25));
  fsl.forEach((el,k)=>{ const t=Math.min(1,Math.max(0,p*1.6-k*0.1)), e=1-Math.pow(1-t,3); el.style.transform=`translateY(${((1-e)*105).toFixed(1)}%)`; }); }

/* ---- creator join success state: shown after the form is submitted (preview with #joined) ---- */
const joined=document.getElementById('joined');
function showJoined(){ if(!joined) return; const on=location.hash==='#joined'; joined.hidden=!on; if(on) setTimeout(()=>joined.focus({preventScroll:false}),50); }
addEventListener('hashchange',showJoined); showJoined();


/* ---- headlines rise in word by word, like the homepage hero ---- */
document.querySelectorAll('.pg-h1,.sec-h,.quote,.pl-head h2,.success h2').forEach(el=>{
  el.classList.add('wr'); let i=0;
  [...el.childNodes].forEach(nd=>{ if(nd.nodeType!==3) { if(nd.nodeType===1) nd.style.setProperty('--d',(i++*0.07).toFixed(2)+'s'); return; }
    const frag=document.createDocumentFragment();
    nd.textContent.split(/(\s+)/).forEach(part=>{ if(!part) return; if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(' ')); return; }
      const w=document.createElement('span'); w.className='w'; const r=document.createElement('span'); r.className='rise'; r.textContent=part; r.style.setProperty('--d',(i++*0.07).toFixed(2)+'s'); w.appendChild(r); frag.appendChild(w); });
    nd.replaceWith(frag); });
});

/* ---- living pattern fields: the crowd breathes, lights up a word at a time, and moves out of the way of your pointer ---- */
document.querySelectorAll('[data-field]').forEach((el,n)=>{
  const host=el.closest('section')||el.parentElement; let ps=[], mx=-9999, my=-9999, run=false, vis=true;
  function build(){
    const w=el.clientWidth, h=el.clientHeight; if(!w||!h) return; const sc=w<560?.62:(el.classList.contains('in-vis')?.9:1), r=rng(60+n), keep=el.classList.contains('in-vis')?.55:.42;
    const frag=document.createDocumentFragment(); ps=[];
    for(let py=-1; py*PH*sc<h+PH*sc; py++) for(let px=-1; px*PW*sc<w+PW*sc; px++) U.forEach(k=>{ if(r()>keep) return;
      const x=(px*PW+k[0]*UU)*sc, y=(py*PH+k[2]*VV)*sc, ww=(k[1]-k[0])*UU*sc, hh=VV*sc;
      if(x>w||y>h||x+ww<0||y+hh<0) return;
      const i=document.createElement('i'); i.className='fp'; i.style.cssText=`left:${r2(x)}px;top:${r2(y)}px;width:${r2(ww)}px;height:${r2(hh)}px;--o:${(.4+r()*.6).toFixed(2)};animation-delay:${(-r()*4).toFixed(2)}s`;
      frag.appendChild(i); ps.push({el:i,cx:x+ww/2,cy:y+hh/2,ox:0,oy:0}); });
    el.textContent=''; el.appendChild(frag);
  }
  build(); let rt=0; addEventListener('resize',()=>{ clearTimeout(rt); rt=setTimeout(build,250); });
  function loop(){
    let moving=false; const R=150;
    for(const p of ps){ let tx=0, ty=0; const dx=p.cx-mx, dy=p.cy-my, d=Math.hypot(dx,dy);
      if(d<R && d>0){ const f=(1-d/R)*26; tx=dx/d*f; ty=dy/d*f; }
      p.ox+=(tx-p.ox)*.14; p.oy+=(ty-p.oy)*.14; if(Math.abs(tx-p.ox)>.2||Math.abs(ty-p.oy)>.2) moving=true;
      p.el.style.translate=`${p.ox.toFixed(1)}px ${p.oy.toFixed(1)}px`; }
    if(moving||mx>-9000) requestAnimationFrame(loop); else run=false;
  }
  if(!reduce){
    host.addEventListener('pointermove',e=>{ const rc=el.getBoundingClientRect(); mx=e.clientX-rc.left; my=e.clientY-rc.top; if(!run){ run=true; requestAnimationFrame(loop); } },{passive:true});
    host.addEventListener('pointerleave',()=>{ mx=my=-9999; });
    new IntersectionObserver(es=>{ vis=es[0].isIntersecting; }).observe(el);
    setInterval(()=>{ if(!vis||!ps.length||document.hidden) return; const p=ps[Math.floor(Math.random()*ps.length)]; p.el.classList.add('lit'); setTimeout(()=>p.el.classList.remove('lit'),1700); }, 650);
  }
});

/* ---- pillar marks build themselves when their section arrives ---- */
const seenIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('seen'); seenIO.unobserve(e.target); } }),{threshold:.2});
document.querySelectorAll('.pillar-sec').forEach(el=>seenIO.observe(el));

/* ---- values: tap a card to read it; on touch the card in the middle of the screen opens by itself ---- */
document.querySelectorAll('.val').forEach(v=>{ v.addEventListener('click',()=>v.classList.toggle('open')); v.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); v.classList.toggle('open'); } }); });

/* ---- touch: the card nearest the middle of the screen takes its hover state, one at a time ---- */
const tfGroups=[...document.querySelectorAll('[data-tf]')].map(g=>[...g.children]);
function touchFocus(){ if(!TOUCH) return; const mid=innerHeight*.5;
  tfGroups.forEach(cards=>{ let best=null, bd=1e9;
    cards.forEach(c=>{ const r=c.getBoundingClientRect(); if(r.bottom<innerHeight*.15||r.top>innerHeight*.85) return; const d=Math.abs((r.top+r.bottom)/2-mid); if(d<bd){ bd=d; best=c; } });
    cards.forEach(c=>c.classList.toggle('focus',c===best)); }); }


/* ---- contact: one page, four ways in; forms check themselves and confirm ---- */
const ctTabs=[...document.querySelectorAll('.ct-tabs [data-tab]')], ctPanels=[...document.querySelectorAll('[data-panel]')];
if(ctTabs.length){
  const keys=ctTabs.map(t=>t.dataset.tab);
  function showTab(k,scroll){ if(!keys.includes(k)) k='note';
    ctTabs.forEach(t=>{ const on=t.dataset.tab===k; t.setAttribute('aria-selected',String(on)); t.tabIndex=on?0:-1; });
    ctPanels.forEach(p=>{ const on=p.dataset.panel===k; if(on){ p.hidden=false; requestAnimationFrame(()=>p.classList.add('on')); } else { p.classList.remove('on'); p.hidden=true; } });
    if(scroll) document.getElementById('forms').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
    if(history.replaceState) history.replaceState(null,'','#'+k);
  }
  ctTabs.forEach((t,i)=>{ t.addEventListener('click',()=>showTab(t.dataset.tab,true));
    t.addEventListener('keydown',e=>{ if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft') return; e.preventDefault(); const n=ctTabs[(i+(e.key==='ArrowRight'?1:ctTabs.length-1))%ctTabs.length]; n.focus(); showTab(n.dataset.tab,false); }); });
  document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); showTab(a.dataset.go,true); }));
  showTab((location.hash||'').slice(1)||'note',false);
  addEventListener('hashchange',()=>showTab(location.hash.slice(1),true));
}

/* forms work the same on the contact page and on each audience page */
if(document.getElementById('ctDone')){
  const dlg=document.getElementById('ctDone'), dh=document.getElementById('ctDoneH'), dp=document.getElementById('ctDoneP');
  const MSG={creator:["You're In. Let's Create Something Great.","Thanks for joining the Vernacular creator network! We've received your details. When a campaign fits your content and audience, our team may reach out with the next steps."],
    brand:["Thanks. We've got your details.","We'll be in touch to set up a time to talk."],agency:["Thanks. We've got your details.","We'll be in touch to set up a time to talk."],
    note:["Thanks for your note.","We've got your message and will reply soon."]};
  document.querySelectorAll('.ct-form').forEach(f=>{
    f.addEventListener('submit',e=>{ e.preventDefault(); const err=f.querySelector('.ct-err');
      const bad=[...f.elements].filter(el=>el.willValidate && !el.checkValidity());
      f.querySelectorAll('.fld').forEach(x=>x.classList.remove('bad')); bad.forEach(el=>el.closest('.fld').classList.add('bad'));
      if(bad.length){ err.hidden=false; bad[0].focus(); return; } err.hidden=true;
      /* not sent anywhere yet: the form needs a destination (email service or CRM) before launch */
      const m=MSG[f.dataset.kind]||MSG.note; dh.textContent=m[0]; dp.textContent=m[1];
      if(dlg.showModal) dlg.showModal(); else dlg.setAttribute('open',''); f.reset(); });
    f.addEventListener('input',e=>{ const fl=e.target.closest('.fld'); if(fl && e.target.checkValidity()) fl.classList.remove('bad'); });
  });
  dlg.querySelector('[data-close]').addEventListener('click',()=>dlg.close());
  dlg.addEventListener('click',e=>{ if(e.target===dlg) dlg.close(); });
}

/* why-we-exist art plays once it comes into view */
const vas=document.querySelectorAll('[data-va]');
if(vas.length){ const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('seen'); io.unobserve(e.target); } }),{threshold:.35}); vas.forEach(v=>io.observe(v)); }

let raf=0;
function frame(){ raf=0; drawSeams(); drawThread(); kickThread(); drawFoot(); drawFocus(); touchFocus(); }
addEventListener('scroll',()=>{ if(!raf) raf=requestAnimationFrame(frame); },{passive:true});
addEventListener('resize',frame); frame(); setTimeout(frame,600);
})();
}
