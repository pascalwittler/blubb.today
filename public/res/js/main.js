if (!localStorage.getItem(new Date().toISOString().split('T')[0])) {
  localStorage.setItem(new Date().toISOString().split('T')[0], '0');
}

if ('Notification' in window) {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  setInterval(() => {
    new Notification('Blubb mal wieder', {
      body: `Du hast bisher ${localStorage.getItem(new Date().toISOString().split('T')[0])} ml geblubbt.`,
      icon: '/res/img/favicon/blubb.today-32x32.png',
    });
  }, 2 * 60 * 60 * 1000);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('res/js/service-worker.js');
}

const addMenuOpener = document.querySelector('.add-menu-opener');
const addMenu = document.querySelector('.add-menu');

const addMenuList = addMenu.querySelector('ul');

addMenuList.innerHTML += `
  <li><button value="100">100 ml</button></li>
  <li><button value="200">200 ml</button></li>
  <li><button value="250">250 ml</button></li>
  <li><button value="300">300 ml</button></li>
  <li><button value="330">330 ml</button></li>
  <li><button value="350">350 ml</button></li>
  <li><button value="500">500 ml</button></li>
  <li><button value="1000">1000 ml</button></li>
`;

const addMenuButtons = addMenuList.querySelectorAll('button');

const blubbStatusProgress = document.querySelector('progress');
const blubbStatusLabel = document.querySelector('.current');

addMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentBlubbStatus = parseInt(localStorage.getItem(new Date().toISOString().split('T')[0]));
    localStorage.setItem(new Date().toISOString().split('T')[0], (currentBlubbStatus + parseInt(button.value)).toString())
    blubbStatusProgress.value = parseInt(localStorage.getItem(new Date().toISOString().split('T')[0]));
    blubbStatusLabel.innerHTML = localStorage.getItem(new Date().toISOString().split('T')[0]);
    addMenu.close();
  });
});

blubbStatusProgress.value = parseInt(localStorage.getItem(new Date().toISOString().split('T')[0]));
blubbStatusLabel.innerHTML = localStorage.getItem(new Date().toISOString().split('T')[0]);

addMenuOpener.addEventListener('click', () => {
  addMenu.showModal();
});
