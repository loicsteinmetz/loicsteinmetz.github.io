const bg = document.querySelector('#bg');
const nbRays = 300;

[...Array(nbRays).keys()].forEach(_ => {
    const div = document.createElement('div');
    div.classList.add('ray');
    bg.appendChild(div);
});

const shuffle = () => {
    const color = `rgb(${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) })`;
    document.querySelectorAll('.circle').forEach(c => {
        c.style.backgroundColor = color;
        c.style.marginLeft = (Math.random() < 0.5 ? -1 : 1) * Math.random() * 60 + 'px';
    });
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
    

const texts = document.querySelectorAll('p');
let i = 0;
document.addEventListener('mousedown', () => {
    texts[i].style.display = 'none';
    i = i < texts.length - 1 ? i + 1 : 0;
});
document.addEventListener('mouseup', () => {
    texts[i].style.display = 'block';
});
