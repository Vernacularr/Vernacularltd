/* Homepage behaviour: intro loader, hero steps, scenes, FAQ, menu and footer effects.
   Runs once each time the homepage mounts (see components/Page.jsx). */
import gsap from 'gsap';

export default function initHome() {
(function(){var h=document.documentElement;try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;if(sessionStorage.getItem('vernIntro'))return;}catch(e){}h.classList.add('intro');
var b=document.getElementById('lgBuild'),C=9,R=2,html='';
for(var r=0;r<R;r++)for(var c=0;c<C;c++){var w=100/C,hh=100/R,dx=((Math.random()-.5)*360).toFixed(0),dy=((Math.random()-.5)*220).toFixed(0),rt=((Math.random()-.5)*80).toFixed(0),d=(.12+(c*R+r)*.035+Math.random()*.08).toFixed(2);
html+='<span class="lgf" style="left:'+(c*w).toFixed(3)+'%;top:'+(r*hh)+'%;width:'+(w+.05).toFixed(3)+'%;height:'+(hh+.5)+'%;--dx:'+dx+'px;--dy:'+dy+'px;--r:'+rt+'deg;--d:'+d+'s"><span class="wm" style="width:'+(C*100)+'%;height:'+(R*100)+'%;left:'+(-c*100)+'%;top:'+(-r*100)+'%"></span></span>';}
b.innerHTML=html;requestAnimationFrame(function(){requestAnimationFrame(function(){document.getElementById('loader').classList.add('go');});});
})();

