import { monk } from "./monk-trans.js";
import { abel } from "./ab.js";

const input = document.getElementById('input');
const trans = document.getElementById('trans');
const car = document.querySelectorAll('.op-car');
let t1 = document.getElementById('trans-1');
let t2 = document.getElementById('trans-2');
let l1 = document.getElementById('lang-1');
let l2 = document.getElementById('lang-2');


const restore = () => {
    trans.innerHTML = 'Translation';
}

const def = () => {
    input.oninput = () => {
        monk();

        if(!input.value){
            restore();
        }
    }
}

l1.onclick = () => {
    l1.classList.add('active');
    l2.classList.remove('active');
    input.value = '';
    restore();
}

l2.onclick = () => {
    l1.classList.remove('active');
    l2.classList.add('active');
    input.value = '';
    restore();
}

t1.onclick = () => {
    t1.classList.add('active');
    t2.classList.remove('active');
    input.value = '';


    input.oninput = () => {
        monk();
    }
    
    if(!input.value){
        restore();
    }
}

t2.onclick = () => {
    t1.classList.remove('active');
    t2.classList.add('active');
    input.value = '';


    input.oninput = () => {
        abel();
    }

    if(!input.value){
        restore();
    }
}


def();