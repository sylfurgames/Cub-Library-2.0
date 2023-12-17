//Включение уведомления
window.addEventListener('offline', function() {
  var offlineNotification = document.getElementById('offline-notification');
  offlineNotification.classList.add('show')
  console.error('No internet conection');
});
//выключение уведомления
window.addEventListener('online', function() {
  var offlineNotification = document.getElementById('offline-notification');
  offlineNotification.classList.remove('show');
  console.info('Yes internet conection');
});