let roomsBtn = document.querySelector('#rooms_btn');
let rooms = document.querySelector('.rooms');


roomsBtn.addEventListener('click', function(){
  roomsBtn.classList.toggle('active');
  rooms.classList.toggle('active');
})
