const bg = document.querySelector('#bg');
const nbRays = 300;

[...Array(nbRays).keys()].forEach(_ => {
    const div = document.createElement('div');
    div.classList.add('ray');
    bg.appendChild(div);
});

const shuffle = () => {
    document.querySelectorAll('.ray').forEach(r => {
        r.style.width = Math.floor(Math.random() * 75) + '%';
        r.style.marginLeft = Math.floor(Math.random() * 60) + '%';
        const c = 256 - Math.random() * 150;
        r.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
    });
}

setInterval(shuffle, 4000);
setTimeout(shuffle, 100);

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
    

const texts = document.querySelectorAll('p');
let j = 0;
const next = () => j = j < texts.length - 1 ? j + 1 : 0;
const prev = () => j = j > 0 ? j - 1 : texts.length - 1;
document.addEventListener('mousedown', () => {
    console.log(j)
    texts[j].style.display = 'none';
});
document.addEventListener('mouseup', (e) => {
    if (e.clientX < window.innerWidth / 2) {
        prev();
    } else {
        next();
    }
    texts[j].style.display = 'block';
});
