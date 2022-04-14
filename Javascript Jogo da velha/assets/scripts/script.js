var jogador = null;
var vencedorSelecionado = document.getElementById('vencedor');
var jogarSelecionado = document.getElementById('vez-jogador');
var card = document.getElementsByClassName('card');
var restart = document.getElementById('btn-restart');

mudarJogador("X");



function escolherCard(id){
    var card = document.getElementById(id);


    if(card.innerHTML !== "-"){
        return;
        
    }

    card.innerHTML = jogador;
    card.style.color = '#000';

    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X"
    }
    conferirVencedor();
}

function mudarJogador (valor){
    jogador = valor;
    jogarSelecionado.innerHTML = jogador;
}

/*function conferirVencedor (){
    
    if (card1.innerHTML !== '-' && card1.innerHTML === card2.innerHTML && card2.innerHTML === card3.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card4.innerHTML !== '-' && card4.innerHTML === card5.innerHTML && card5.innerHTML === card6.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card7.innerHTML !== '-' && card7.innerHTML === card8.innerHTML && card8.innerHTML === card9.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card1.innerHTML !== '-' && card1.innerHTML === card4.innerHTML && card4.innerHTML === card7.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card2.innerHTML !== '-' && card2.innerHTML === card5.innerHTML && card5.innerHTML === card8.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card3.innerHTML !== '-' && card3.innerHTML === card6.innerHTML && card6.innerHTML === card9.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card1.innerHTML !== '-' && card1.innerHTML === card5.innerHTML && card5.innerHTML === card9.innerHTML){
        console.log('cheguei aqui')
        return true;
    }

    if (card3.innerHTML !== '-' && card3.innerHTML === card5.innerHTML && card5.innerHTML === card7.innerHTML){
        console.log('cheguei aqui')
        return true;
    }
    
}*/

function conferirVencedor (){
    
    var card1 = document.getElementById('1')
    var card2 = document.getElementById('2')
    var card3 = document.getElementById('3')
    var card4 = document.getElementById('4')
    var card5 = document.getElementById('5')
    var card6= document.getElementById('6')
    var card7 = document.getElementById('7')
    var card8 = document.getElementById('8')
    var card9 = document.getElementById('9')

    if(verifica(card1, card2, card3)){
        corCard(card1, card2, card3)
        mudarVencedor(card1);
    }

    if(verifica(card4, card5, card6)){
        corCard(card4, card5, card6)
        mudarVencedor(card4);
    }
    
    if(verifica(card7, card8, card9)){
        corCard(card7, card8, card9)
        mudarVencedor(card7);
    }

    if(verifica(card1, card4, card7)){
        corCard(card1, card4, card7)
        mudarVencedor(card1);
    }

    if(verifica(card2, card5, card8)){
        corCard(card2, card5, card8)
        mudarVencedor(card2);
    }

    if(verifica(card3, card6, card9)){
        corCard(card3, card6, card9)
        mudarVencedor(card3);
    }

    if(verifica(card1, card5, card9)){
        corCard(card1, card5, card9)
        mudarVencedor(card1);
    }

    if(verifica(card3, card5, card7)){
        corCard(card3, card5, card7)
        mudarVencedor(card3);
    }
    
}

function mudarVencedor(card) {
    vencedor = card.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function corCard(card1, card2, card3){
    card1.style.background = '#0F0';
    card2.style.background = '#0F0';
    card3.style.background = '#0F0';
}

function verifica(card1, card2, card3){
    var eigual = false;

    if (card1.innerHTML !== '-' && card1.innerHTML === card2.innerHTML && card2.innerHTML === card3.innerHTML){
        eigual = true;
    }

    return eigual;
}

restart.addEventListener('click', reiniciar);

function reiniciar(){
    
    vencedorSelecionado = ''
    console.log('joao')

    for( var i =1; i<=9; i++){
        var card = document.getElementById(i)
        card.style.background = '#fff'
        card.style.color = '#fff'
        card.innerHTML = '-'
    }
}