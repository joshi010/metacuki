let timer2 = document.getElementById('timer');
let time2 = document.getElementById('time');

window.onscroll = () => {
    if(window.pageYOffset > 65) {
        timer2.classList.add('timer-small');
        time2.classList.add('time-small');
    } else {
        timer2.classList.remove('timer-small');
        time2.classList.remove('time-small');
    }
}