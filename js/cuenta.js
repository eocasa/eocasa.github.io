const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays} Días ${t.remainHours}:${t.remainMinutes}:${t.remainSeconds}`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
        window.location.href="https://docs.google.com/forms/d/10rRR8-SWyuYqhoDk_htHvNLdsQ20ofzW4tFwSYu2eDk/edit?usp=sharing"
      }
  
    }, 1000)
  };
  
  countdown('OCT 1 2025 7:00:00 GMT-0300', 'cuenta', 'Redirigiendo...');
  