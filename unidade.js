    document.querySelectorAll('.nav ul li').forEach(li => {
      li.addEventListener('click', () => {
        document.querySelectorAll('.nav ul li').forEach(x => x.classList.remove('active'));
        li.classList.add('active');
      });
    });

  
    function animateArcs(){
      document.querySelectorAll('.semicircle').forEach(el => {
        const target = Number(el.dataset.progress) || 0;
        const fill = el.querySelector('.arc-fill');
        const deg = Math.round((target / 100) * 180);
        let current = 0;
        const duration = 700; 
        const start = performance.now();
        function frame(now){
          const t = Math.min(1, (now - start) / duration);
          const eased = t<.5 ? 2*t*t : -1 + (4-2*t)*t; // easeInOutQuad-ish
          const d = Math.round(eased * deg);
          fill.style.transform = `rotate(${d}deg)`;
          if(now - start < duration) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        const label = el.querySelector('.progress-label');
        if(label) label.textContent = `${target}%`;
      });
    }

    window.addEventListener('load', () => {
      animateArcs();
    });

    document.querySelectorAll('.uc-actions .btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = btn.textContent.trim();
        const uc = btn.closest('.uc-card').querySelector('h3').textContent;
        alert(`${text} — ${uc}`);
      })
    });