return (() => {
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollJobs=[];
let scrollRaf=0;
addEventListener('scroll',()=>{
  if(scrollRaf) return;
  scrollRaf=requestAnimationFrame(()=>{ scrollRaf=0; for(let i=0;i<scrollJobs.length;i++) scrollJobs[i](); });
},{passive:true});
const TOUCH = matchMedia('(hover: none)').matches;
if(TOUCH) document.documentElement.classList.add('touch');
const COL = {
  orange:['#F7561B','#1B1B1A'], yellow:['#FFC21C','#1B1B1A'], cyan:['#16CDEB','#1B1B1A'],
  purple:['#9A62F7','#FFFFFF'], blue:['#0B5EDD','#FFFFFF'], green:['#0AA021','#FFFFFF']
};
const NAMES = Object.keys(COL);

/* ---- The approved Vernacular pattern, drawn once per colour ---- */
function tile(base, light, dark){ // the approved Vernacular pattern: the 16-piece unit, drawn very faintly
  const UP=[[15,16,4,5],[12,15,5,6],[7,8,4,5],[4,7,5,6],[14,16,3,4],[12,14,4,5],[11,12,1,2],[8,11,2,3],[6,8,3,4],[4,6,4,5],[3,4,1,2],[0,3,2,3],[10,12,0,1],[8,10,1,2],[2,4,0,1],[0,2,1,2]];
  const sc=.9, W=Math.round(160.665*sc), H=Math.round(232.617*sc), u=W/16, v=H/6;
  const c=document.createElement('canvas'); c.width=W; c.height=H; const x=c.getContext('2d');
  x.fillStyle=base; x.fillRect(0,0,W,H);
  UP.forEach((k,n)=>{ x.fillStyle=n%2?dark:light; const x0=Math.round(k[0]*u), x1=Math.round(k[1]*u), y0=Math.round(k[2]*v), y1=Math.round(k[3]*v); x.fillRect(x0,y0,x1-x0,y1-y0); });
  return `url(${c.toDataURL()})`;
}
const root=document.documentElement.style;
const SHOW_PATTERN=true; // page background pattern (the hero has none)
for(const n of ['dark','cream',...NAMES]) root.setProperty('--tex-'+n,'none');
if(SHOW_PATTERN) try{
  root.setProperty('--tex-dark', tile('#1B1B1A','rgba(255,255,255,.014)','rgba(255,255,255,.005)'));
  root.setProperty('--tex-cream', tile('#F2EEE4','rgba(27,27,26,.024)','rgba(27,27,26,.008)'));
  for(const n of NAMES) root.setProperty('--tex-'+n, tile(COL[n][0],'rgba(255,255,255,.026)','rgba(0,0,0,.01)'));
}catch(e){}
const paint = (el,n) => { el.style.setProperty('--c',COL[n][0]); el.style.setProperty('--on',COL[n][1]); el.style.setProperty('--tex',`var(--tex-${n})`); };

/* ---- HERO: Find → Make → Move ---- */
const heroEl=document.getElementById('hero'), stage=document.getElementById('stage');
const U=[[15,16,4,5],[12,15,5,6],[7,8,4,5],[4,7,5,6],[14,16,3,4],[12,14,4,5],[11,12,1,2],[8,11,2,3],[6,8,3,4],[4,6,4,5],[3,4,1,2],[0,3,2,3],[10,12,0,1],[8,10,1,2],[2,4,0,1],[0,2,1,2]];
const PW=160.665, PH=232.617, UU=PW/16, VV=PH/6, OX=-83.335, OY=-29.842;
const r2=n=>+n.toFixed(2), md=(a,n)=>((a%n)+n)%n;
function rng(seed){ let s=seed; return ()=>{ s|=0; s=s+0x6D2B79F5|0; let t=Math.imul(s^s>>>15,1|s); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
let scene=0, on=false, prev=null, moved=false, mx=960, my=430, lx=960, ly=430, armT=0, heroVis=true, stageBox=null;
let SC=1, TX=0, TY=0;
/* a steady viewport height: mobile address bars change innerHeight as you scroll, which made the pinned hero jump */
let VH=innerHeight, VW=innerWidth;
function syncVH(){ if(innerWidth!==VW || Math.abs(innerHeight-VH)>140){ VW=innerWidth; VH=innerHeight; return true; } return false; }
function layout(){
  const W=heroEl.clientWidth;
  if(W>=900){ heroEl.style.height=''; heroEl.style.minHeight=''; heroEl.style.paddingTop='';
    const H=heroEl.clientHeight; SC=Math.max(W/1440,H/900); TX=(W-1440*SC)/2; TY=(H-900*SC)/2; }
  else {
    // content starts clearly below the nav, and the whole hero fits one screen so nothing slides under the nav while pinned
    const navH=document.querySelector('.navbar').getBoundingClientRect().height+12;
    const padTop=Math.round(navH+Math.min(40,Math.max(22,VH*.035)));
    if(heroEl._pt!==padTop){ heroEl._pt=padTop; heroEl.style.paddingTop=padTop+'px'; }
    const hin=heroEl.querySelector('.hero-in'), tb=hin.offsetTop+hin.offsetHeight, gap=18, foot=52;
    SC=Math.max(.34,Math.min(W/640,(VH-tb-gap-foot)/540));
    const need=Math.max(VH,Math.ceil(tb+gap+540*SC+foot));
    if(heroEl._h!==need){ heroEl._h=need; heroEl.style.minHeight='0px'; heroEl.style.height=need+'px'; }
    TX=W/2-1030*SC; TY=tb+gap+270*SC-450*SC;
  }
  stage.style.transform=`translate(${TX}px,${TY}px) scale(${SC})`;
  stageBox=null;
}
layout(); if(document.fonts) document.fonts.ready.then(layout); setTimeout(layout,600);

/* field */
const fieldL=document.getElementById('fieldL'), blocks=[];
(function(){ const r=rng(7), rots=[0,0,90,-24,24,90], frag=document.createDocumentFragment();
  for(let py=OY;py<900;py+=PH) for(let px=OX;px<1440;px+=PW) for(let i=0;i<U.length;i++){
    const k=U[i], x=px+k[0]*UU, y=py+k[2]*VV, w=(k[1]-k[0])*UU, h=(k[3]-k[2])*VV;
    const dx=(r()-.5)*70, dy=(r()-.5)*70, rot=rots[Math.floor(r()*rots.length)];
    if(x+w<0||y+h<0||x>1440||y>900) continue;
    if(innerWidth<900 && (x+w<660||x>1400||y+h<120||y>800)) continue;
    const el=document.createElement('div'); el.className='blk';
    el.style.cssText=`left:${r2(x)}px;top:${r2(y)}px;width:${r2(w)}px;height:${r2(h)}px`;
    frag.appendChild(el);
    blocks.push({el,i,tx:r2(px),ty:r2(py),cx:x+w/2,cy:y+h/2,scatter:`translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px) rotate(${rot}deg)`,o:-1,tf:''});
  }
  fieldL.appendChild(frag);
})();
/* FIND: a magnifying glass; inside it the pattern snaps into order and the found piece turns orange */
const S=1.7, GR=230, glassL=document.getElementById('glassL'), lensEl=document.getElementById('lens'), gps=[];
(function(){ const r=rng(7), rots=[0,0,90,-24,24,90], frag=document.createDocumentFragment();
  for(let py=OY;py<900;py+=PH) for(let px=OX;px<1440;px+=PW){
    if(px<460||px>1400) continue;
    for(let i=0;i<U.length;i++){
      const k=U[i], x=px+k[0]*UU, y=py+k[2]*VV, w=(k[1]-k[0])*UU, h=(k[3]-k[2])*VV;
      const dx=(r()-.5)*70, dy=(r()-.5)*70, rot=rots[Math.floor(r()*rots.length)];
      const el=document.createElement('div'); el.className='gp';
      el.style.cssText=`left:${r2(x*S)}px;top:${r2(y*S)}px;width:${r2(w*S)}px;height:${r2(h*S)}px;background:#F2EEE3`;
      frag.appendChild(el);
      gps.push({el,i,tx:r2(px),ty:r2(py),scatter:`translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px) rotate(${rot}deg)`,o:-1,tf:'',c:''});
    } }
  glassL.appendChild(frag);
})();
let pick=null;
/* The rim and the magnified field share one short follow, so the view stays stuck to the glass. */
gsap.set(lensEl,{ x:lx-960, y:ly-430, scale:1 });
gsap.set(glassL,{ x:GR-lx*S, y:GR-ly*S });
const follow=reduce?0:0.55;   // the glass trails the pointer a little, so it feels weighty
const lensXTo=gsap.quickTo(lensEl,'x',{ duration:follow, ease:'power3.out' });
const lensYTo=gsap.quickTo(lensEl,'y',{ duration:follow, ease:'power3.out' });
const glassXTo=gsap.quickTo(glassL,'x',{ duration:follow, ease:'power3.out' });
const glassYTo=gsap.quickTo(glassL,'y',{ duration:follow, ease:'power3.out' });
function trackLens(){
  lensXTo(lx-960); lensYTo(ly-430);
  const lock=scene===0&&on&&pick;
  const cx=lock?pick.tx+8*UU:lx, cy=lock?pick.ty+3*VV:ly;
  glassXTo(GR-cx*S); glassYTo(GR-cy*S);
}
function drawField(){
  let cd=1e9; pick=null;
  for(const g of gps){ if(g.i!==7) continue; const d=Math.hypot(g.tx+8*UU-lx, g.ty+3*VV-ly); if(d<cd){cd=d;pick=g;} }
  trackLens();
  const live=scene===0&&on;
  for(const g of gps){
    const found=pick&&g.tx===pick.tx&&g.ty===pick.ty&&g.i>=6&&g.i<=9;
    const o=live?(found?1:.55):.22, tf=live?'translate(0px,0px) rotate(0deg)':g.scatter, c=live&&found?'#F75115':'#F2EEE3';
    if(o!==g.o){ g.el.style.opacity=o; g.o=o; }
    if(tf!==g.tf){ g.el.style.transform=tf; g.tf=tf; }
    if(c!==g.c){ g.el.style.backgroundColor=c; g.el.style.transitionDelay=(c==='#F75115'?'0s, 0s, .9s':'0s'); g.c=c; }
  }
}

/* MAKE: a film set. The idea lands on the clapperboard, it snaps shut, and the film strip shows it as different pieces of work */
function stepHTML(cx,cy,sc){ // the orange idea piece, centred on (cx,cy)
  return [6,7,8,9].map(i=>{ const k=U[i]; const x=(k[0]-8)*UU*sc, y=(k[2]-3)*VV*sc, w=(k[1]-k[0])*UU*sc, h=VV*sc;
    return `<i class="st" style="left:${r2(cx+x)}px;top:${r2(cy+y)}px;width:${r2(w)}px;height:${r2(h)}px"></i>`; }).join('');
}
const makeL=document.getElementById('makeL'), clap=document.getElementById('clap'), clapIn=document.getElementById('clapIn'), clTop=document.getElementById('clTop'), clIdea=document.getElementById('clIdea'),
  mkTake=document.getElementById('mkTake'), mkFlash=document.getElementById('mkFlash'), mkTC=document.getElementById('mkTC'), strip=document.getElementById('strip'), stripTrack=document.getElementById('stripTrack');
clIdea.innerHTML=stepHTML(46,46,.42);
const IDEA={x:1010,y:470};
(function(){ // film frames: the same orange idea as a Reel, Billboard, Podcast, Film and Poster
  const B='#D9D4C9';
  const F=[
    ['Reel',`<div style="position:absolute;left:48px;top:6px;width:40px;height:72px;box-sizing:border-box;border:4px solid ${B};border-radius:8px"></div>${stepHTML(68,42,.25)}`],
    ['Billboard',`<div style="position:absolute;left:20px;top:10px;width:96px;height:46px;box-sizing:border-box;border:4px solid ${B}"></div><i style="position:absolute;left:44px;top:56px;width:4px;height:22px;background:${B}"></i><i style="position:absolute;left:88px;top:56px;width:4px;height:22px;background:${B}"></i>${stepHTML(68,33,.2)}`],
    ['Podcast',Array.from({length:11},(_,i)=>{const h=[14,26,18,40,30,54,30,44,22,32,16][i];return `<i style="position:absolute;left:${22+i*9}px;top:${40-h/2}px;width:5px;height:${h}px;border-radius:3px;background:${i>=4&&i<=6?'#F75115':B}"></i>`;}).join('')],
    ['Film',`<i style="position:absolute;left:0;top:0;width:136px;height:16px;background:#121211"></i><i style="position:absolute;left:0;top:62px;width:136px;height:24px;background:#121211"></i>${stepHTML(68,39,.18)}`],
    ['Poster',`<div style="position:absolute;left:44px;top:6px;width:48px;height:70px;box-sizing:border-box;border:4px solid ${B}"></div>${stepHTML(68,32,.2)}<i style="position:absolute;left:52px;top:60px;width:32px;height:4px;background:${B}"></i>`]
  ];
  let h=''; const STEP=154;
  for(let c=0;c<2;c++) F.forEach((f,n)=>{ const x=(c*F.length+n)*STEP+9; h+=`<div class="fr" style="left:${x}px"><span class="ic">${f[1]}</span><em>${f[0].toUpperCase()}</em></div>`; });
  const W=2*F.length*STEP; for(let x=6;x<W;x+=22) h+=`<i class="sp" style="left:${x}px;top:4px"></i><i class="sp" style="left:${x}px;top:107px"></i>`;
  stripTrack.style.width=W+'px'; stripTrack.innerHTML=h;
})();
const LOOPW=5*154;
let sOff=0, sV=-.7, sDrag=false, sPx=0, take=1, mkStart=0, clapT=[];
function snap(){ if(scene!==1) return;
  clTop.classList.add('snap');
  clapT.push(setTimeout(()=>{ if(scene!==1) return;
    if(!reduce){ clapIn.classList.remove('shake'); void clapIn.offsetWidth; clapIn.classList.add('shake'); mkFlash.classList.remove('go'); void mkFlash.offsetWidth; mkFlash.classList.add('go'); }
    sV=-7; }, 160)); }
function newTake(){ clapT.forEach(clearTimeout); clapT=[]; clTop.classList.remove('snap'); take++; mkTake.textContent=take;
  mkTake.classList.add('pop'); clapT.push(setTimeout(()=>mkTake.classList.remove('pop'),300)); clapT.push(setTimeout(snap,420)); }
function drawCube(){ // name kept: called by go()
  clapT.forEach(clearTimeout); clapT=[];
  clap.style.transform=on?'translate(0px,0px)':'translate(0px,30px)';
  clIdea.querySelectorAll('.st').forEach(e=>{ e.style.transitionDelay=on?'.5s':'0s'; e.style.opacity=on?1:0; });
  if(!on){ clTop.classList.remove('snap'); take=1; mkTake.textContent='1'; mkStart=performance.now(); }
  else clapT.push(setTimeout(snap,650));
}
clap.addEventListener('click',()=>{ if(scene!==1) return; holdBriefly(); if(!on){ on=true; clearTimeout(armT); render(); drawCube(); return; } newTake(); });
strip.addEventListener('pointerdown',e=>{ sDrag=true; sPx=e.clientX; strip.setPointerCapture(e.pointerId); holdBriefly(); });
strip.addEventListener('pointermove',e=>{ if(!sDrag) return; const dx=(e.clientX-sPx)/SC/1.75; sPx=e.clientX; sOff+=dx; sV=dx; holdBriefly(); });
const sUp=()=>{ sDrag=false; }; strip.addEventListener('pointerup',sUp); strip.addEventListener('pointercancel',sUp);
let rollId=0;
function roll(){
  if(!(scene===1 && heroVis)){ rollId=0; return; }
  if(!stage.classList.contains('idle')){
    if(!sDrag){ sV+=(-.7-sV)*.03; sOff+=reduce?0:sV; }
    stripTrack.style.transform=`translateX(${(-md(-sOff,LOOPW)).toFixed(1)}px)`;
    const f=Math.floor((performance.now()-mkStart)/1000*24), ss=Math.floor(f/24), pad=n=>String(n).padStart(2,'0');
    mkTC.textContent=`00:${pad(Math.floor(ss/60)%60)}:${pad(ss%60)}:${pad(f%24)}`;
  }
  rollId=requestAnimationFrame(roll);
}

/* MOVE: a crowd of cream pieces. The orange idea is passed hand to hand, reaches the channels, then the crowd forms an arrow */
const moveL=document.getElementById('moveL'), crowdEl=document.getElementById('crowd'), pills=[...moveL.querySelectorAll('.mv-pill')], rings=[document.getElementById('mvRing1'),document.getElementById('mvRing2')], mvp=[];
const MCX=1060, MCY=470, MRX=295, MRY=250, MO={x:900,y:620};
(function(){ const r=rng(33), frag=document.createDocumentFragment();
  // arrow pointing up-right, made of the pieces inside it
  const A=[[.5,0],[1,.44],[.68,.44],[.68,1],[.32,1],[.32,.44],[0,.44]], AW=370, AH=470, ca=Math.cos(Math.PI/4), sa=Math.sin(Math.PI/4);
  const inArrow=(x,y)=>{ const dx=x-MCX, dy=y-MCY, ux=dx*ca+dy*sa, uy=-dx*sa+dy*ca, nx=ux/AW+.5, ny=uy/AH+.5; let c=false;
    for(let i=0,j=A.length-1;i<A.length;j=i++){ const [xi,yi]=A[i],[xj,yj]=A[j]; if(((yi>ny)!==(yj>ny))&&(nx<(xj-xi)*(ny-yi)/(yj-yi)+xi)) c=!c; } return c; };
  // the brand mosaic: columns of varying width, cut into pieces of varying height
  for(let x=MCX-MRX; x<MCX+MRX; ){ const w=[12,18,18,24][Math.floor(r()*4)];
    for(let y=MCY-MRY-Math.floor(r()*40); y<MCY+MRY; ){ const h=[22,30,30,40,52][Math.floor(r()*5)];
      const cx=x+w/2, cy=y+h/2, e=Math.hypot((cx-MCX)/MRX,(cy-MCY)/MRY);
      if(e<=1){
        const el=document.createElement('div'); el.className='mv-p';
        el.style.cssText=`left:${x+1.5}px;top:${y+1.5}px;width:${w-3}px;height:${h-3}px`;
        const b=document.createElement('div'); b.className='mv-b';
        if(!reduce){ b.classList.add('bob'); b.style.setProperty('--bob',(.7+r()*.6).toFixed(2)+'s'); b.style.setProperty('--bobd',(-r()*1.2).toFixed(2)+'s'); }
        const ii=document.createElement('i'); if(e>.84) ii.style.opacity=.2; b.appendChild(ii); el.appendChild(b); frag.appendChild(el);
        mvp.push({el,b,ii,cx,cy,edge:e>.84,arrow:inArrow(cx,cy),t:((cx-MCX)-(cy-MCY))/Math.SQRT2,ox:0,oy:0,st:''});
      }
      y+=h; }
    x+=w; }
  crowdEl.appendChild(frag);
})();
const pillXY=pills.map(p=>({x:parseFloat(p.style.left),y:parseFloat(p.style.top)}));
const pillCol=pills.map(p=>p.style.getPropertyValue('--pc').trim()), pillShare=pills.map(p=>+p.dataset.share), pillPct=pills.map(p=>p.querySelector('em'));
// each piece first takes the colour of the channel nearest to it
mvp.forEach(p=>{ let best=0,bd=1e9; pillXY.forEach((q,k)=>{ const d=Math.hypot(p.cx-q.x,p.cy-q.y); if(d<bd){bd=d;best=k;} }); p.near=best; });
// inside the arrow, pieces are banded tail-to-tip by each channel's share: Billboards, Feed, Communities, Creators
(function(){ const arr=mvp.filter(p=>p.arrow).sort((a,b)=>a.t-b.t), order=[3,2,1,0]; let i=0;
  order.forEach((k,n)=>{ const cnt=n===order.length-1?arr.length-i:Math.round(arr.length*pillShare[k]/100); for(let c=0;c<cnt&&i<arr.length;c++) arr[i++].band=k; }); })();
let pctRaf=0;
function countUp(){ const t0=performance.now(); cancelAnimationFrame(pctRaf);
  (function f(now){ const q=Math.min(1,(now-t0)/1100), e=1-Math.pow(1-q,3); pillPct.forEach((el,k)=>el.textContent=Math.round(pillShare[k]*e)+'%'); if(q<1) pctRaf=requestAnimationFrame(f); })(t0); }
let mvT=[], mvOrigin={...MO};
function mvClear(){ mvT.forEach(clearTimeout); mvT=[]; }
function mvReset(){ mvClear();
  for(const p of mvp){ p.el.classList.remove('hot','dim'); p.ii.style.transitionDelay='0s'; if(p.edge) p.ii.style.opacity=.2; }
  pills.forEach(p=>{ p.classList.remove('lit','done'); p.style.transitionDelay='0s'; }); cancelAnimationFrame(pctRaf); pillPct.forEach(el=>el.textContent='0%');
  rings.forEach(r=>{ r.style.animation='none'; });
}
function mvWave(ox,oy){ mvReset(); mvOrigin={x:ox,y:oy};
  const SP=620; let far=0;
  void crowdEl.offsetWidth;
  for(const p of mvp){ const d=Math.hypot(p.cx-ox,p.cy-oy)/SP; far=Math.max(far,d);
    p.ii.style.transitionDelay=d.toFixed(2)+'s'; if(p.edge) p.ii.style.opacity='';
    p.el.style.setProperty('--pc',pillCol[p.near]); p.el.classList.add('hot');
    if(!reduce){ p.el.style.animation='none'; void p.el.offsetWidth; p.el.style.animation=`mvPop .55s cubic-bezier(.3,1.4,.5,1) ${d.toFixed(2)}s`; } }
  pills.forEach((pl,k)=>{ const d=Math.hypot(pillXY[k].x-ox,pillXY[k].y-oy)/SP+.1; pl.style.transitionDelay=d.toFixed(2)+'s'; pl.classList.add('lit'); });
  rings.forEach((r,k)=>{ r.style.left=ox+'px'; r.style.top=oy+'px'; if(!reduce){ void r.offsetWidth; r.style.animation=`mvRing 1.6s cubic-bezier(.2,.7,.3,1) ${k*.35}s`; } });
  // then the crowd settles into an arrow, pointing where the idea goes next
  mvT.push(setTimeout(()=>{ if(scene!==2) return;
    for(const p of mvp){ p.ii.style.transitionDelay=(p.arrow?(p.t+400)/1600:Math.random()*.3).toFixed(2)+'s'; if(p.arrow) p.el.style.setProperty('--pc',pillCol[p.band]); else { p.el.classList.remove('hot'); p.el.classList.add('dim'); } }
    pills.forEach(pl=>{ pl.style.transitionDelay='0s'; pl.classList.add('done'); }); countUp(); }, (far+.9)*1000));
}
function drawMove(){
  if(scene!==2){ mvReset(); return; }
  if(on) mvWave(MO.x,MO.y); else mvReset();
}
moveL.addEventListener('pointerdown',e=>{ if(scene!==2) return;
  const r=stage.getBoundingClientRect(), x=(e.clientX-r.left)/r.width*1440, y=(e.clientY-r.top)/r.height*900;
  if(Math.hypot((x-MCX)/MRX,(y-MCY)/MRY)>1.25) return;
  holdBriefly(); if(!on){ on=true; clearTimeout(armT); render(); } mvWave(x,y); });
/* moving the mouse through the crowd nudges people out of the way */
let stirId=0;
function stir(){
  if(!(scene===2 && heroVis && !reduce)){ stirId=0; return; }
  if(!stage.classList.contains('idle')){
    const R=150;
    for(const p of mvp){ const dx=p.cx-mx, dy=p.cy-my, d=Math.hypot(dx,dy);
      let tx=0, ty=0; if(moved && d<R && d>0){ const f=(1-d/R)*22; tx=dx/d*f; ty=dy/d*f; }
      p.ox+=(tx-p.ox)*.15; p.oy+=(ty-p.oy)*.15;
      const st=`translate(${p.ox.toFixed(1)}px,${p.oy.toFixed(1)}px)`; if(st!==p.st){ p.el.style.translate=`${p.ox.toFixed(1)}px ${p.oy.toFixed(1)}px`; p.st=st; } }
  }
  stirId=requestAnimationFrame(stir);
}
function syncLoops(){
  if(scene===1 && heroVis){ if(!rollId) rollId=requestAnimationFrame(roll); }
  else if(rollId){ cancelAnimationFrame(rollId); rollId=0; }
  if(scene===2 && heroVis && !reduce){ if(!stirId) stirId=requestAnimationFrame(stir); }
  else if(stirId){ cancelAnimationFrame(stirId); stirId=0; }
}
heroEl.addEventListener('pointerleave',()=>{ moved=false; });

/* the travelling orange piece */
const token=document.getElementById('token');
token.innerHTML=[6,7,8,9].map(i=>{ const k=U[i]; return `<i style="left:${r2(k[0]*UU-8*UU)}px;top:${r2(k[2]*VV-3*VV)}px;width:${r2((k[1]-k[0])*UU)}px;height:${r2(VV)}px"></i>`; }).join('');

const steps=[...document.querySelectorAll('#steps button')], scenesEls=[...document.querySelectorAll('.scene')], hint=document.getElementById('sceneHint');
const HINTS=coarseHint();
function coarseHint(){ const c=matchMedia('(pointer: coarse)').matches;
  return c?['The lens searches the crowd for the right words.','Swipe the film to scrub through it.','Tap the crowd to start a new wave.']
          :['Move your mouse to look around with the lens.','Drag the film to scrub through it.','Move through the crowd. Click anywhere in it to start a new wave.']; }
function render(){
  drawField();
  let tf, o, od;
  if(scene===0){ const tpx=lx, tpy=ly; tf=`translate(${r2(tpx)}px,${r2(tpy)}px) scale(${S}) rotate(0deg)`; o=on?0:(prev!=null?1:0); od=on?'.3s ease 1.1s':'.2s ease 0s'; }
  else if(scene===1){ tf=`translate(${IDEA.x}px,${IDEA.y}px) scale(.45) rotate(-4deg)`; o=on?0:1; od=on?'.3s ease .45s':'.2s ease 0s'; }
  else { tf=`translate(${mvOrigin.x}px,${mvOrigin.y}px) scale(1.1) rotate(0deg)`; o=on?0:1; od=on?'.25s ease 0s':'.2s ease 0s'; }
  token.style.transition=`transform 1.1s cubic-bezier(.65,0,.25,1), opacity ${od}`; token.style.transform=tf; token.style.opacity=o;
}
function paintStage(k){
  [lensEl, makeL, moveL].forEach((el,i)=>{
    el.style.opacity='';
    el.style.visibility='';
    el.classList.toggle('on', i===k);
    el.classList.toggle('past', i<k);
  });
}
function applyScene(k){
  prev=scene; scene=k;
  heroEl.classList.toggle('is-make',k===1);
  heroEl.classList.toggle('is-move',k===2);
  steps.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===k)));
  scenesEls.forEach((el,i)=>{ el.classList.toggle('on',i===k); el.classList.toggle('past',i<k); });
  hint.textContent=HINTS[k];
  paintStage(k);
  syncLoops();
}
/* Pose the incoming plate while it is still hidden, then fade it in with the copy. */
function showScene(k){
  if(k===scene) return;
  if(k!==2) mvReset();
  mvOrigin={...MO};
  if(k===1) drawCube();
  applyScene(k);
  if(k===2) drawMove();
}
function go(k){
  if(k===scene) return;
  on=false;
  applyScene(k);
  if(k!==2) mvReset(); mvOrigin={...MO}; render(); if(k===1) drawCube(); if(k===2) drawMove();
  clearTimeout(armT); armT=setTimeout(()=>{ on=true; render(); if(scene===1) drawCube(); if(scene===2) drawMove(); }, k===0?450:1050);
}
let holdT=0;
function holdBriefly(){ heroEl.classList.add('hold'); clearTimeout(holdT); holdT=setTimeout(()=>heroEl.classList.remove('hold'),2500); }
heroEl.addEventListener('pointerdown',holdBriefly);
/* pause motion and the loop while the hero is off screen */
new IntersectionObserver(es=>{ heroVis=es[0].isIntersecting; stage.classList.toggle('idle',!heroVis); heroEl.classList.toggle('off',!heroVis); syncLoops(); },{threshold:0}).observe(heroEl);
const ribEl=document.querySelector('.ribbons');
new IntersectionObserver(es=>{ ribEl.classList.toggle('idle',!es[0].isIntersecting); },{threshold:0}).observe(ribEl);
scrollJobs.push(()=>{ stageBox=null; });
function stagePoint(e){
  if(!stageBox) stageBox=stage.getBoundingClientRect();
  const w=stageBox.width||1, h=stageBox.height||1;
  return { x:(e.clientX-stageBox.left)/w*1440, y:(e.clientY-stageBox.top)/h*900 };
}
heroEl.addEventListener('pointermove',e=>{
  const p=stagePoint(e);
  mx=p.x; my=p.y; moved=true; holdBriefly();
  if(p.x>700){ lx=Math.max(830,Math.min(1170,p.x)); ly=Math.max(300,Math.min(560,p.y)); trackLens(); }
},{passive:true});
render();

/* ---- The hero is a vertical carousel ----
   It sits at the top of the page and does not scroll. One scroll, swipe or arrow key moves exactly one screen:
   Find, Make, Move. One more carries the page down to the logo strip, and from there the page scrolls normally.
   Scrolling back up past the logo strip returns to the hero, which is always waiting on Find.
   The page never rests half way between the hero and the logo strip. */
const heroPin=document.getElementById('heroPin'), scrollCue=document.getElementById('scrollCue');
const holdEl=document.getElementById('logoHold'), lgEl=holdEl.querySelector('.logos'), rootEl=document.documentElement;
const heroEnd=()=>Math.max(0,Math.round(holdEl.getBoundingClientRect().top+scrollY));   // where the hero ends and the logo strip reaches the top
const inIntro=()=>rootEl.classList.contains('intro'), menuOpen=()=>document.body.classList.contains('menu-open');
if(reduce) rootEl.classList.add('rm');
function pinLayout(){ heroEl.style.top=''; heroPin.style.height=''; pinScroll(); }
function pinScroll(){
  if(innerWidth!==VW || Math.abs(innerHeight-VH)>140){ syncVH(); layout(); pinLayout(); return; }
  // once the hero is off screen it goes back to Find, ready for the next visit
  if(scene!==0 && !glide && heroEl.getBoundingClientRect().bottom<=1) go(0);
  if(scrollCue) scrollCue.classList.toggle('gone', scene!==0 || scrollY>2);
  wheelGate();
}

/* gliding the page between the hero (top) and the logo strip */
let glide=null, glideId=0, stepLock=0, wSwallow=false; const STEP_MS=850;   // each step holds for this long, so a fast scroll still shows Find, Make and Move one at a time
function glideStop(){ if(glide){ glide=null; cancelAnimationFrame(glideId); rootEl.style.scrollBehavior=''; } }
function glideTo(y){
  y=Math.max(0,Math.round(y)); const from=scrollY; wSwallow=true;
  rootEl.style.scrollBehavior='auto';
  if(reduce || Math.abs(from-y)<2){ window.scrollTo(0,y); glide=null; rootEl.style.scrollBehavior=''; pinScroll(); return; }
  const dur=Math.min(900,Math.max(420,Math.abs(y-from)*.9));
  stepLock=Math.max(stepLock,performance.now()+dur);
  glide={from,to:y,t0:0,dur}; glideId=requestAnimationFrame(glideStep);
}
function glideStep(now){
  const g=glide; if(!g){ rootEl.style.scrollBehavior=''; return; }
  if(!g.t0) g.t0=now;
  const t=Math.min(1,(now-g.t0)/g.dur), e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  window.scrollTo(0,g.from+(g.to-g.from)*e);
  if(t<1) glideId=requestAnimationFrame(glideStep); else { glide=null; rootEl.style.scrollBehavior=''; pinScroll(); }
}
/* one step of the carousel; from Move, the step forward leaves the hero for the logo strip */
function carStep(dir,lock){
  const now=performance.now(); if(now<stepLock) return;
  if(dir>0 && scene===2){ stepLock=now+lock; glideTo(heroEnd()); return; }
  const k=scene+dir; if(k<0 || k>2) return;
  stepLock=now+lock; go(k); pinScroll();
}

/* wheel and trackpad. A trackpad flick keeps sending events for a second or two as it coasts, so a new step
   needs a new push (a pause, or the stream speeding up again), never the tail of the last one. */
let wT=0, wPeak=0, wMin=0, wheelOn=false;
function wheelFresh(e,dy){
  const t=e.timeStamp||performance.now(), a=Math.abs(dy), gap=t-wT; wT=t;   // the event's own time, so a busy page cannot fake a pause
  if(gap>240){ wPeak=wMin=a; return true; }                                  // a new push only after the wheel or trackpad has stopped
  if(a>wPeak){ wPeak=a; wMin=a; } else if(a<wMin) wMin=a;
  return false;
}
function onWheel(e){
  if(e.ctrlKey || menuOpen()) return;
  let dy=e.deltaY; if(e.deltaMode===1) dy*=32; else if(e.deltaMode===2) dy*=VH;
  if(!dy || Math.abs(e.deltaX)>Math.abs(dy)) return;
  const y=scrollY, end=heroEnd();
  if(inIntro()){ if(y<=end) e.preventDefault(); return; }
  const fresh=wheelFresh(e,dy);
  if(fresh) wSwallow=false;
  if(glide){ e.preventDefault(); return; }
  if(wSwallow){ if(y<=end+2) e.preventDefault(); return; }   // the tail of the push that started a glide goes no further
  if(y<=2){                                   // the hero is in place: it behaves as a carousel
    if(dy<0 && scene===0) return;             // nothing above Find
    e.preventDefault();
    if(fresh) carStep(dy>0?1:-1,STEP_MS);
    return;
  }
  if(y<end-1 || (y<=end+2 && dy<0)){ e.preventDefault(); glideTo(dy>0?end:0); }   // between the hero and the logos: carry on to whichever end you are heading for
}
/* only listen for the wheel near the hero, so the rest of the page keeps the browser's own fast scrolling.
   This is added and removed after setup, so the cleanup below removes it by hand. */
function wheelGate(){ const need=scrollY<=heroEnd()+VH*.5; if(need===wheelOn) return; wheelOn=need;
  if(need) window.addEventListener('wheel',onWheel,{passive:false}); else window.removeEventListener('wheel',onWheel,{passive:false}); }

/* touch: a swipe on the hero steps the carousel; the hero itself never scrolls under a finger */
let touching=false, touchT=0, tY=0, tX=0, tOk=false, tUsed=false;
heroEl.addEventListener('touchstart',e=>{ tOk=e.touches.length===1; tUsed=false; if(tOk){ tY=e.touches[0].clientY; tX=e.touches[0].clientX; } },{passive:true});
heroEl.addEventListener('touchmove',e=>{
  if(!tOk || e.touches.length!==1 || menuOpen()) return;
  const dy=tY-e.touches[0].clientY, dx=tX-e.touches[0].clientX;
  if(e.cancelable && Math.abs(dy)+Math.abs(dx)>6) e.preventDefault();
  if(tUsed || glide || inIntro() || Math.abs(dy)<26 || Math.abs(dy)<Math.abs(dx)*1.2) return;
  tUsed=true;
  const dir=dy>0?1:-1;
  if(scrollY<=2) carStep(dir,STEP_MS); else glideTo(dir>0?heroEnd():0);
},{passive:false});

/* the Find / Make / Move tabs jump straight to that step */
steps.forEach(b=>{
  b.addEventListener('click',()=>{ const k=+b.dataset.k; if(k!==scene) go(k); if(scrollY>2) glideTo(0); else pinScroll(); });
});

/* keyboard */
addEventListener('keydown',e=>{
  if(e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || menuOpen() || inIntro()) return;
  const el=e.target, tag=(el && el.tagName)||'';
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (el && el.isContentEditable)) return;
  const sp=e.key===' '||e.key==='Spacebar';
  if(sp && /^(BUTTON|A|SUMMARY)$/.test(tag)) return;
  const down=e.key==='ArrowDown'||e.key==='PageDown'||(sp&&!e.shiftKey);
  const up=e.key==='ArrowUp'||e.key==='PageUp'||(sp&&e.shiftKey);
  if(!down && !up) return;
  if(glide){ e.preventDefault(); return; }
  const y=scrollY, end=heroEnd();
  if(y<=2){ if(up && scene===0) return; e.preventDefault(); carStep(down?1:-1,STEP_MS); }
  else if(y<end-1){ e.preventDefault(); glideTo(down?end:0); }
});

