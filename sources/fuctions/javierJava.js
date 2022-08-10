//program variables
let boton1 = document.getElementById('mandar1');
let boton = document.getElementById('mandar');


//javier variables

let audio = document.querySelector('#audio');
let traduccion = document.querySelector('#trans');
let decider = document.querySelector('#title');

//abel variables
function AbelRandom(){
    return Math.floor(Math.random()*9);
  } 

//program Code
const btn = document.querySelector('#otro');
        const sb = document.querySelector('#select')
        btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
           if(sb.selectedIndex === 0){
               decider.innerHTML = 'Monkey Translate';
                boton1.style.display = 'block'
                audio.style.display = 'block';
           } else if(sb.selectedIndex === 1){
               decider.innerHTML = 'Fifas Translate';
               boton1.style.display = 'none';
               audio.style.display = 'none';
           }
        };

//javier code
function choose(){
    let random = Math.floor(Math.random()*6)
        switch(random) {
            case 0:
                audio.src = '../sources/audios/audio1.mp3';
                traduccion.innerHTML = 'AAAAA aaaa AAAAA';
                break;
            case 1:
                audio.src = "../sources/audios/audio2.mp3";
                traduccion.innerHTML = 'AAAAAAAA ahh AAAAAAAAAAAA';
                break;
            case 2:
                audio.src = '../sources/audios/audio3.mp3';
                traduccion.innerHTML = 'UUUauAuAu IiiiieeehH';
                break;
            case 3:
                audio.src = "../sources/audios/audio4.mp3";
                traduccion.innerHTML = 'UeEEeEEEE UeeeEEEE';
                break;
            case 4:
                audio.src = "../sources/audios/audio5.mp3";
                traduccion.innerHTML = 'UUUAaa UaaaAa UaaA uh uh uh oh';
                break;
            case 5:
                audio.src = "../sources/audios/audio6.mp3";
                traduccion.innerHTML = 'Iiiii IIiii IIIIIIIIII';
                break;
        }
}

    boton1.onclick = function getUserInput() {
        let input =  document.querySelector('#input').value;
        let array = [''];
        array.push(input);
        let index = array.length - 1;
         if(array[index] === ''){
             alert('Debes de escribir un mensaje');
         } else {
             choose();
     }
     }



//abel code

boton.onclick = function() {
    let input = document.querySelector('#input').value;
    let checkUserInput = [''];
    checkUserInput.push(input);
    let inputIndex = checkUserInput.length - 1;
    if(checkUserInput[inputIndex] === '') {
        alert('You need to write something');
    } else {
        let inicioTraduccion = checkUserInput[inputIndex];
        let proceso = inicioTraduccion.split(' ');
        let length = proceso.length -1;
        
        i = 1;
        let bato;
        
        while (i <= proceso.length) {  
          AbelRandom();
    
          proceso.splice(i, 0, bato);
    switch(AbelRandom()){
          case 0:
            bato = 'top Eleven';
          break;
          case 1:
            bato = 'bro';
          break;
          case 2:
            bato = 'bato';
          break;
          case 3:
            bato = 'basquet';
          break;
          case 4:
            bato = 'odio a los negros';
          break;
          case 5:
            bato = 'ejercicio';
          break;
          case 6:
            bato = 'fifa';
          break;
          case 7:
            bato = 'joto';
          break;
          case 8:
            bato = 'se viene la funa';
          break;
        }
    i +=3;
        }
        traduccion.innerHTML = proceso.join(' ') + '.'
    }
}
