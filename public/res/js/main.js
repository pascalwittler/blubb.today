if (!localStorage.getItem(new Date().toISOString().split('T')[0])) {
  localStorage.setItem(new Date().toISOString().split('T')[0], '0');
}

if ('Notification' in window) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  setTimeout(() => {
    new Notification('Heute schon geblubbt?', {
      body: 'Maximilian hat schon zweimal geblubbt. Und du?',
      icon: '/res/img/favicon/blubb.today-32x32.png',
    });
  }, 1000);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('res/js/service-worker.js');
}

const addMenuOpener = document.querySelector('.add-menu-opener');
const addMenu = document.querySelector('.add-menu');

const blubbStatusProgress = document.querySelector('progress');
const blubbStatusLabel = document.querySelector('.current');

blubbStatusProgress.value = parseInt(localStorage.getItem(new Date().toISOString().split('T')[0]));
blubbStatusLabel.innerHTML = localStorage.getItem(new Date().toISOString().split('T')[0]);

addMenuOpener.addEventListener('click', () => {
  addMenu.showModal();
});