document.getElementById('skipIntro').addEventListener('click',()=>{ stepLock=0; wSwallow=false; glideTo(heroEnd()); });

/* safety net: however the page got there (scrollbar, momentum, a link), it never rests between the hero and the logos */
let lastSY=scrollY, dirDown=true, idleT=0, refreshT=0;
function settle(){
  if(glide || inIntro()) return;
  if(touching && performance.now()-touchT<1200) return;
  const y=scrollY, end=heroEnd(); if(y<=1 || y>=end-1) return;
  const tol=VH*.06;
  glideTo(y>end-tol?end:(y<tol?0:(dirDown?end:0)));
}
const settleSoon=()=>{ clearTimeout(idleT); idleT=setTimeout(settle,120); };
scrollJobs.push(()=>{
  const y=scrollY; if(Math.abs(y-lastSY)>.5){ dirDown=y>lastSY; lastSY=y; }
  pinScroll();
  if(glide) clearTimeout(idleT); else settleSoon();
});
const tTrack=e=>{ touching=e.touches.length>0; touchT=performance.now(); if(!touching) settleSoon(); };
addEventListener('touchstart',e=>{ tTrack(e); if(glide && !heroEl.contains(e.target)) glideStop(); },{passive:true});
addEventListener('touchmove',e=>{ touchT=performance.now(); if(glide && !heroEl.contains(e.target)) glideStop(); },{passive:true});
addEventListener('touchend',tTrack,{passive:true}); addEventListener('touchcancel',tTrack,{passive:true});

