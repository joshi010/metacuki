//no entiendo nada de lo que hice

const abelRandom = () => {
    return Math.floor(Math.random()*8);

}


const abel = () => {
    let checkUserInput = [''];
    checkUserInput.push(input.value);
    let inputIndex = checkUserInput.length - 1;
    
        let inicioTraduccion = checkUserInput[inputIndex];
        let proceso = inicioTraduccion.split(' ');
        let length = proceso.length -1;
        
        let i = 1;
        let bato;
        
        while (i <= length) {  
    

            switch(abelRandom()){
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

                proceso.splice(i, 0, bato);
    i +=3;
        }
        trans.innerHTML = proceso.join(' ');
    }

export { abel };