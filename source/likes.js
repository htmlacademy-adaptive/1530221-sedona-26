let like = document.querySelector('.like');
let likeAmount = document.querySelector('.like__amount');

like.onclick = function () {
  if (like.classList.contains('added')) {
    likeAmount.textContent--;
  }
  else {
    likeAmount.textContent++;
  }
  like.classList.toggle('added');
}
