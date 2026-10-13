(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.from((r||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}
var redraws=[];function redraw(){redraws.forEach(function(f){f()});window.dispatchEvent(new Event('vizredraw'))}
// theme
var tt=$('.theme-toggle');if(tt)tt.addEventListener('click',function(){var d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}redraw()});
// mobile nav
var nt=$('.nav-toggle'),nav=$('#site-nav');if(nt)nt.addEventListener('click',function(){var o=nav.classList.toggle('open');nt.setAttribute('aria-expanded',o);nt.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav&&nav.classList.contains('open')){nav.classList.remove('open');nt.setAttribute('aria-expanded',false);nt.focus()}});
// layer tabs
var LV=['non-technical','somewhat-technical','engineers','scientists','mathematicians'];
var who=$('#iam');if(who){try{who.value=localStorage.getItem('level')||'0'}catch(e){}who.addEventListener('change',function(){try{localStorage.setItem('level',who.value)}catch(e){}var m=$('#iam-msg');if(m)m.textContent='Saved: topic pages will open at the '+who.options[who.selectedIndex].text+' level.'})}
var art=$('[data-layers]');
if(art){var h2s=$$('h2',art).filter(function(h){return /^(Non-technical|Somewhat technical|Engineers|Scientists|Mathematicians)$/.test(h.textContent.trim())});
 if(h2s.length){var bar=document.createElement('div');bar.className='tabs';bar.setAttribute('role','tablist');bar.setAttribute('aria-label','Audience level');
  var panels=h2s.map(function(h,i){var p=document.createElement('section');p.className='panel';p.id='layer-'+i;p.setAttribute('role','tabpanel');p.tabIndex=0;
   h.parentNode.insertBefore(p,h);var n=h;while(n&&!(n!==h&&h2s.indexOf(n)>=0)){var nx=n.nextSibling;p.appendChild(n);n=nx}
   var b=document.createElement('button');b.setAttribute('role','tab');b.id='tab-'+i;b.setAttribute('aria-controls',p.id);b.textContent=({'Non-technical':'☕ Non-technical','Somewhat technical':'🔍 Somewhat technical','Engineers':'⚙ Engineers','Scientists':'⚛ Scientists','Mathematicians':'∫ Mathematicians'})[h.textContent.trim()];
   p.setAttribute('aria-labelledby',b.id);bar.appendChild(b);return p});
  art.insertBefore(bar,panels[0]);var tabs=$$('[role=tab]',bar);
  function sel(i,focus){tabs.forEach(function(t,j){t.setAttribute('aria-selected',i===j);t.tabIndex=i===j?0:-1;panels[j].hidden=i!==j});if(focus)tabs[i].focus();try{localStorage.setItem('level',i)}catch(e){};history.replaceState(null,'','#'+LV[i]);redraw()}
  tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(i)});t.addEventListener('keydown',function(e){var k={ArrowRight:1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();sel((i+k+tabs.length)%tabs.length,true)}if(e.key==='Home')sel(0,true);if(e.key==='End')sel(tabs.length-1,true)})});
  var hi=LV.indexOf(location.hash.slice(1)),st=+(localStorage.getItem('level')||0);sel(hi>=0?hi:(st<tabs.length?st:0));}}
// timeline
var tbl=$('.page-timeline table');
if(tbl){var ol=document.createElement('ol');ol.className='tl';
 $$('tbody tr',tbl).forEach(function(r){var c=r.children,li=document.createElement('li');li.innerHTML='<span class="yr">'+c[0].innerHTML+'</span><div>'+c[1].innerHTML+'</div><span class="src">Source: '+c[2].innerHTML+'</span>';ol.appendChild(li)});
 tbl.parentNode.replaceChild(ol,tbl);
 var lis=$$('li',ol);if(reduce||!('IntersectionObserver'in window))lis.forEach(function(l){l.classList.add('in')});else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});lis.forEach(function(l){io.observe(l)})}}
