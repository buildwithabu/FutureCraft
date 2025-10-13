
// Theme toggle with localStorage persistence
function setTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem('fc-theme', t); var labels = document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3'); labels.forEach(l=>{ l.textContent = t==='light' ? 'Dark' : 'Light'; }); }
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('fc-theme') || 'dark';
  setTheme(saved);
  document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3').forEach(btn=>{
    btn.addEventListener('click', ()=> setTheme(document.documentElement.getAttribute('data-theme')==='light' ? 'dark' : 'light'));
  });
  // hamburger nav
  const hb = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if(hb && nav){ hb.addEventListener('click', ()=> nav.classList.toggle('open')); }
  // vanilla-tilt init
  if(window.VanillaTilt) VanillaTilt.init(document.querySelectorAll('[data-tilt]'),{max:14,speed:450,glare:true,'max-glare':0.18});
  // gallery lightbox
  const items = document.querySelectorAll('.gallery-item');
  const lb = document.getElementById('lightbox');
  const lbContent = document.getElementById('lb-content');
  const lbMeta = document.getElementById('lb-meta');
  const lbClose = document.getElementById('lb-close');
  if(items.length){
    items.forEach(it=> it.addEventListener('click', ()=>{
      const img = it.querySelector('img').cloneNode();
      lbContent.innerHTML=''; lbContent.appendChild(img);
      lbMeta.textContent = it.dataset.title + ' • ' + it.dataset.tool + '\n' + it.dataset.prompt;
      lb.setAttribute('aria-hidden','false');
    }));
    if(lbClose) lbClose.addEventListener('click', ()=> lb.setAttribute('aria-hidden','true'));
  }
  // prompt + palette
  const prompts = ['A surreal portrait painted by a neural brush', 'Fractal garden blooming from code', 'Cyberpunk skyline with bioluminescent trees', 'Hand sketch enhanced by algorithmic colorization', 'Holographic mosque in neon mist'];
  const promptBtn = document.getElementById('prompt-btn');
  if(promptBtn) promptBtn.addEventListener('click', ()=> { const p = prompts[Math.floor(Math.random()*prompts.length)]; document.getElementById('prompt-output').textContent = p; navigator.clipboard?.writeText(p).catch(()=>{}); document.getElementById('prompt-output').classList.add('flash'); setTimeout(()=>document.getElementById('prompt-output').classList.remove('flash'),900); });
  const paletteBtn = document.getElementById('palette-btn');
  if(paletteBtn) paletteBtn.addEventListener('click', ()=> {
    const base = ['#00f0ff','#b347ff','#66ffda','#ffd166','#ff7eb6','#8ef1ff'];
    const pick = []; for(let i=0;i<4;i++) pick.push(base[Math.floor(Math.random()*base.length)]);
    document.getElementById('palette-output').innerHTML = pick.map(c=>'<div class="sw" style="background:'+c+'"></div>').join('');
  });
  // contact form stub
  const form = document.getElementById('contact-form');
  if(form) form.addEventListener('submit', e=> { e.preventDefault(); alert('Thanks — message saved (demo)'); form.reset(); });
});
