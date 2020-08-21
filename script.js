const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nota4 = document.querySelector('#nota4');

document.querySelector('button').addEventListener('click',function(){
    const Nota1 = Number.parseFloat(nota1.value);
    const Nota2 = Number.parseFloat(nota2.value);
    const Nota3 = Number.parseFloat(nota3.value);
    const Nota4 = Number.parseFloat(nota4.value);

    const soma = Nota1 + Nota2 + Nota3 + Nota4
    
    document.querySelector('#media-final').value = soma / 4

})