const syncLg=()=>holdEl.style.setProperty('--lgH',lgEl.offsetHeight+'px');
function relayout(){ syncLg(); layout(); pinLayout(); }
const scheduleRefresh=()=>{ clearTimeout(refreshT); refreshT=setTimeout(relayout,120); };
syncLg();
addEventListener('resize',()=>{ syncLg(); if(syncVH()||innerWidth>=900){ layout(); pinLayout(); } });
addEventListener('load',()=>{ syncVH(); relayout(); settleSoon(); });
if(document.fonts) document.fonts.ready.then(scheduleRefresh);
pinLayout(); setTimeout(scheduleRefresh,700);

const introOn=document.documentElement.classList.contains('intro');
armT=setTimeout(()=>{ on=true; render(); }, introOn?2250:450);

/* ---- Ticker ---- */
/* ---- Client logos (files in public/img/clients) ---- */
// [name, svg file, height in em (wordmarks shorter, round badges taller), svg width/height]
// Each logo is drawn as a shape filled with the text colour, so it can turn orange on hover.
const LOGOS=[
  ['Adidas','adidas',1.4,'1195/581'],
  ['Google','google',1.2,'272/92'],
  ['Meta','meta',.95,'2404/490'],
  ['Cadbury','cadbury',1.3,'2404/980'],
  ['Nivea','nivea',1.7,'2404/2404'],
  ['Vaseline','vaseline',1.5,'2402/1630'],
  ['Martell','martell',1.3,'2404/916'],
  ['inDrive','indrive',1.1,'2404/682'],
  ['Glovo','glovo',1.2,'2404/794'],
  ['Chowdeck','chowdeck',1.7,'2404/2404'],
  ['Breet','breet',1.6,'2404/2404'],
  ['Temu','temu',1,'2404/582'],
  ['OPay','opay',1.2,'2404/801'],
  ['Flutterwave','flutterwave',.85,'2402/383'],
  ['Leatherback','leatherback',.78,'2404/326'],
  ['Revoo','revoo',.85,'2404/406'],
  ['itel','itel',1.5,'2398/1522'],
  ['Boomplay','boomplay',.95,'2404/507'],
  ['TomTom','tomtom',1.5,'1760/1105']
];
const lseq=hide=>LOGOS.map(([n,f,h,ar])=>`<span class="lg lg-img" ${hide?'aria-hidden="true"':`role="img" aria-label="${n}"`}><i style="height:${h}em;aspect-ratio:${ar};--m:url(/img/clients/${f}.svg)"></i></span>`).join('');
document.getElementById('logoTrack').innerHTML=lseq(false)+lseq(true);

