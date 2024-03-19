'use strict'

const trocar = document.getElementById('trocar')
const titulo = document.getElementById('titulo')
const botao = document.getElementById('traduzir')
const img_escrever = document.getElementById('img_escrever')
const img_imprimir = document.getElementById('img_imprimir')
const tema = document.getElementById('escurecer')
const container = document.getElementById('container')
const body = document.querySelector('body')
const escrever = document.getElementById('escrever')
const imprimir = document.getElementById('imprimir')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const textArea = document.querySelector('textarea')
let escuro = false

botao.onclick = traduzirPT

trocar.addEventListener('click', function(){

    trocarEventoBotao()
    trocarTextoBotao()
    trocarTextoTitulo()
    trocarImagens()
})

tema.addEventListener('click', function(){

    mudarCores()
})

function mudarCores(){

    console.log('cores');
    if(escuro == false){
        escuro = true
        container.classList.add('container_escuro')
        body.classList.add('body_escuro')
        escrever.classList.add('campos_escuros')
        imprimir.classList.add('campos_escuros')
        h1.classList.add('branco')
        p.classList.add('branco', 'campos_escuros')
        textArea.classList.add('campos_escuros')
        textArea.style.color = '#000000'
    } else {
        escuro = false
        container.classList.remove('container_escuro')
        body.classList.remove('body_escuro')
        escrever.classList.remove('campos_escuros')
        imprimir.classList.remove('campos_escuros')
        h1.classList.remove('branco')
        p.classList.remove('branco', 'campos_escuros')
        textArea.classList.remove('campos_escuros')
    }

}

function trocarImagens(){

    img_imprimir.src = './img/brasil 1.png'
    if(img_escrever.src === './img/brasil 1.png' && img_imprimir.src === './img/bandeira 1.png') {
        img_escrever.src = './img/bandeira 1.png'
        img_imprimir.src = './img/brasil 1.png'
    } else {
        img_escrever.src = './img/brasil 1.png'
        img_imprimir.src = './img/bandeira 1.png'
    }


}

function trocarEventoBotao(){

    console.log('trocou');

    if(botao.onclick === traduzirPT) {
        botao.onclick = traduzirEN
    } else {
        botao.onclick = traduzirPT
    }

}

function trocarTextoBotao() {

    
    console.log('oi');
    if(botao.textContent == 'Traduzir para inglês') {
        botao.textContent = 'Traduzir para Português'
    } else{
        botao.textContent = 'Traduzir para inglês'
    }

}

function trocarTextoTitulo(){

    console.log('oi');
    if(titulo.textContent == 'Português - Inglês') {
        titulo.innerText = 'Inglês - Português'
    } else{
        titulo.textContent = 'Português - Inglês'
    }
}

async function traduzirPT() {
    console.log('pt');
    const texto = document.getElementById('texto').value;
    if(texto == null || texto == '') {
        alert('Escreva algo')
    } else {
        const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(texto) + '&langpair=pt|en');
    const data = await response.json();
    const traducao = data.responseData.translatedText;
    document.getElementById('impressao').innerText = traducao;
    }
}

async function traduzirEN() {
    console.log('en');
    const texto = document.getElementById('texto').value;
    const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(texto) + '&langpair=en|pt');
    const data = await response.json();
    const traducao = data.responseData.translatedText;
    document.getElementById('impressao').innerText = traducao;
}