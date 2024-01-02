$(document).ready(function() {
  var botToken = '6880258827:AAFtgVqLdYA-PCJSXXRWPnJ2oyzWGYXNEg0'; // Токен бота
  var ChannelId = '@CubLibrary'; // ID канала
  var apiURL = 'https://api.telegram.org/bot' + botToken + '/getChatMembersCount?chat_id=' + ChannelId;
  function updateSubscribersCount() {
    $.getJSON(apiURL)
      .done(function(response) {
        var subscribersCount = response.result;
        $('#subscribersCount').text('Количество подписчиков: ' + subscribersCount);
console.log(subscribersCount)
      })
      .fail(function(error) {
        console.log('При получении данных с канала вышла ошибка:', error);
      });
  }
  updateSubscribersCount();
  setInterval(updateSubscribersCount, 5000); // Обновляет стату каждые 5 секунд
});