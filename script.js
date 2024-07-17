const _ = document.querySelector('#underscore');
setInterval(() => {
  if (_.style.opacity == 1) {
    _.style.opacity = 0;
  } else {
    _.style.opacity = 1
  }
}, 500);

const contactBtns = document.querySelectorAll('.contact-btn');
const popup = document.querySelector('#popup');
const quit = document.querySelector('#quit');
const bg = document.querySelector('#popup-background');

contactBtns.forEach(contact => {
  contact.addEventListener('click', () => {
    popup.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  });
});

window.addEventListener('click', (e) => {
  if (e.target == bg) {
    popup.style.visibility = 'hidden';
    document.body.style.overflow = 'inherit';
  }
});

const quitPopup = () => {
  popup.style.visibility = 'hidden';
  document.body.style.overflow = 'inherit';
}

quit.addEventListener('click', quitPopup);
document.addEventListener('keyup', (e) => {
  if (e.key === "Escape") {
    quitPopup();
  }
});
