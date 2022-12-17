let pass = 111122;
let cont = document.querySelector('#password');
let pist = document.querySelector('#btnPist');
let pistCanv = document.getElementById('pista');

const login = () => {
    window.open('./inicio.html', '_self');
    document.cookie = "logedIn=True";
}

pist.onclick = () => {
    pistCanv.innerHTML = 'El día que todo empezó (como por milesima vez). Formato DDMMAA (numeros)'
}

cont.oninput = () => {
    if(cont.value !== pass.toString()){
        console.log('error');
        console.log(cont.value);
    } else {
        console.log('lel')
        login();
    }
}

