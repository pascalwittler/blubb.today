const blubbStatusProgressBar = document.querySelector('.progress-bar');
const blubbStatusLabel = document.querySelector('.current');

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

addMenuOpener.addEventListener('click', () => {
  addMenu.showModal();
});

addMenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentBlubbStatus = parseInt(localStorage.getItem(new Date().toISOString().split('T')[0]));
    localStorage.setItem(new Date().toISOString().split('T')[0], (currentBlubbStatus + parseInt(button.value)).toString())
    blubbStatusProgressBar.style.width = (parseInt(localStorage.getItem(new Date().toISOString().split('T')[0])) / 4000 * 100) + '%';
    blubbStatusLabel.innerHTML = localStorage.getItem(new Date().toISOString().split('T')[0]);
    addMenu.close();
  });
});