/* ---- About: one plain statement, coming into focus slowly as you scroll ---- */
const SAY=['We find the language your people already trust','and build your brand around it.','Then we make work that stops the scroll,','and move it through the communities','who inspired it.'];
const aboutEl=document.getElementById('about'), sayEl=document.getElementById('say');
const phs=SAY.map((t,k)=>{ const b=document.createElement('span'); b.className='ph'+(k===SAY.length-1?' hi':''); b.textContent=t; sayEl.appendChild(b); if(k<SAY.length-1) sayEl.appendChild(document.createTextNode(' ')); return b; });
function drawAbout(){
  let p;
  if(innerWidth<=1024){ // compact band: the statement comes into focus as it rises through the screen
    const r=sayEl.getBoundingClientRect(); p=reduce?1:Math.min(1,Math.max(0,(VH*.9-r.top)/(r.height+VH*.4)));
  } else {
    const r=aboutEl.getBoundingClientRect(), span=Math.max(1,r.height-innerHeight);
    p=reduce?1:Math.min(1,Math.max(0,(innerHeight*.35-r.top)/(span+innerHeight*.35)));
  }
  phs.forEach((b,k)=>b.classList.toggle('on',p>.06+k*.15));
}
scrollJobs.push(drawAbout); addEventListener('resize',drawAbout);
drawAbout(); if(document.fonts) document.fonts.ready.then(drawAbout);

