function calculateTimeLeft() {
    const targetDate = new Date('2024-01-13T21:30:00');
    const now = new Date();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } else {
      return {
        days: 23,
        hours: 552,
        minutes: 33.120,
        seconds: 1.987200
      };
    }
  }

  function updateCountdown() {
    const timeLeft = calculateTimeLeft();
    const countdownElement = document.getElementById('countdown');

    countdownElement.innerHTML = `
   
    <div class="column-container">
      <div class="column-item p-1">${timeLeft.days} Días</div>
 
      <div class="column-item p-1">${timeLeft.hours} Horas</div>
    
      <div class="column-item p-1">${timeLeft.minutes} Minutos</div>

      <div class="column-item p-1">${timeLeft.seconds} Segundos</div>
     
      </div>

    `;
    
  }


  setInterval(updateCountdown, 1000);


  updateCountdown();