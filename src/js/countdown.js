// Fonction pour démarrer ou reprendre le compte à rebours
function startOrResumeCountdown(displayElement, imageContainer, imageDiv) {
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      displayElement.style.display = 'none';

      // Afficher le div avec l'image
      imageDiv.style.display = 'block';

      // Charger l'image de manière dynamique après le compte à rebours
      const imageElement = new Image();
      imageElement.src = './img/chasseautresor.jpg'; // Remplacez par le chemin de votre image

      // Ajouter l'image au div
      imageDiv.appendChild(imageElement);
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
const targetDate = new Date('2024-1-12T19:29:59').getTime();

// Démarrer le compte à rebours
const countdownElement = document.getElementById('countdown');
const imageContainer = document.getElementById('imageContainer');
const imageDiv = document.getElementById('imageDiv');
startOrResumeCountdown(targetDate, countdownElement, imageContainer, imageDiv);