/* ---- FAQ: ask the crowd ---- */
const FAQ=[
  ['brand','Why not book influencers myself?','You\'d be buying reach alone. We add belief, guaranteed delivery, and no ghosting after payment.'],
  ['brand','Can you guarantee results?','Reach, yes, in writing. Conversations and sentiment are reported honestly. Not sure yet? Start with a Chorus Pilot: one vertical, one window, guaranteed reach.'],
  ['agency','We\'re an agency. Will you take our client?','No. Non-circumvention is written into every agency contract. You keep the client; we\'re the engine behind the work.'],
  ['brand agency','How much does it cost?','Every project is priced per brief. Tell us your budget on the discovery call and we\'ll scope the work to fit, with clear options.'],
  ['creator','I\'m a creator. How do I get work?','Join the network. Clear briefs, fair fees, paid as agreed. Strong performers are invited into Talent Management.'],
  ['agency','Will the quality hold under our name?','You\'re carried along throughout, past work sets the benchmark, and nothing goes out without your approval.'],
  ['brand','Do you work with small brands?','Yes. Early-stage brands usually start with Brand & Design: strategy, naming and identity. Marketing retainers suit brands ready to run campaigns.'],
  ['brand agency creator','How do we start?','With a discovery call. We learn what you want people to say about you, then scope the work around it.']
];
const WHO={brand:['orange','Brand asks'],agency:['cyan','Agency asks'],creator:['purple','Creator asks']};
const roomEl=document.getElementById('room'), panel=document.getElementById('panel'), cpQ=document.getElementById('cpQ'), cpA=document.getElementById('cpA');
const qr=rng(11), qbs=[];
FAQ.forEach(([w,q,a],k)=>{
  const first=w.split(' ')[0], multi=w.includes(' ');
  const b=document.createElement('button'); b.type='button'; b.className='qb';
  paint(b, multi?'yellow':WHO[first][0]);
  b.style.setProperty('--r',((qr()-.5)*6).toFixed(1)+'deg'); b.style.setProperty('--dx',((qr()-.5)*14).toFixed(0)+'px'); b.style.setProperty('--dy',((qr()-.5)*14).toFixed(0)+'px');
  b.innerHTML=`<small></small><span></span>`; b.querySelector('small').textContent=multi?(w.split(' ').length>2?'Everyone asks':'Brands and agencies ask'):WHO[first][1]; b.querySelector('span').textContent=q;
  b.addEventListener('click',()=>openQ(k,true));
  roomEl.appendChild(b); qbs.push({b,w:w.split(' '),q,a});
});
{ const m=document.createElement('a'); m.className='qb more'; m.href='#fit'; m.style.cssText='--r:2deg;--dx:0px;--dy:0px';
  m.innerHTML='<small>Your turn</small><span>Got another question? Ask us on a call.</span>'; document.getElementById('yourTurn').appendChild(m); }
let curQ=-1, cpT=0;
function openQ(k,user){
  if(k===curQ) return; curQ=k; const it=qbs[k];
  qbs.forEach((x,i)=>{ x.b.classList.toggle('sel',i===k); x.b.setAttribute('aria-pressed',String(i===k)); });
  cpQ.textContent=it.q; cpQ.style.setProperty('--c',getComputedStyle(it.b).getPropertyValue('--c')); cpQ.style.setProperty('--on',getComputedStyle(it.b).getPropertyValue('--on'));
  cpA.textContent=it.a;
  if(!reduce){ cpQ.classList.remove('pop'); void cpQ.offsetWidth; cpQ.classList.add('pop'); panel.classList.add('typing'); clearTimeout(cpT); cpT=setTimeout(()=>panel.classList.remove('typing'),750); }
  const y0=it.b.getBoundingClientRect().top;
  placePanel(k);
  if(user && innerWidth<=860){
    // the answer may have just left a spot above this question: keep the tapped question exactly where the finger is
    const dy=it.b.getBoundingClientRect().top-y0; if(Math.abs(dy)>1) scrollBy({top:dy,behavior:'instant'});
    // bring the whole answer into view, now and again once the reply has finished typing, without pushing the question off the top
    const reveal=()=>{ if(curQ!==k) return; const r=panel.getBoundingClientRect(); if(r.bottom>innerHeight-12) scrollBy({top:Math.max(0,Math.min(r.bottom-innerHeight+20, it.b.getBoundingClientRect().top-84)),behavior:reduce?'auto':'smooth'}); };
    reveal(); setTimeout(reveal,820);
  }
}
function placePanel(k){
  if(innerWidth<=860 && k>=0){ const cols=innerWidth<=520?1:2, i=cols===2?Math.min(qbs.length-1,k|1):k;   // two columns: under the tapped question's row
    if(qbs[i].b.nextSibling!==panel) qbs[i].b.after(panel); }
  else if(panel.parentNode!==roomEl.parentNode) roomEl.after(panel);
}
addEventListener('resize',()=>placePanel(curQ));
openQ(0,false);

/* ---- Footer wordmark rises letter by letter as you reach the end ---- */
const footWord=document.getElementById('footWord'), fsl=[...footWord.querySelectorAll('.fs')];
function drawFoot(){
  const r=footWord.getBoundingClientRect();
  const p=reduce?1:Math.max(0,(innerHeight-r.top)/(r.height*1.25));
  fsl.forEach((el,k)=>{ const t=Math.min(1,Math.max(0,p*1.6-k*0.1)), eased=1-Math.pow(1-t,3); el.style.transform=`translateY(${((1-eased)*105).toFixed(1)}%)`; });
}
scrollJobs.push(drawFoot); addEventListener('resize',drawFoot); drawFoot();

/* ---- Menu ---- */
const menuBtn=document.getElementById('menuBtn'), sheet=document.getElementById('sheet');
const menuLinks=[...sheet.querySelectorAll('nav a')];
let menuFrame=0;
/* Closed clip must be painted once before the first open, or the circle skips and the blur flashes full-screen. */
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
    sheet.setAttribute('aria-hidden',String(!open));
    if(open) nav.classList.remove('hide','light');
  };
  // Commit the link delays, then expand on the next frame so the first wipe has a real start.
  if(open) menuFrame=requestAnimationFrame(apply);
  else apply();
}
menuBtn.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
sheet.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{ if(e.key==='Escape') setMenu(false); });

