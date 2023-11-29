var btnChutar = document.getElementById("chutar");
var btnReiniciar = document.getElementById("reiniciar");
var randomNumber;
var tentativas;
playAgain();


/* 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Guess the Number!';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Insira um número abaixo.';
*/


function exibirTexto(tag, texto){
    let selected_tag = document.querySelector(tag);
    selected_tag.innerHTML = texto;
}


function verificarChute(){
    var guess = document.getElementById("input_guess").value;
    document.getElementById("input_guess").value = '';
    
    if (guess == ''){
        exibirTexto('p', `Você precisa inserir um valor.`);
        return;

    }

    tentativas++;
    if (guess == randomNumber){

        let mensagemFinal = tentativas > 1 ? `Parabéns! Você acertou o número secreto após ${tentativas} tentativas.` : 'Parabéns! Você acertou de primeira, jogou demais. Monstro sagrado!';
        exibirTexto('p', mensagemFinal);

        btnReiniciar.disabled = false;
        btnChutar.disabled = true;

    } else if (guess > randomNumber){
        exibirTexto('p', `O número secreto é menor que ${guess}.`);
    } else {
        exibirTexto('p', `O número secreto é maior que ${guess}.`);
    }
}


function generateNumber(){
    return parseInt(Math.floor(Math.random() * 1000) + 1);
}


function playAgain(){
    randomNumber = generateNumber();
    tentativas = 0;

    exibirTexto('h1', 'Guess the Number!');
    exibirTexto('p', 'Insira um número abaixo entre 1 e 1000.');

    btnReiniciar.disabled = true;
    btnChutar.disabled = false;
}