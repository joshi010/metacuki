let format = document.getElementById('spectacular1');
let create = document.querySelector('#create');
let question = document.getElementById('questionbox');
let si = document.getElementById('positive');
let no = document.getElementById('negative');
let q1 = document.getElementById('q1');
let finalq = document.getElementById('pregunta');
let a = document.getElementById('description');

create.onclick = function(){
    if(!q1.value){
        alert('Write a question!')
    } else {
    finalq.innerHTML = q1.value + '?';
    format.style.display = 'none';
    question.style.display = 'block';}

}

no.onmouseover = function(){
    let random2 = Math.floor(Math.random()*220)
    let random = Math.floor(Math.random()*700);
    this.style.top = random;
    this.style.left = random2;
}

no.onclick = function(){
    let random2 = Math.floor(Math.random()*220)
    let random = Math.floor(Math.random()*700);
    this.style.top = random;
    this.style.left = random2;
}

si.onclick = function(){
    let mucho = document.getElementById('mucho-texto');
    let desc = document.getElementById('text-description');
    desc.innerHTML = mucho.value;
    a.style.display = 'block';
    question.style.display = 'none';
}
