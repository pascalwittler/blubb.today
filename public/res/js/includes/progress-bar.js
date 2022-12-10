const blubbStatusProgressBar = document.querySelector('.progress-bar');
const blubbStatusLabel = document.querySelector('.current');

blubbStatusProgressBar.style.width = (parseInt(localStorage.getItem(new Date().toISOString().split('T')[0])) / 4000 * 100) + '%';
blubbStatusLabel.innerHTML = localStorage.getItem(new Date().toISOString().split('T')[0]);
