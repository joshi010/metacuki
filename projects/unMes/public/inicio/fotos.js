import { arr } from '../galeria/galeria.js';

const dataCard = document.querySelector('[data-card]');
const cardCont = document.querySelector('[card-container]');



let ary = [];

ary = arr.map((pest) => {
    const card = dataCard.content.cloneNode(true).children[0];
    const image = card.querySelector('[image-template]');
    const heart = card.querySelector('[heart-icon]');
    const desc = card.querySelector('[description]');

    desc.textContent = pest.description;
    heart.src = './iconos/heart-active.png';
    image.src = pest.image;

    cardCont.append(card);

    return {image: pest.image, description: pest.description, heart: pest.heart,  element: card}
})

document.querySelectorAll('[heart-icon]').forEach(x => {
    let like = true;
    x.onclick = () => {
        if(like){
            x.src = './iconos/heart.png';
            like = false;
        } else {
            x.src = './iconos/heart-active.png';
            like = true;
        }
        
    }
        
    
})