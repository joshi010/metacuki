import { arr } from '../galeria/galeria.js';

const dataCard = document.querySelector('[data-card]');
const cardCont = document.querySelector('[card-container]');


let ary = [];

ary = arr.map((pest) => {
    const card = dataCard.content.cloneNode(true).children[0];
    const image = card.querySelector('[image-template]');
    const desc = card.querySelector('[description]');

    desc.textContent = pest.description;
    image.src = pest.image;

    cardCont.append(card);

    return {image: pest.image, description: pest.description, element: card}
})