/* ---- SERVICES: three equal pillars with a details drawer ---- */
const PILLARS=[
  {h:'Find it.', cat:'Brand & Design', c:'yellow', sh:'o', p:'We listen to your audience and understand what matters to them, then find the right words and visuals to make your brand resonate.',
   items:[['Brand Strategy','Brand Positioning','Positioning, messaging, brand story to personalise your brand.'],['Verbal Identity','Messaging & Tone','Tone of voice, tagline, and key messages that defines how you sound.'],['Visual Identity','Logo & Brand Identity','Logo system, colour, type, and guidelines for how you brand looks.'],['Campaign & Collateral','Campaign & Print Design','Key visuals, OOH artwork, social templates, decks, and print that define how your brand shows up everywhere else.']]},
  {h:'Make it.', cat:'Studio', c:'cyan', sh:'sq', p:'We turn the language into content people actually want to watch and share, not just another ad to scroll past.',
   items:[['Brand films & commercials','Video Production','Scripting, directing, and full commercial production for launches and big campaigns.'],['Always-on content','Social Media Content','A steady flow of posts so your page never goes quiet.'],['Photography','Brand Photography','Images that look like your world. Editorial, lifestyle, and product shoots.'],['Motion & animation','Motion Graphics','2D and 3D motion graphics, title systems, and product animation that make complex ideas clear in seconds.'],['Digital designs','Web & UI Design','Thoughtful digital design, built for seamless experiences. Websites, landing pages, and interactive content.'],['Podcasts & long-form','Podcasts & Video Series','Podcasts, video series, and long-form content designed to build audiences and strengthen brand presence.'],['Behind the scenes','Documentary & BTS','Behind-the-scenes content and documentary-style storytelling that bring your brand closer to its audience.']]},
  {h:'Move it.', cat:'Marketing', c:'orange', sh:'o', p:'We put it right back into the hands of the communities that inspired it through creators and channels they already trust.',
   items:[['Chorus','Influencer Marketing','Coordinated creator campaigns that expand reach and build audience engagement.'],['VAN','Content Distribution','Targeted content distribution across trusted digital publishers and niche online communities.'],['Dialect','Social Media Management','Always on social media management (platform native strategy, posting, and active community engagement)'],['Cosign','PR','Endorsements from the voices your audience trusts.'],['Landmark','Out of Home','Billboards, BRTs, danfos and keke wraps that put your brand on the streets your audience live in.'],['Experiential','Events & Activations','Brand activations and pop-ups people want to experience and share.']]}
];
const pillarsEl=document.getElementById('pillars'), drawer=document.getElementById('drawer'), drawerIn=document.getElementById('drawerIn');
let openPillar=-1, pillarCards=[], drawerT=0;
PILLARS.forEach((pl,k)=>{
  const b=document.createElement('button'); b.type='button'; b.className='pillar'; b.setAttribute('aria-expanded','false'); b.setAttribute('aria-controls','drawer');
  paint(b,pl.c);
  b.innerHTML=`<span class="row"><span class="cat"></span><span class="shape ${pl.sh}"></span></span><h3></h3><p></p><span class="tags">${pl.items.map(()=>'<span></span>').join('')}</span><span class="more">See what's inside <i>↓</i></span>`;
  b.querySelector('.cat').textContent=pl.cat; b.querySelector('h3').textContent=pl.h; b.querySelector('p').textContent=pl.p;
  b.querySelectorAll('.tags span').forEach((t,i)=>t.textContent=pl.items[i][0]);
  b.addEventListener('click',()=>showPillar(openPillar===k?-1:k));
  pillarsEl.appendChild(b); pillarCards.push(b);
});
const stacked=()=>getComputedStyle(pillarsEl).gridTemplateColumns.trim().split(/\s+/).length===1;
function placeDrawer(k){ // stacked: directly beneath its own card; side by side: beneath the row, tied to the open card by colour
  if(stacked() && k>=0){ if(pillarCards[k].nextSibling!==drawer) pillarCards[k].after(drawer); }
  else if(drawer.parentNode!==pillarsEl.parentNode || pillarsEl.nextSibling!==drawer) pillarsEl.after(drawer);
}
matchMedia('(max-width:860px)').addEventListener('change',()=>placeDrawer(openPillar));
function showPillar(k){
  clearTimeout(drawerT);
  const was=openPillar; openPillar=k;
  pillarCards.forEach((el,i)=>{ el.classList.toggle('on',i===k); el.setAttribute('aria-expanded',String(i===k)); });
  if(k<0){ drawer.classList.remove('open'); return; }
  // switching straight from one open card to another on a stacked layout: close, move under the new card, then open
  if(was>=0 && was!==k && stacked() && drawer.classList.contains('open')){ drawer.classList.remove('open'); drawerT=setTimeout(()=>fillPillar(k),reduce?0:420); return; }
  fillPillar(k);
}
function fillPillar(k){
  placeDrawer(k);
  const pl=PILLARS[k]; paint(drawerIn,pl.c);
  drawerIn.innerHTML=`<div class="drawer-top"><h4></h4><button type="button">Close</button></div><div class="items">${pl.items.map(()=>'<div class="item"><b></b><em></em><span></span></div>').join('')}</div>`;
  drawerIn.querySelector('h4').textContent=`${pl.h.replace('.','')} · ${pl.cat}`;
  drawerIn.querySelectorAll('.item').forEach((it,i)=>{ it.querySelector('b').textContent=pl.items[i][0]; const em=it.querySelector('em'); if(pl.items[i][1]!==pl.items[i][0]) em.textContent=pl.items[i][1]; else em.remove(); it.querySelector('span').textContent=pl.items[i][2]; });
  drawerIn.querySelector('button').addEventListener('click',()=>showPillar(-1));
  void drawer.offsetWidth; drawer.classList.add('open');
  setTimeout(()=>drawer.scrollIntoView({block:'nearest',behavior:reduce?'auto':'smooth'}),350);
}


/* ---- Touch: the card in the middle of the screen takes its hover colour, one at a time ---- */
function touchFocus(cards){
  const band0=VH*.18, band1=VH*.82, rows=[];
  cards.forEach(el=>{ const r=el.getBoundingClientRect(); let row=rows.find(w=>Math.abs(w.top-r.top)<6); if(!row){ row={top:r.top,bottom:r.bottom,els:[]}; rows.push(row); } row.els.push(el); });
  let pick=null, best=1e9;
  for(const row of rows){ if(row.bottom<band0||row.top>band1) continue;
    const c=(row.top+row.bottom)/2, d=Math.abs(c-VH*.48); if(d<best){ best=d; pick=row; } }
  let on=null;
  if(pick){ if(pick.els.length===1) on=pick.els[0];
    else { const q=Math.min(.999,Math.max(0,(VH*.8-pick.top)/(VH*.6))); on=pick.els[Math.floor(q*pick.els.length)]; } }
  cards.forEach(el=>el.classList.toggle('focus',el===on));
}
if(TOUCH){ const fitCards=[...document.querySelectorAll('.pc')];
  const runFocus=()=>{ touchFocus(pillarCards); touchFocus(fitCards); };
  scrollJobs.push(runFocus); addEventListener('resize',runFocus); runFocus(); }

/* ---- Sliding colour pills + Find/Make/Move lighting up on scroll ---- */
const fmmT=document.getElementById('fmmTitle'), fmmSpans=[...fmmT.querySelectorAll('span')];
function drawSvc(){
  const y=scrollY;
  const r=fmmT.getBoundingClientRect(), p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(innerHeight*.5)));
  fmmSpans.forEach((s,k)=>s.classList.toggle('lit', reduce || p>(k+.4)/3.4));
}
scrollJobs.push(drawSvc);

/* ---- Nav: stays put through the hero; after the hero it can hide on the way down ---- */
const nav=document.getElementById('navwrap'), creams=[...document.querySelectorAll('.cream')];
let lastNavY=scrollY;
function inHeroZone(){
  return heroEl.getBoundingClientRect().bottom>60;
}
function navState(){
  const y=scrollY, down=y>lastNavY+4, up=y<lastNavY-4, heroZone=inHeroZone();
  nav.classList.toggle('in-hero', heroZone);
  if(heroZone){
    // Fixed at the top for the whole Find → Make → Move pin — never hide here
    nav.classList.remove('hide','under');
    if(y<80) nav.classList.remove('solid');
    else nav.classList.add('solid');
  } else if(y<80){
    nav.classList.remove('hide','solid');
  } else {
    nav.classList.add('solid');
    if(down) nav.classList.add('hide');
    else if(up) nav.classList.remove('hide');
  }
  if(Math.abs(y-lastNavY)>4) lastNavY=y;
  // Logo strip owns the top edge only once we've left the hero
  if(!heroZone){
    const hr=holdEl.getBoundingClientRect();
    nav.classList.toggle('under', hr.top<=2 && hr.bottom>lgEl.offsetHeight+2);
  }
  const probe=50; nav.classList.toggle('light', !heroZone && creams.some(s=>{ const r=s.getBoundingClientRect(); return r.top<=probe && r.bottom>probe; }));
}
scrollJobs.push(navState);
navState();