// publications
if($('.page-pubs')){var items=[];
 $$('#main h2').forEach(function(h){var type=/Book/.test(h.textContent)?'Book':'Paper',ol=h.nextElementSibling;if(!ol||ol.tagName!=='OL')return;
  $$('li',ol).forEach(function(li){var m=li.textContent.match(/(19|20)\d\d/g),y=m?m[m.length-1]:'';var pre=/preprint|in preparation/i.test(li.textContent);items.push({html:li.innerHTML,text:li.textContent.toLowerCase(),y:y,type:type,pre:pre})});ol.remove();h.remove()});
 items.sort(function(a,b){return (a.y||'9999').localeCompare(b.y||'9999')});
 var decs=[];items.forEach(function(i){if(i.y){var d=i.y.slice(0,3)+'0s';if(decs.indexOf(d)<0)decs.push(d)}});
 var tools=document.createElement('div');tools.className='pub-tools';tools.setAttribute('role','search');
 tools.innerHTML='<label class="tl-hide" for="pq">Search publications</label><input id="pq" type="search" placeholder="Search titles, co-authors, journals… (e.g. Kra, theta)"><label class="tl-hide" for="pd">Decade</label><select id="pd"><option value="">All years</option>'+decs.map(function(d){return '<option>'+d+'</option>'}).join('')+'<option value="none">Undated / preprints</option></select><label class="tl-hide" for="pt">Type</label><select id="pt"><option value="">All types</option><option>Paper</option><option>Book</option></select><span class="pub-count" aria-live="polite"></span>';
 var list=document.createElement('ul');list.className='pubs-list';var main=$('#main');main.appendChild(tools);main.appendChild(list);
 function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
 function render(){var q=$('#pq').value.trim().toLowerCase(),d=$('#pd').value,t=$('#pt').value;var out=items.filter(function(i){return(!q||i.text.indexOf(q)>=0)&&(!t||i.type===t)&&(!d||(d==='none'?(!i.y||i.pre):(i.y&&i.y.slice(0,3)+'0s'===d)))});
  list.innerHTML=out.map(function(i){var h=i.html;if(q)h=h.replace(new RegExp('('+esc(q)+')(?![^<]*>)','gi'),'<mark>$1</mark>');return '<li><span class="y">'+(i.pre?'—':i.y)+'</span><div><span class="t">'+i.type+(i.pre?' · preprint':'')+'</span><br>'+h+'</div></li>'}).join('');
  $('.pub-count').textContent=out.length+' of '+items.length+' shown'}
 ['pq','pd','pt'].forEach(function(id){$('#'+id).addEventListener('input',render)});render()}
// torus
var cv=$('#torus');
if(cv){var cx=cv.getContext('2d'),a=0,run=!reduce,pb=$('#torus-pause');if(pb){pb.textContent=run?'Pause':'Play';pb.addEventListener('click',function(){run=!run;pb.textContent=run?'Pause':'Play';pb.setAttribute('aria-pressed',!run);if(run)loop()})}
 function draw(){var W=cv.width,R=110,r=48,ac=css('--accent'),a2=css('--accent2');cx.clearRect(0,0,W,W);cx.lineWidth=1.3;
  function P(u,v){var x=(R+r*Math.cos(v))*Math.cos(u),y=(R+r*Math.cos(v))*Math.sin(u),z=r*Math.sin(v);var y1=y*Math.cos(a)-z*Math.sin(a),z1=y*Math.sin(a)+z*Math.cos(a);var x2=x*Math.cos(a*.6)+z1*Math.sin(a*.6),z2=-x*Math.sin(a*.6)+z1*Math.cos(a*.6);var s=420/(420+z2);return [W/2+x2*s*1.15,W/2+y1*s*1.15,z2]}
  function curve(f,col,n){for(var i=0;i<n;i++){var p=f(i/n),q=f((i+1)/n);cx.strokeStyle=col;cx.globalAlpha=Math.max(.12,Math.min(1,.55-(p[2]+q[2])/400));cx.beginPath();cx.moveTo(p[0],p[1]);cx.lineTo(q[0],q[1]);cx.stroke()}}
  for(var i=0;i<24;i++){var u=i/24*2*Math.PI;curve(function(t){return P(u,t*2*Math.PI)},a2,40)}
  for(var j=0;j<12;j++){var v=j/12*2*Math.PI;curve(function(t){return P(t*2*Math.PI,v)},a2,80)}
  cx.lineWidth=3.5;curve(function(t){return P(0,t*2*Math.PI)},ac,60);curve(function(t){return P(t*2*Math.PI,Math.PI)},ac,120);cx.globalAlpha=1}
 function loop(){draw();a+=.006;if(run)requestAnimationFrame(loop)}redraws.push(draw);loop()}
})();
