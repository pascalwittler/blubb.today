if (!localStorage.getItem(new Date().toISOString().split('T')[0])) {
  localStorage.setItem(new Date().toISOString().split('T')[0], '0');
}
