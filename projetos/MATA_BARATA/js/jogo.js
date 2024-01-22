
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var intervaloCriabarata = 2000;

var nivelJogo = window.location.search;
nivelJogo = nivelJogo.replace('?', '');

console.log(nivelJogo);

if (nivelJogo === 'normal') {
    intervaloCriabarata = 1500;
} else if (nivelJogo === 'medio') {
    intervaloCriabarata = 1000;
} else if (nivelJogo === 'Bruce-lee') {
    intervaloCriabarata = 750;
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
        clearInterval(criabarata);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {
    if (document.getElementById('barata')) {
        document.getElementById('barata').remove();
        if (vidas > 3) {
            window.location.href = 'gameOver.html';
        } else {
            document.getElementById('v' + vidas).src = 'imG/coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoX = parseInt(Math.random() * largura) - 90;
    var posicaoY = parseInt(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    var barata = document.createElement('img');
    barata.src = 'img/barata.png';
    barata.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    barata.style.left = posicaoX + 'px';
    barata.style.top = posicaoY + 'px';
    barata.style.position = 'absolute';
    barata.id = 'barata';
    barata.onclick = function () {
        this.remove();
    };
    document.body.appendChild(barata);
}

function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3);
    switch (tamanho) {
        case 0:
            return 'barata1';
        case 1:
            return 'barata2';
        case 2:
            return 'barata3';
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

var criabarata = setInterval(posicaoRandomica, intervaloCriabarata);
