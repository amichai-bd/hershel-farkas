/* Interactive math visuals. Each mounts on <div data-viz="name">. Vanilla JS, no build step. */
(function(){
var css=function(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function h(tag,attrs,html){var e=document.createElement(tag);for(var k in attrs||{})e.setAttribute(k,attrs[k]);if(html!=null)e.innerHTML=html;return e}
function slider(root,label,min,max,step,val,fmt){var id='s'+Math.random().toString(36).slice(2);var w=h('div',{class:'ctl'});var l=h('label',{for:id},label+' <output></output>');var s=h('input',{type:'range',id:id,min:min,max:max,step:step,value:val});w.appendChild(l);w.appendChild(s);root.appendChild(w);var o=l.querySelector('output');var up=function(){o.textContent=fmt?fmt(+s.value):s.value};s.addEventListener('input',up);up();return s}
function btn(root,label,fn){var b=h('button',{type:'button',class:'vbtn'},label);b.addEventListener('click',fn);root.appendChild(b);return b}
function canvas(root,w,hh,aria){var c=h('canvas',{width:w,height:hh,role:'img','aria-label':aria});root.appendChild(c);return c}
function visible(el,fn){if(!('IntersectionObserver'in window)){fn(true);return}new IntersectionObserver(function(es){es.forEach(function(e){fn(e.isIntersecting)})}).observe(el)}
var V={};
function rot(p,ax,ay){var x=p[0],y=p[1],z=p[2];var y1=y*Math.cos(ax)-z*Math.sin(ax),z1=y*Math.sin(ax)+z*Math.cos(ax);var x2=x*Math.cos(ay)+z1*Math.sin(ay),z2=-x*Math.sin(ay)+z1*Math.cos(ay);return [x2,y1,z2]}
function dragRotate(c,st){var d=null;c.style.touchAction='none';c.addEventListener('pointerdown',function(e){d=[e.clientX,e.clientY];c.setPointerCapture(e.pointerId)});c.addEventListener('pointermove',function(e){if(!d)return;st.ay+=(e.clientX-d[0])*.01;st.ax+=(e.clientY-d[1])*.01;d=[e.clientX,e.clientY];st.draw()});c.addEventListener('pointerup',function(){d=null});c.tabIndex=0;c.addEventListener('keydown',function(e){var k={ArrowLeft:[0,-.1],ArrowRight:[0,.1],ArrowUp:[-.1,0],ArrowDown:[.1,0]}[e.key];if(k){e.preventDefault();st.ax+=k[0];st.ay+=k[1];st.draw()}})}
function wire(g,W,H,P,st,cycles){var S=W/2;function pr(p){var q=rot(p,st.ax,st.ay),s=3.2/(3.2+q[2]);return [W/2+q[0]*s*S*.42,H/2+q[1]*s*S*.42,q[2]]}
 g.clearRect(0,0,W,H);
 function curve(f,col,n,lw){g.lineWidth=lw;g.strokeStyle=col;for(var i=0;i<n;i++){var a=pr(f(i/n)),b=pr(f((i+1)/n));g.globalAlpha=Math.max(.15,Math.min(1,.65-(a[2]+b[2])*.35));g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}g.globalAlpha=1}
 var mesh=css('--muted');for(var i=0;i<28;i++){var u=i/28;curve(function(t){return P(u,t)},mesh,40,1)}for(var j=0;j<14;j++){var v=j/14;curve(function(t){return P(t,v)},mesh,90,1)}
 (cycles||[]).forEach(function(c){curve(c.f,c.col,140,3.5)})}
// 1. rotatable torus with a and b cycles
V.torus3d=function(root){var c=canvas(root,520,380,'Rotatable wireframe torus. The a-cycle (around the tube) and b-cycle (around the hole) are highlighted. Drag or use arrow keys to rotate.');var g=c.getContext('2d');
 var R=1,r=.42;function P(u,v){u*=2*Math.PI;v*=2*Math.PI;return [(R+r*Math.cos(v))*Math.cos(u),(R+r*Math.cos(v))*Math.sin(u),r*Math.sin(v)]}
 var st={ax:1.0,ay:.3,draw:function(){wire(g,c.width,c.height,P,st,[{f:function(t){return P(0,t)},col:css('--accent')},{f:function(t){return P(t,.5)},col:css('--accent2')}])}};
 dragRotate(c,st);root.appendChild(h('p',{class:'vcap'},'<span style="color:var(--accent)">■</span> a-cycle (around the tube) · <span style="color:var(--accent2)">■</span> b-cycle (around the hole). Drag to rotate.'));st.draw();return st.draw};
// 2. genus-g surface (stylized) with a and b cycles
V.genus=function(root){var NS='http://www.w3.org/2000/svg';var svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 640 240');svg.setAttribute('role','img');root.appendChild(svg);
 var s=slider(root,'Genus g =',0,6,1,2);var cap=h('p',{class:'vcap',"aria-live":"polite"});root.appendChild(cap);
 function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);svg.appendChild(e);return e}
 function draw(){var gg=+s.value;while(svg.firstChild)svg.removeChild(svg.firstChild);var ac=css('--accent'),a2=css('--accent2'),ink=css('--ink'),sf=css('--surface');
  svg.setAttribute('aria-label','Sketch of a closed surface of genus '+gg+' with '+gg+' holes'+(gg?', each with an a-cycle and a b-cycle':''));
  var w=gg?Math.min(140,560/gg):0,L=320-(gg?gg*w/2:110)-30,Rr=320+(gg?gg*w/2:110)+30;
  if(gg===0){el('circle',{cx:320,cy:120,r:95,fill:sf,stroke:ink,'stroke-width':2.5});el('ellipse',{cx:320,cy:120,rx:95,ry:22,fill:'none',stroke:ink,'stroke-dasharray':'5 5','stroke-opacity':.5})}
  else{el('rect',{x:L,y:30,width:Rr-L,height:180,rx:90,fill:sf,stroke:ink,'stroke-width':2.5});
   for(var i=0;i<gg;i++){var cx=320-gg*w/2+w*(i+.5),hw=Math.min(36,w*.3);
    el('path',{d:'M'+(cx-hw)+' 118 Q'+cx+' 140 '+(cx+hw)+' 118',fill:'none',stroke:ink,'stroke-width':2.5});
    el('path',{d:'M'+(cx-hw*.75)+' 126 Q'+cx+' 106 '+(cx+hw*.75)+' 126',fill:'none',stroke:ink,'stroke-width':2.5});
    el('ellipse',{cx:cx,cy:122,rx:hw+16,ry:30,fill:'none',stroke:ac,'stroke-width':3});
    el('path',{d:'M'+cx+' 130 C '+(cx+16)+' 160, '+(cx+16)+' 200, '+cx+' 210',fill:'none',stroke:a2,'stroke-width':3});
    el('path',{d:'M'+cx+' 130 C '+(cx-16)+' 160, '+(cx-16)+' 200, '+cx+' 210',fill:'none',stroke:a2,'stroke-width':3,'stroke-dasharray':'5 5'});
    var t=el('text',{x:cx-hw-22,y:96,fill:ac,'font-size':15,'font-family':'Fraunces,serif'});t.textContent='a'+(i+1);var t2=el('text',{x:cx+12,y:190,fill:a2,'font-size':15,'font-family':'Fraunces,serif'});t2.textContent='b'+(i+1)}}
  cap.innerHTML='Genus '+gg+': '+(gg===0?'a sphere; no holes, no cycles.':gg+' independent holomorphic 1-forms; period matrix is '+gg+'×'+gg+' with '+(gg*(gg+1)/2)+' entries'+(gg>=2?'; surfaces of this genus have '+(3*gg-3)+' complex moduli.':'.'))}
 s.addEventListener('input',draw);draw();return draw};
// 3. lattice + folding into a torus
V.lattice=function(root){var NS='http://www.w3.org/2000/svg';var svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 640 280');svg.setAttribute('role','img');svg.setAttribute('aria-label','Lattice generated by 1 and tau with the period parallelogram shaded. Drag tau or focus it and use arrow keys.');root.appendChild(svg);
 var info=h('p',{class:'vcap','aria-live':'polite'});root.appendChild(info);
 var c=canvas(root,520,300,'The period rectangle being folded into a torus as the slider moves: first into a cylinder, then into a torus.');var g=c.getContext('2d');var fs=slider(root,'Fold the parallelogram:',0,1,.01,0,function(v){return v<.02?'flat':v<.5?'rolling into a cylinder':v<.98?'bending into a torus':'torus'});
 var tau={x:.35,y:.8},S=85,O={x:220,y:210},drag=false;
 function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);svg.appendChild(e);return e}
 function draw(){while(svg.firstChild)svg.removeChild(svg.firstChild);var ac=css('--accent'),a2=css('--accent2'),mu=css('--muted');
  function pt(m,n){return {x:O.x+S*(m+n*tau.x),y:O.y-S*n*tau.y}}var p0=pt(0,0),p1=pt(1,0),p2=pt(1,1),p3=pt(0,1);
  el('polygon',{points:[p0,p1,p2,p3].map(function(p){return p.x+','+p.y}).join(' '),fill:ac,'fill-opacity':.15});
  el('line',{x1:p0.x,y1:p0.y,x2:p1.x,y2:p1.y,stroke:ac,'stroke-width':3});el('line',{x1:p3.x,y1:p3.y,x2:p2.x,y2:p2.y,stroke:ac,'stroke-width':3,'stroke-dasharray':'6 4'});
  el('line',{x1:p0.x,y1:p0.y,x2:p3.x,y2:p3.y,stroke:a2,'stroke-width':3});el('line',{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,stroke:a2,'stroke-width':3,'stroke-dasharray':'6 4'});
  for(var m=-4;m<=7;m++)for(var n=-1;n<=4;n++){var p=pt(m,n);if(p.x>-5&&p.x<645&&p.y>-5&&p.y<285)el('circle',{cx:p.x,cy:p.y,r:3.2,fill:mu})}
  var t=el('text',{x:p1.x+6,y:p1.y+18,fill:ac,'font-size':17,'font-family':'Fraunces,serif'});t.textContent='1';
  var hd=el('circle',{cx:p3.x,cy:p3.y,r:11,fill:a2,stroke:css('--surface'),'stroke-width':3,tabindex:0,role:'slider','aria-label':'tau','aria-valuetext':'tau = '+tau.x.toFixed(2)+' + '+tau.y.toFixed(2)+' i',style:'cursor:grab'});
  var t2=el('text',{x:p3.x+14,y:p3.y-10,fill:a2,'font-size':17,'font-family':'Fraunces,serif'});t2.textContent='τ';
  hd.addEventListener('pointerdown',function(e){e.preventDefault();drag=true});
  hd.addEventListener('keydown',function(e){var d={ArrowLeft:[-.05,0],ArrowRight:[.05,0],ArrowUp:[0,.05],ArrowDown:[0,-.05]}[e.key];if(d){e.preventDefault();set(tau.x+d[0],tau.y+d[1]);svg.querySelector('[role=slider]').focus()}});
  info.innerHTML='τ = '+tau.x.toFixed(2)+' + '+tau.y.toFixed(2)+'i. Glue the solid <span style="color:var(--accent)">orange</span> edge to the dashed one, and the solid <span style="color:var(--accent2)">teal</span> edge to its dashed copy, to get a torus. Every lattice point becomes the same point on it.';fold()}
 function set(x,y){tau.x=Math.max(-1,Math.min(1.5,x));tau.y=Math.max(.3,Math.min(2.2,y));draw()}
 svg.style.touchAction='none';svg.addEventListener('pointermove',function(ev){if(!drag)return;var r=svg.getBoundingClientRect(),k=640/r.width;set(((ev.clientX-r.left)*k-O.x)/S,(O.y-(ev.clientY-r.top)*k)/S)});window.addEventListener('pointerup',function(){drag=false});
 var st={ax:.9,ay:.35,draw:fold};
 function fold(){var s=+fs.value,R=1,r=.42,A=2*Math.PI*R,B=2*Math.PI*r*Math.min(2,tau.y/.8)/2;
  function P(u,v){var flat=[(u-.5)*2.4,(v-.5)*2.4*tau.y/.8*.5+0,0];
   var a=Math.min(1,s*2),b=Math.max(0,s*2-1);
   var cyl=[(u-.5)*2.4,r*Math.cos(2*Math.PI*v)*-1,r*Math.sin(2*Math.PI*v)];var tor=[(R+r*Math.cos(2*Math.PI*v+Math.PI))*Math.cos(2*Math.PI*u-Math.PI/2)*1,(R+r*Math.cos(2*Math.PI*v+Math.PI))*Math.sin(2*Math.PI*u-Math.PI/2)+R,r*Math.sin(2*Math.PI*v)];
   var p1=[0,1,2].map(function(i){return flat[i]+(cyl[i]-flat[i])*a});return [0,1,2].map(function(i){return p1[i]+(tor[i]-p1[i])*b})}
  wire(g,c.width,c.height,P,st,[{f:function(t){return P(t,0)},col:css('--accent')},{f:function(t){return P(0,t)},col:css('--accent2')}])}
 fs.addEventListener('input',fold);dragRotate(c,st);root.appendChild(h('p',{class:'vcap'},'Folding is shown for the rectangle shape (topologically identical for any τ). Drag the 3D view to rotate.'));draw();return draw};
