
const openBtn = document.querySelector(".open");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

function toggleModal(event) {
  const { code } = event;
  if (code === 'Escape') {
    if (overlay.classList.contains('hide')) {
      return;
    }
    overlay.classList.toggle('hide');
    return;
  }
  overlay.classList.toggle('hide');
}
openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

addEventListener('keydown', toggleModal);