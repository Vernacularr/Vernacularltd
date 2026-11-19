/* Brand pattern on a few cards (.pc, .val, .pillar) and the pointer effect on buttons.
   Runs after every page. */
export default function initPatterns() {
(function(){
/* the brand pattern: kept for a few cards only (backgrounds are plain) */
var st=document.documentElement.style, N=['dark','cream','orange','yellow','cyan','purple','blue','green'];
N.forEach(function(n){ var v=st.getPropertyValue('--tex-'+n); if(v&&v!=='none') st.setProperty('--pat-'+n,v); });
try{ var U=[[15,16,4,5],[12,15,5,6],[7,8,4,5],[4,7,5,6],[14,16,3,4],[12,14,4,5],[11,12,1,2],[8,11,2,3],[6,8,3,4],[4,6,4,5],[3,4,1,2],[0,3,2,3],[10,12,0,1],[8,10,1,2],[2,4,0,1],[0,2,1,2]];
  var W=145,H=209,u=W/16,v=H/6,c=document.createElement('canvas'); c.width=W; c.height=H; var x=c.getContext('2d');
  U.forEach(function(k,i){ x.fillStyle=i%2?'rgba(242,238,228,.007)':'rgba(242,238,228,.016)'; var x0=Math.round(k[0]*u),x1=Math.round(k[1]*u),y0=Math.round(k[2]*v),y1=Math.round(k[3]*v); x.fillRect(x0,y0,x1-x0,y1-y0); });
  st.setProperty('--pat-card','url('+c.toDataURL()+')'); }catch(e){}
function mapPat(){ document.querySelectorAll('.pc,.val,.pillar').forEach(function(el){ var t=el.style.getPropertyValue('--tex'), m=t&&t.match(/--tex-([a-z]+)/); if(m) el.style.setProperty('--pat','var(--pat-'+m[1]+')'); }); }
window.__mapPat=mapPat; mapPat(); addEventListener('load',mapPat); setTimeout(mapPat,1500);
/* calls to action lean towards the pointer and light up where it is */
if(matchMedia('(hover: hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  var SEL='.btn,.go,.more,.ct-tabs button,.qb.more,.cp-link', cur=null;
  document.addEventListener('pointermove',function(e){
    var el=e.target.closest&&e.target.closest(SEL);
    if(cur&&cur!==el){ cur.style.setProperty('--mx','0px'); cur.style.setProperty('--my','0px'); cur=null; }
    if(!el) return; cur=el; var r=el.getBoundingClientRect(), dx=e.clientX-r.left, dy=e.clientY-r.top;
    el.style.setProperty('--px',dx+'px'); el.style.setProperty('--py',dy+'px');
    el.style.setProperty('--mx',((dx/r.width-.5)*6).toFixed(1)+'px'); el.style.setProperty('--my',((dy/r.height-.5)*5).toFixed(1)+'px');
  },{passive:true});
  document.addEventListener('pointerleave',function(){ if(cur){ cur.style.setProperty('--mx','0px'); cur.style.setProperty('--my','0px'); cur=null; } });
}
})();
}
