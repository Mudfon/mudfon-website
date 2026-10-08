const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}}));
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.pillar-card,.program,.event,.news-card').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ease ${i*45}ms, transform .55s ease ${i*45}ms, box-shadow .25s ease, border-color .25s ease`;observer.observe(el)});
