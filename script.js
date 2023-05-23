const _ = document.querySelector('span');
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
  });
});

window.addEventListener('click', (e) => {
  if (e.target == bg) {
    popup.style.visibility = 'hidden';
  }
});

quit.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
});