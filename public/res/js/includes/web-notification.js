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
