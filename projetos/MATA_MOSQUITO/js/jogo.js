
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var intervaloCriamosca = 2000;

var nivelJogo = window.location.search;
nivelJogo = nivelJogo.replace('?', '');

console.log(nivelJogo);

if (nivelJogo === 'normal') {
    intervaloCriamosca = 1500;
} else if (nivelJogo === 'medio') {
    intervaloCriamosca = 1000;
} else if (nivelJogo === 'ChuckNorris') {
    intervaloCriamosca = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function () {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = './vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {
            window.location.href = './gameOver.html';
        } else {
            document.getElementById('v' + vidas).src = './imG/coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoX = parseInt(Math.random() * largura) - 90;
    var posicaoY = parseInt(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = './img/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    };
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3);
    switch (tamanho) {
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2);
    switch (lado) {
        case 0:
            return 'lado1';
        case 1:
            return 'lado2';
    }
}

var criaMosca = setInterval(posicaoRandomica, intervaloCriamosca);