// 4. theta domain coloring
V.theta=function(root){var c=canvas(root,360,240,'Domain-coloring image of the Jacobi theta function theta_3(z, q): hue shows the argument, brightness the modulus; dark points are zeros.');var g=c.getContext('2d');
 var m=slider(root,'|q| =',.05,.9,.01,.35),ar=slider(root,'arg q (×π) =',-1,1,.02,0),info=h('p',{class:'vcap'});root.appendChild(info);
 var plot=h('canvas',{width:520,height:180,role:'img','aria-label':'Real part (orange) and imaginary part (teal) of theta_3(x, q) for real x from -pi to pi'});root.appendChild(plot);var pg=plot.getContext('2d');
 function th(zr,zi,qr,qi){// theta3(z,q)=1+2 sum q^{n^2} cos(2nz)
  var sr=1,si=0,lq=Math.log(Math.hypot(qr,qi)),aq=Math.atan2(qi,qr);
  for(var n=1;n<40;n++){var nn=n*n,mod=Math.exp(nn*lq);if(mod<1e-14)break;var ang=nn*aq;var pr=mod*Math.cos(ang),pi=mod*Math.sin(ang);
   var a=2*n*zr,b=2*n*zi,cr=Math.cos(a)*Math.cosh(b),ci=-Math.sin(a)*Math.sinh(b);sr+=2*(pr*cr-pi*ci);si+=2*(pr*ci+pi*cr)}return [sr,si]}
 function hsl(hh,l){var a=Math.min(l,1-l),f=function(n){var k=(n+hh*12)%12;return l-a*Math.max(-1,Math.min(k-3,9-k,1))};return [f(0)*255,f(8)*255,f(4)*255]}
 function draw(){var M=+m.value,A=+ar.value*Math.PI,qr=M*Math.cos(A),qi=M*Math.sin(A),W=c.width,H=c.height,img=g.createImageData(W,H);
  for(var y=0;y<H;y++)for(var x=0;x<W;x++){var zr=(x/W-.5)*2*Math.PI,zi=(.5-y/H)*2.4;var v=th(zr,zi,qr,qi),mod=Math.hypot(v[0],v[1]),hue=(Math.atan2(v[1],v[0])/(2*Math.PI)+1)%1;var l=.5*(1-1/(1+Math.pow(mod,.35)))+.08;var rgb=hsl(hue,Math.min(.85,l));var i=4*(y*W+x);img.data[i]=rgb[0];img.data[i+1]=rgb[1];img.data[i+2]=rgb[2];img.data[i+3]=255}
  g.putImageData(img,0,0);
  info.innerHTML='Re z from −π to π (horizontal), Im z from −1.2 to 1.2 (vertical). θ₃(z+π) = θ₃(z): the picture repeats horizontally. Zeros (dark dots) sit at z = π/2 + πτ/2, where q = e^{iπτ}.';
  var PW=plot.width,PH=plot.height,re=[],im=[],mx=0;for(var i=0;i<=PW;i++){var v=th((i/PW-.5)*2*Math.PI,0,qr,qi);re.push(v[0]);im.push(v[1]);mx=Math.max(mx,Math.abs(v[0]),Math.abs(v[1]))}
  pg.clearRect(0,0,PW,PH);pg.strokeStyle=css('--line');pg.beginPath();pg.moveTo(0,PH/2);pg.lineTo(PW,PH/2);pg.stroke();
  [[re,css('--accent')],[im,css('--accent2')]].forEach(function(a){pg.strokeStyle=a[1];pg.lineWidth=2.5;pg.beginPath();a[0].forEach(function(y,i){var Y=PH/2-y/mx*(PH/2-10);i?pg.lineTo(i,Y):pg.moveTo(i,Y)});pg.stroke()})}
 var t;function sched(){clearTimeout(t);t=setTimeout(draw,30)}m.addEventListener('input',sched);ar.addEventListener('input',sched);root.appendChild(h('p',{class:'vcap'},'Graph: <span style="color:var(--accent)">Re</span> and <span style="color:var(--accent2)">Im</span> of θ₃(x, q) for real x ∈ [−π, π].'));draw();return draw};
