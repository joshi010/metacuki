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

let num = 10;
setInterval(function(){
    const event = new Date()
    const arr = [event.getDate(), event.getMonth()+1, event.getFullYear(), event.getHours(), event.getMinutes(), event.getSeconds()];

    let dia = (30-11) + arr[0];
    let horas = arr[3];
    let minutos = arr[4];
    let segundos = arr[5];

    if(segundos <= 9){
        zeroS = `0${segundos}`;
    } else {
        zeroS = segundos;
    }

    if(minutos <= 9){
        zeroM = `0${minutos}`;
    } else {
        zeroM = minutos;
    }

    if(horas <= 9){
        zeroH = `0${horas}`;
    } else {
        zeroH = horas;
    }

    if(dia <= 9) {
        zeroD = `0${dia}`;
    } else {
        zeroD = dia;
    }

    time.innerHTML = `${zeroD}: ${zeroH}: ${zeroM}: ${zeroS}`
    
    
}, 1000);