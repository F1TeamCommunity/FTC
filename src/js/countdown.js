// Fonction pour démarrer ou reprendre le compte à rebours
function startOrResumeCountdown(endDate, displayElement, imageContainer) {
    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
        displayElement.style.display = 'none';
        imageContainer.style.display = 'block';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        displayElement.textContent = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
      }
    }, 1000);
  }

  // Date prédéfinie pour le compte à rebours (remplacez par votre date)
  const targetDate = new Date('2023-12-15T15:29:59').getTime();

  // Démarrer le compte à rebours
  const countdownElement = document.getElementById('countdown');
  const imageContainer = document.getElementById('imageContainer');
  startOrResumeCountdown(targetDate, countdownElement, imageContainer);