// 5. modular group fundamental domain with S and T
V.modular=function(root){var NS='http://www.w3.org/2000/svg',svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 640 360');svg.setAttribute('role','img');svg.setAttribute('aria-label','Upper half-plane with the standard fundamental domain of SL2(Z) shaded. Click to place a point tau, then apply S or T, or reduce it into the domain.');root.appendChild(svg);
 var bar=h('div',{class:'vbar'});root.appendChild(bar);var log=h('p',{class:'vcap','aria-live':'polite'});root.appendChild(log);
 var z={x:1.3,y:.35},trail=[],X0=320,Y0=330,K=150;function sx(x){return X0+x*K}function sy(y){return Y0-y*K}
 function el(n,a){var e=document.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);svg.appendChild(e);return e}
 function draw(){while(svg.firstChild)svg.removeChild(svg.firstChild);var ac=css('--accent'),a2=css('--accent2'),mu=css('--muted'),ink=css('--ink');
  el('rect',{x:0,y:0,width:640,height:360,fill:'transparent'});
  for(var k=-2;k<=2;k++){var d='';el('path',{d:'M'+sx(k-1)+' '+sy(0)+' A '+K+' '+K+' 0 0 1 '+sx(k+1)+' '+sy(0),fill:'none',stroke:mu,'stroke-opacity':.35})}
  var top=sy(2.2),yL=sy(Math.sqrt(3)/2);el('path',{d:'M'+sx(-.5)+' '+top+' L'+sx(-.5)+' '+yL+' A '+K+' '+K+' 0 0 1 '+sx(.5)+' '+yL+' L'+sx(.5)+' '+top+' Z',fill:ac,'fill-opacity':.18,stroke:ac,'stroke-width':2});
  el('line',{x1:0,y1:Y0,x2:640,y2:Y0,stroke:ink,'stroke-width':1.5});[-2,-1,0,1,2].forEach(function(k){var t=el('text',{x:sx(k)-4,y:Y0+18,fill:mu,'font-size':13});t.textContent=k});
  var tF=el('text',{x:sx(-.42),y:sy(1.5),fill:ac,'font-size':16,'font-family':'Fraunces,serif'});tF.textContent='𝓕';
  for(var i=1;i<trail.length;i++)el('line',{x1:sx(trail[i-1].x),y1:sy(trail[i-1].y),x2:sx(trail[i].x),y2:sy(trail[i].y),stroke:a2,'stroke-dasharray':'4 3'});
  el('circle',{cx:sx(z.x),cy:sy(Math.min(z.y,2.15)),r:7,fill:a2});
  log.innerHTML='τ = '+z.x.toFixed(3)+' + '+z.y.toFixed(3)+'i'+(inF()?' — inside the fundamental domain 𝓕.':'')}
 function inF(){return Math.abs(z.x)<=.5+1e-9&&z.x*z.x+z.y*z.y>=1-1e-9}
 function S(){var d=z.x*z.x+z.y*z.y;z={x:-z.x/d,y:z.y/d};trail.push(z);draw()}function T(s){z={x:z.x+s,y:z.y};trail.push(z);draw()}
 svg.addEventListener('click',function(e){var r=svg.getBoundingClientRect(),k=640/r.width,x=((e.clientX-r.left)*k-X0)/K,y=(Y0-(e.clientY-r.top)*k)/K;if(y>.02){z={x:x,y:y};trail=[z];draw()}});
 btn(bar,'S: τ ↦ −1/τ',S);btn(bar,'T: τ ↦ τ+1',function(){T(1)});btn(bar,'T⁻¹: τ ↦ τ−1',function(){T(-1)});
 btn(bar,'Reduce into 𝓕 (step by step)',function(){var steps=[],n=0;(function step(){if(inF()||n++>40){log.innerHTML+=' Moves used: '+(steps.join(' ')||'none');return}if(Math.abs(z.x)>.5){var s=-Math.round(z.x);T(s);steps.push('T^'+s)}else{S();steps.push('S')}setTimeout(step,reduce?0:450)})()});
 btn(bar,'Reset',function(){z={x:1.3,y:.35};trail=[z];draw()});trail=[z];draw();return draw};
