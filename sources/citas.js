const citas = document.getElementById('quote');
const autor = document.getElementById('autor');
const btn = document.getElementById('generate');

const links = {
    malala: 'https://joshi010.github.io/metacukibooks/pages/descubrir.html#',
    shadow: 'https://joshi010.github.io/metacukibooks/pages/resumen/sombra.html',
    ink: '',
    miserable: ''
}


class citasLibro {
    constructor(cita, autor, link){
        this.cita = cita;
        this.autor = autor;
        this.link = link;
    }
    

}

let cita1 = new citasLibro('"I think everyone makes a mistake at least once in their life. The important thing is what you learn from it."', 'I am Malala', links.malala)
let cita2 = new citasLibro('"If you don’t raise your voice, it is unlikely anyone will hear you."', 'I am Malala', links.malala);
let cita3 = new citasLibro('"Fools talk, cowards are silent, wise men listen."', 'The Shadow of the Wind', links.shadow);
let cita4 = new citasLibro('"People tend to complicate their own lives, as if living werent already complicated enough."', 'The Shadow of the Wind', links.shadow);
let cita5 = new citasLibro('“A secrets worth depends on the people from whom it must be kept.”', 'The Shadow of The Wind', links.shadow);
let cita6 = new citasLibro('“Even the darkest night will end and the sun will rise.”', 'Les Misérables', links.miserable);
let cita7 = new citasLibro('“It is nothing to die. It is frightful not to live.”', 'Les Misérables', links.miserable);
let cita8 = new citasLibro('“Sometimes, when youre so sad you dont know what to do, it helps to be angry.”', 'Inkheart', links.ink);
let cita9 = new citasLibro('“Nothing is more frightening than a fear you cannot name.”', 'Inkheart', links.ink);

let numArr = [];

const randomQuote = () => {
    let arr = [cita1, cita2, cita3, cita4, cita5, cita6, cita7, cita8, cita9]

    const rand = () => {
        let num = arr.length;
        let rand = Math.floor(Math.random() * num);
        return rand;
    }

    const verRand = () => {
        let ver = rand();
        numArr.push(rand());
        if(numArr.length - 1 == numArr.length - 2){
            return rand;
        } else {
            return ver;
        }


    }    
    let ver = verRand();
    citas.innerHTML = arr[ver].cita;
    autor.innerHTML = `—${arr[ver].autor}` ;
    autor.href = arr[ver].link;


}

setTimeout(randomQuote, 500)


btn.onclick = () => {
    randomQuote();
}