const getSize = () => 200 - Math.floor(Math.random() * 150);
const getX = (size) => window.innerWidth - size / 2 - Math.floor(Math.random() * (window.innerWidth));
const getY = (size) => window.innerHeight - size / 2 - Math.floor(Math.random() * (window.innerHeight));
const getRotation = () => Math.floor(Math.random() * 180);

const shuffle = () => {
    const circle1 = document.querySelector('#circle1');
    const circle2 = document.querySelector('#circle2');
    const square1 = document.querySelector('#square1');
    const square2 = document.querySelector('#square2');

    const circle1Size = getSize();
    circle1.style.width = circle1Size + 'px';
    circle1.style.left = getX(circle1Size) + 'px';
    circle1.style.top = getY(circle1Size) + 'px';
    circle1.style.transform = `rotate(${getRotation()}deg)`

    const circle2Size = getSize();
    circle2.style.width = circle2Size + 'px';
    circle2.style.left = getX(circle2Size) + 'px';
    circle2.style.top = getY(circle2Size) + 'px';
    circle2.style.transform = `rotate(${getRotation()}deg)`

    const square1X = getSize();
    const square1Y = getSize();
    square1.style.width = square1X + 'px';
    square1.style.height = square1Y + 'px';
    square1.style.left = getX(square1X) + 'px';
    square1.style.top = getY(square1Y) + 'px';
    square1.style.transform = `rotate(${getRotation()}deg)`

    const square2X = getSize();
    const square2Y = getSize();
    square2.style.width = square2X + 'px';
    square2.style.height = square2Y + 'px';
    square2.style.left = getX(square2X) + 'px';
    square2.style.top = getY(square2Y) + 'px';
    square2.style.transform = `rotate(${getRotation()}deg)`
}


(() => {
    const texts = document.querySelectorAll('p');
    let i = 0;
    const next = () => i = i < texts.length - 1 ? i + 1 : 0;
    const prev = () => i = i > 0 ? i - 1 : texts.length - 1;
    document.addEventListener('mousedown', () => {
        console.log(i)
        texts[i].style.display = 'none';
    });
    document.addEventListener('mouseup', (e) => {
        shuffle();
        if (e.clientX < window.innerWidth / 2) {
            prev();
        } else {
            next();
        }
        texts[i].style.display = 'block';
    });
})();

(() => {
    const container = document.querySelector('main');

    const circle1 = document.createElement('div');
    circle1.id = 'circle1';
    circle1.classList.add('shape');
    const circle1Size = getSize();
    circle1.style.borderRadius = '100%';
    circle1.style.aspectRatio = 1;
    circle1.style.width = circle1Size + 'px';
    circle1.style.left = getX(circle1Size) + 'px';
    circle1.style.top = getY(circle1Size) + 'px';
    circle1.style.transform = `rotate(${getRotation()}deg)`
    container.appendChild(circle1);

    const circle2 = document.createElement('div');
    circle2.id = 'circle2';
    circle2.classList.add('shape');
    const circle2Size = getSize();
    circle2.style.borderRadius = '100%';
    circle2.style.aspectRatio = 1;
    circle2.style.width = circle2Size + 'px';
    circle2.style.left = getX(circle2Size) + 'px';
    circle2.style.top = getY(circle2Size) + 'px';
    circle2.style.transform = `rotate(${getRotation()}deg)`
    container.appendChild(circle2);

    const square1 = document.createElement('div');
    square1.id = 'square1';
    square1.classList.add('shape');
    const square1X = getSize();
    const square1Y = getSize();
    square1.style.width = square1X + 'px';
    square1.style.height = square1Y + 'px';
    square1.style.left = getX(square1X) + 'px';
    square1.style.top = getY(square1Y) + 'px';
    square1.style.transform = `rotate(${getRotation()}deg)`
    container.appendChild(square1);

    const square2 = document.createElement('div');
    square2.id = 'square2';
    square2.classList.add('shape');
    const square2X = getSize();
    const square2Y = getSize();
    square2.style.width = square2X + 'px';
    square2.style.height = square2Y + 'px';
    square2.style.left = getX(square2X) + 'px';
    square2.style.top = getY(square2Y) + 'px';
    square2.style.transform = `rotate(${getRotation()}deg)`
    container.appendChild(square2);
})();

/* Styles */

document.querySelectorAll('.wave').forEach(w => {
    const t = w.innerHTML;
    let i = 0;
    setInterval(() => {
        const arr = t.split('').map((e, idx) => idx === i ? '&nbsp;' : e);
        i = i < t.length - 1 ? i + 1 : 0;
        w.innerHTML = arr.join('');
    }, 100)
});

document.querySelectorAll('.double').forEach(w => {
    const t = w.innerHTML;
    let i = 0;
    setInterval(() => {
        const arr = t.split(' ').map((e, idx) => idx === t.split(' ').length - 1 ? e : idx === i ? e + '.' : e + ' ');
        i = i < t.split(' ').length - 2 ? i + 1 : 0;
        w.innerHTML = arr.join('');
    }, 500)
});

document.querySelectorAll('.i-blink').forEach(w => {
    let i = 0;
    const letter = ['i', 'î', 'ï', '!']
    setInterval(() => {
        w.innerHTML = letter[i];
        i = i < letter.length - 1 ? i + 1 : 0;
    }, 200)
});