// 6. Farkas-Kra explorer
V.farkaskra=function(root){var s=slider(root,'Check all n up to',5,200,1,30),out=h('div',{class:'fk','aria-live':'polite'});root.appendChild(out);var lst=slider(root,'List the partitions for n =',1,12,1,9);var pl=h('div',{class:'fk-list'});root.appendChild(pl);
 function gen(N){var E=[1],O=[1];for(var i=1;i<=N;i++){E.push(0);O.push(0)}function mul(c,p){for(var k=N;k>=p;k--)c[k]+=c[k-p]}
  for(var k=2;k<=N;k+=2)mul(E,k);for(k=14;k<=N;k+=14)mul(E,k);for(k=1;k<=N;k+=2)mul(O,k);for(k=7;k<=N;k+=14)mul(O,k);return [E,O]}
 function parts(n,odd){var c=[];for(var k=odd?1:2;k<=n;k+=2){c.push(k+'');if(k%7===0)c.push(k+'′')}var res=[];(function rec(i,rem,acc){if(rem===0){res.push(acc.slice());return}for(var j=i;j<c.length;j++){var v=parseInt(c[j]);if(v<=rem){acc.push(c[j]);rec(j+1,rem-v,acc);acc.pop()}}})(0,n,[]);return res.map(function(p){return '('+p.sort(function(a,b){return parseInt(b)-parseInt(a)}).join(', ')+')'})}
 function run(){var N=+s.value,g=gen(2*N+1),E=g[0],O=g[1],rows='',ok=true;for(var n=0;n<=N;n++){var e=E[2*n],o=O[2*n+1];if(e!==o)ok=false;if(n<=15||n===N)rows+='<tr><td>'+n+'</td><td>'+e+'</td><td>'+o+'</td><td>'+(e===o?'✓':'✗')+'</td></tr>';else if(n===16)rows+='<tr><td colspan=4>…</td></tr>'}
  out.innerHTML='<p><strong>'+(ok?'E(n) = O(n) for every n ≤ '+N+' ✓':'mismatch found')+'</strong></p><table><thead><tr><th>n</th><th>E(n): 2n into distinct even parts</th><th>O(n): 2n+1 into distinct odd parts</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>';
  var n=+lst.value;var ep=parts(2*n,false),op=parts(2*n+1,true);pl.innerHTML='<p>Multiples of 7 come in two copies, written 7k and 7k′.</p><div class="fk-cols"><div><strong>'+ep.length+' partitions of '+(2*n)+'</strong><br>'+ep.join('<br>')+'</div><div><strong>'+op.length+' partitions of '+(2*n+1)+'</strong><br>'+op.join('<br>')+'</div></div>'}
 s.addEventListener('input',run);lst.addEventListener('input',run);run();return null};
