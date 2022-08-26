let historyDrop = document.querySelector('#history');
historyDrop.onclick = () => {
    let ph = document.getElementById('name-history');
    let p1 = document.getElementById('p1');
    ph.classList.toggle('display-block');
    p1.classList.toggle('rotate');
    console.log('Niggers')
}


let more = document.querySelector('#more-tog');
more.onclick = () => {
    let m = document.getElementById('more');
    let p2 = document.getElementById('p2');
    m.classList.toggle('display-block');
    p2.classList.toggle('rotate');
    console.log('Niggers')
}


document.getElementById('call-to-1').onclick = () => {
    window.scroll({
        top: document.querySelector('.sec').offsetHeight,
        behavior: 'smooth'
    })
}
 
document.getElementById('metacuki-nft').onclick = () => {
    window.open('./projects/nfts/index.html');
}

document.getElementById('monkey').onclick = () => {
    window.open('./projects/translate/index.html');
}

document.getElementById('mbuks').onclick = () => {
    window.open('./projects/resumenes/index.html');
}

document.getElementById('quest').onclick = () => {
    window.open('./projects/questions/index.html');
}