/* ---- Welcome: the loop draws, the wordmark writes in, the curtain lifts, the hero arrives ---- */
(function(){
  const h=document.documentElement, ld=document.getElementById('loader');
  if(!h.classList.contains('intro')){ return; }
  let done=false;
  function finish(){
    if(done) return; done=true;
    try{ sessionStorage.setItem('vernIntro','1'); }catch(e){}
    ld.classList.add('out');
    setTimeout(()=>h.classList.remove('intro'), 250);
    setTimeout(()=>{ ld.classList.remove('out'); ld.style.display='none'; }, 1200);
  }
  ld.addEventListener('click', finish);
  setTimeout(finish, 1900);
})();
drawSvc();


/* ---- Our work: placeholder visuals built from the brand pattern in each card's colour ---- */
document.querySelectorAll('.cs').forEach((card,n)=>{
  const vis=card.querySelector('.cs-vis'); if(vis.querySelector('img,.vph')) return;
  vis.style.setProperty('--c','#2C2A28'); vis.style.setProperty('--on','#F2EEE4');
  const r=rng(70+n), sc=1.6; let h='';
  for(let py=-1;py<3;py++) for(let px=-1;px<5;px++) U.forEach((k,i)=>{ if(r()<.55) return;
    const x=(px*PW+k[0]*UU)*sc, y=(py*PH+k[2]*VV)*sc, w=(k[1]-k[0])*UU*sc-4, hh=VV*sc-4;
    h+=`<i class="pp" style="left:${r2(x)}px;top:${r2(y)}px;width:${r2(w)}px;height:${r2(hh)}px;opacity:${(.04+r()*.08).toFixed(2)};--mx:${((r()-.5)*18).toFixed(0)}px;--my:${((r()-.5)*18).toFixed(0)}px"></i>`; });
  vis.insertAdjacentHTML('afterbegin',h);
});
/* work cards: pointing at a card (or tabbing to it) opens it; a short lock stops a second switch while cards are still moving */
{ const cs=[...document.querySelectorAll('.cs')]; let csLock=0;
  const openCs=(c,force)=>{ if(c.classList.contains('open')) return; const now=performance.now(); if(!force && now<csLock) return;
    csLock=now+520; cs.forEach(o=>o.classList.toggle('open',o===c)); };
  if(cs[0]) cs[0].classList.add('open');
  cs.forEach(c=>{ c.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse') openCs(c); });
    c.addEventListener('pointermove',e=>{ if(e.pointerType==='mouse') openCs(c); });
    c.addEventListener('focus',()=>openCs(c,true)); }); }
/* ---- One idea through the whole page: the orange piece travels from section to section ---- */
const thread=document.getElementById('thread'), heroSec=document.getElementById('hero'), footEl=document.getElementById('contact');
thread.innerHTML=[6,7,8,9].map(i=>{ const k=U[i]; return `<i style="left:${r2(k[0]*UU-8*UU)}px;top:${r2(k[2]*VV-3*VV)}px;width:${r2((k[1]-k[0])*UU)}px;height:${r2(VV)}px"></i>`; }).join('');
const anchors=[...document.querySelectorAll('[data-anchor]')];
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function drawThread(){
  const H=innerHeight, mid=H*.5, hr=heroSec.getBoundingClientRect();
  const pts=[{x:innerWidth*.7,y:hr.bottom-H*.28}].concat(anchors.map(a=>{ const r=a.getBoundingClientRect();
    return a.classList.contains('tdot')?{x:r.left+r.width*.5,y:r.top+r.height*.5}:{x:r.left+7,y:r.top+r.height/2}; }));
  let x=pts[0].x, y=pts[0].y, f2=0, i0=0;
  if(mid>=pts[pts.length-1].y){ x=pts[pts.length-1].x; y=pts[pts.length-1].y; i0=pts.length-1; }
  else if(mid>pts[0].y){
    let i=0; while(i<pts.length-2 && pts[i+1].y<mid) i++; i0=i;
    const a=pts[i], b=pts[i+1], f=Math.min(1,Math.max(0,(mid-a.y)/Math.max(1,b.y-a.y)));
    f2=Math.min(1,Math.max(0,(f-.18)/.64)); const e=ease(f2);
    x=a.x+(b.x-a.x)*e; y=a.y+(b.y-a.y)*e;
  }
  const fly=Math.sin(Math.PI*f2), sc=.14, rot=0;
  let landed=f2<.5?i0:i0+1, w=1-fly; if(landed===0) w=0; // only shows while it sits on a section's label
  const op=.6*w*w*(3-2*w)*(hr.bottom<H*.9?1:0);
  thT={x,y,sc,rot,op}; if(!thC) thC={...thT};
  const fr=footEl.getBoundingClientRect(); thread.classList.toggle('ink', y>fr.top);
}
let thT=null, thC=null, thId=0;
function thTick(){
  thId=0;
  if(!thT||!thC) return;
  const k=reduce?1:.2;
  let live=false;
  for(const key of ['x','y','sc','rot']){ const d=thT[key]-thC[key]; thC[key]+=d*k; if(Math.abs(d)>0.4) live=true; }
  const od=thT.op-thC.op; thC.op+=od*(reduce?1:.14); if(Math.abs(od)>0.012) live=true;
  thread.style.opacity=thC.op.toFixed(3);
  thread.style.transform=`translate(${thC.x.toFixed(1)}px,${thC.y.toFixed(1)}px) rotate(${thC.rot.toFixed(1)}deg) scale(${thC.sc.toFixed(3)})`;
  if(live) thId=requestAnimationFrame(thTick);
}
function kickThread(){ if(!thId) thId=requestAnimationFrame(thTick); }
/* ---- Softer handoffs: the next section's colour rises out of the brand mosaic ---- */
const seams=[...document.querySelectorAll('.seam')].map((el,n)=>{ const r=rng(40+n), cols=[]; let x=0;
  while(x<100){ const w=[1.1,1.6,1.6,2.2][Math.floor(r()*4)], b=document.createElement('b');
    const ii=document.createElement('i'), t=el.dataset.to; ii.style.background=(t==='cream'?'var(--cream) var(--tex-cream)':'var(--orange) var(--tex-orange)'); ii.style.backgroundAttachment='fixed';
    b.style.cssText=`left:${x.toFixed(2)}%;width:${(w+.4).toFixed(2)}%`; b.appendChild(ii); el.appendChild(b); cols.push({b:ii,d:r(),h:.35+r()*.65}); x+=w; }
  return {el,cols}; });
function drawSeams(){
  for(const sm of seams){ const r=sm.el.getBoundingClientRect(); if(r.bottom<-50||r.top>innerHeight+50) continue;
    const p=reduce?1:Math.min(1,Math.max(0,(innerHeight-r.top)/(innerHeight*.75)));
    for(const c of sm.cols){ const t=Math.min(1,Math.max(0,p*1.7-c.d*.7)); const v=t>=1?1:t*c.h; if(v!==c.v){ c.b.style.transform=`translateY(${((1-v)*100).toFixed(1)}%)`; c.v=v; } } }
}
/* ---- Chapter rail ---- */
const rail=document.getElementById('rail'), railLinks=[...rail.querySelectorAll('a')];
const railSecs=railLinks.map(a=>a.dataset.s==='hero'?heroSec:document.getElementById(a.dataset.s));
function drawRail(){
  const mid=innerHeight*.5; let on=0;
  railSecs.forEach((sec,k)=>{ const r=sec.getBoundingClientRect(); if(r.top<=mid) on=k; });
  railLinks.forEach((a,k)=>a.classList.toggle('on',k===on));
  rail.classList.toggle('show', heroSec.getBoundingClientRect().bottom<innerHeight*.6);
  const id=railLinks[on].dataset.s; rail.classList.toggle('light', id==='faq'||id==='contact'); rail.classList.toggle('ink', id==='contact');
}
/* ---- Every section opens the same way ---- */
const rvIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); rvIO.unobserve(e.target); } }),{threshold:.2});
document.querySelectorAll('.rv').forEach(el=>rvIO.observe(el));
function drawOne(){ drawThread(); drawSeams(); drawRail(); kickThread(); }
scrollJobs.push(drawOne);
addEventListener('resize',drawOne); drawOne(); setTimeout(drawOne,800);

return ()=>{
  clearTimeout(refreshT);
  clearTimeout(holdT);
  clearTimeout(armT);
  cancelAnimationFrame(scrollRaf);
  cancelAnimationFrame(rollId);
  cancelAnimationFrame(stirId);
  cancelAnimationFrame(thId);
  cancelAnimationFrame(menuFrame);
  clearTimeout(idleT);
  glideStop();
  window.removeEventListener('wheel',onWheel,{passive:false});
  gsap.killTweensOf([lensEl, glassL]);
  rootEl.classList.remove('rm');
};
})();
}
