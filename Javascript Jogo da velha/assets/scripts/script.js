var jogador = null;

var jogarSelecionado = document.getElementById('vez-jogador')
var bolinha = "X"

mudarJogador(bolinha)



function escolherCard(id){
    var card = document.getElementById(id);

    card.innerHTML = jogador;

    if (jogador === "x") {
        jogador = "O";
        return jogador;
    }
}

function mudarJogador (valor){
    jogador = valor;
    jogarSelecionado.innerHTML = jogador;
}