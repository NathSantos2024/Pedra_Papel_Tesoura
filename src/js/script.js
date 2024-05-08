let pontuacaoJogador = 0;
let pontuacaoBot = 0;
let empates = 0;

function jogar(escolhaJogador) {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaBot = escolhas[Math.floor(Math.random() * escolhas.length)];

    document.getElementById('escolhas').innerHTML = `Sua escolha foi: ${escolhaJogador}<br> Minha escolha foi: ${escolhaBot}`;

    let resultado = "";

    if (escolhaJogador === escolhaBot) {
        empates++;
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 'pedra' && escolhaBot === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaBot === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaBot === 'papel')
    ) {
        pontuacaoJogador++;
        resultado = "Parabéns, você ganhou!";
    } else {
        pontuacaoBot++;
        resultado = "Você perdeu, tente novamente!";
    }

    document.getElementById('resultado').innerText = resultado;
    atualizarPontuacao();
}

function atualizarPontuacao() {
    document.getElementById('pontuacao-jogador').textContent = pontuacaoJogador;
    document.getElementById('pontuacao-bot').textContent = pontuacaoBot;
    document.getElementById('pontuacao-empate').textContent = empates;
}

function restart() {
    pontuacaoJogador = 0;
    pontuacaoBot = 0;
    empates = 0;
    atualizarPontuacao();
    document.getElementById('escolhas').innerHTML = `Sua escolha foi: <br> Minha escolha foi: `;
    document.getElementById('resultado').innerText = "";
    document.getElementById('pontuacao-jogador').textContent = pontuacaoJogador;
    document.getElementById('pontuacao-bot').textContent = pontuacaoBot;
}

// Adicionando evento de clique aos botões de jogar
document.getElementById('pedra').addEventListener('click', function() {
    jogar('pedra');
});

document.getElementById('papel').addEventListener('click', function() {
    jogar('papel');
});

document.getElementById('tesoura').addEventListener('click', function() {
    jogar('tesoura');
});

