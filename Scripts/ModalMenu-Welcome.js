document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal-container');
    var closeModalBtn = document.querySelector('#close-modal');
  
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });