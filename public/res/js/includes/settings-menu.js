const settingsMenuOpener = document.querySelector('.settings-menu-opener');
const settingsMenu = document.querySelector('.settings-menu');

settingsMenuOpener.addEventListener('click', () => {
  settingsMenu.showModal();
});
