let home = document.querySelector('.home');
let galeria = document.querySelector('.galeria');
let timer = document.querySelector('.timers');
let mar = document.querySelector('.maria');


home.onclick = () => {
    window.open('./inicio.html', '_self');
}

timer.onclick = () => {
    window.open('./timer.html', '_self');
}

galeria.onclick = () => {
    window.open('./galeria.html', '_self');
}

mar.onclick = () => {
    window.open('./maria.html', '_self');
}