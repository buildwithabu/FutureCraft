
if(window.gsap && window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.glass-card, .feature, .gallery-item, .member').forEach((el,i)=>{
    gsap.from(el, {opacity:0, y:30, duration:0.9, delay:i*0.05, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 85%'}});
  });
  gsap.to('.hero-title', {textShadow:'0 0 30px rgba(0,240,255,0.14)', duration:1.6, repeat:-1, yoyo:true});
} else { console.log('GSAP not loaded'); }
