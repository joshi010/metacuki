let time = document.getElementById('time');

const date = {
    day: 11,
    month: 11,
    year: 2022,

}

// const lel = () => {
//     const event = new Date()
//     const arr = [event.getDate(), event.getMonth()+1, event.getFullYear(), event.getHours(), event.getMinutes(), event.getSeconds()];

//     let dia = (31 - arr[0]) + 11;
//     let horas = (24 - arr[3]) -1;
//     let minutos = (60 - arr[4]) -1;
//     let segundos = (60 - arr[5]) -1;
//     console.log(dia, horas, minutos, segundos);

//     if(minutos < 9) {
//         let cock = `0${minutos}`;
//         return cock;
//     }
    
// }

let tdate = new Date('November 11, 2022 20:30:13');

const res = () => {
    let now = Date.now();
    let miliDif = now - tdate.getTime();

    let secs = (miliDif / 1000);
    let min = (secs / 60).toFixed(0);
    let hour = (min/60).toFixed(0);
    let day = (hour/24).toFixed(0);
    let remainSecs = (((secs - 30) %60).toFixed(0));
    let remainMin = ((min%60).toFixed(0));
    let remainHour = ((hour%60).toFixed(0));

    return {seconds: remainSecs, minutes:remainMin, hour: remainHour, day: day};
}

setInterval(function(){

    if(res().seconds <= 9){
        zeroS = `0${res().seconds}`;
    } else {
        zeroS = res().seconds;
    }

    if(res().minutes <= 9){
        zeroM = `0${res().minutes}`;
    } else {
        zeroM = res().minutes;
    }

    if(res().hour <= 9){
        zeroH = `0${res().hour}`;
    } else {
        zeroH = res().hour;
    }

    if(res().day <= 9) {
        zeroD = `0${res().day}`;
    } else {
        zeroD = res().day;
    }

    time.innerHTML = `${zeroD}: ${zeroH}: ${zeroM}: ${zeroS}`;
    
    
}, 1000);