// 7. KdV two-soliton
V.kdv=function(root){var c=canvas(root,640,240,'Animation of the exact two-soliton solution of the KdV equation: a tall fast wave overtakes a short slow one and both emerge unchanged, the tall one shifted forward.');var g=c.getContext('2d');var bar=h('div',{class:'vbar'});root.appendChild(bar);
 var t=-.6,run=!reduce;var pb=btn(bar,run?'Pause':'Play',function(){run=!run;pb.textContent=run?'Pause':'Play';if(run)loop()});var ts=slider(root,'time t =',-.6,.6,.005,-.6,function(v){return v.toFixed(3)});ts.addEventListener('input',function(){t=+ts.value;draw()});
 function u(x,t){var a=Math.cosh(x-28*t),b=Math.cosh(3*x-36*t);var d=3*a+b;return 12*(3+4*Math.cosh(2*x-8*t)+Math.cosh(4*x-64*t))/(d*d)}
 function draw(){var W=c.width,H=c.height;g.clearRect(0,0,W,H);g.strokeStyle=css('--line');g.beginPath();g.moveTo(0,H-20);g.lineTo(W,H-20);g.stroke();g.fillStyle=css('--accent');g.globalAlpha=.18;g.beginPath();g.moveTo(0,H-20);
  for(var i=0;i<=W;i++){var x=(i/W-.5)*24;g.lineTo(i,H-20-u(x,t)/8.5*(H-40))}g.lineTo(W,H-20);g.fill();g.globalAlpha=1;g.strokeStyle=css('--accent');g.lineWidth=2.5;g.beginPath();
  for(i=0;i<=W;i++){x=(i/W-.5)*24;var Y=H-20-u(x,t)/8.5*(H-40);i?g.lineTo(i,Y):g.moveTo(i,Y)}g.stroke();g.fillStyle=css('--muted');g.font='13px Inter,sans-serif';g.fillText('t = '+t.toFixed(3),10,18)}
 function loop(){draw();t+=.0025;if(t>.6)t=-.6;ts.value=t;if(run)requestAnimationFrame(loop)}draw();if(run)loop();
 root.appendChild(h('p',{class:'vcap'},'Exact solution of $u_t+6uu_x+u_{xxx}=0$: $u=12\\,\\dfrac{3+4\\cosh(2x-8t)+\\cosh(4x-64t)}{[3\\cosh(x-28t)+\\cosh(3x-36t)]^2}$. Solitons are the degenerate (pinched-surface) limit of the theta-function solutions of Its–Matveev (1975).'));return draw};
// mount
var redraws=[];document.querySelectorAll('[data-viz]').forEach(function(el){var f=V[el.dataset.viz];if(f){var r=f(el);if(r)redraws.push(r)}});
window.addEventListener('vizredraw',function(){redraws.forEach(function(f){f()})});
})();
