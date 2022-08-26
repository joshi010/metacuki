let x = input;


const rand = () => {
    let m = Math.floor(Math.random()*10);
    switch(m) {
        case 0:
            return 'aaa';
            break;
        
        case 1:
            return 'iiiiiii';
            break;
        
        case 2:
            return 'eeeeeeee';
            break;
        
        case 3:
            return 'oooooooo';
            break;

        case 4:
            return 'uuuu';
            break;
        
        case 5:
            return 'ooo';
            break;
        
        case 6:
            return 'iii';
            break;

        case 7:
            return 'eee';
            break;

        case 8:
            return 'uuuuuuu';
            break;

        case 9:
            return 'IIiii';
            break;

        case 10:
            return 'ooOooOO';
            break;

        default:
            return 'TRANSLATION';
            break;
    }
}


const voc = () => {
    let orr = [];
    const bank = x.value.split(' ');
    bank.forEach(a => {
        orr.push(rand());
    } )

    return orr;
}

let count = 0;
const monk = () => {
    trans.innerHTML = voc().join(' ');

    count++;
}


export { monk };