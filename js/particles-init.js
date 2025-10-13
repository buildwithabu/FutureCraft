
if(window.tsParticles){
  tsParticles.load("particles-canvas", {
    fpsLimit: 60,
    particles: { number: { value: 100 }, color: { value: ["#00f0ff","#b347ff","#66ffda"] }, shape: { type: "circle" }, opacity: { value: 0.85 }, size: { value: { min: 1, max: 4 } }, move: { enable: true, speed: 0.9 } },
    interactivity: { events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } }, modes: { repulse: { distance: 80 }, push: { quantity: 4 } } },
    detectRetina: true
  });
} else { console.log('tsParticles not loaded'); }
