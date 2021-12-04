alert("Boas vindas ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   let comprar = true
   let pontosJogador = 0
   let cartasJogador = ""
   let pontosComputador = 0
   let cartasComputador = ""

   while (comprar) {
    let carta = comprarCarta()
    pontosJogador += carta.valor
    cartasJogador += carta.carta
    let continuar = confirm(`Suas cartas são: ${cartasJogador} = ${pontosJogador}\nVocê quer comprar mais uma carta?`)

    if (!continuar) {
        comprar = false
    }
   }

   while (pontosComputador < 15 && pontosComputador <= 21) {
    let carta = comprarCarta()
    pontosComputador += carta.valor
    cartasComputador += carta.carta
   }

   // FIX: os dois ifs abaixo são executados juntos quando computador tem mais pontos que o jogador, estourando no 21
   if (pontosComputador > 21 || pontosJogador > pontosComputador) {
       alert(`O Jogador venceu!\nCartas do Jogador: ${cartasJogador} = ${pontosJogador}\nCartas do Computador: ${cartasComputador} = ${pontosComputador}\nObrigado por jogar!`)
   }
   if (pontosJogador > 21 || pontosComputador > pontosJogador) {
       alert(`O Computador venceu!\nCartas do Jogador: ${cartasJogador} = ${pontosJogador}\nCartas do Computador: ${cartasComputador} = ${pontosComputador}\nObrigado por jogar!`)
   }
   if (pontosJogador == pontosComputador) {
       alert(`Deu empate!\nCartas do Jogador: ${cartasJogador} = ${pontosJogador}\nCartas do Computador: ${cartasComputador} = ${pontosComputador}\nObrigado por jogar!`)
   }
}

alert("O jogo acabou!\nAperte F5 para jogar Blackjack!")

function comprarCarta() {
   let carta = cartas()
   let naipe = naipes()
   let valor = pegarValor(carta)
   return {carta: carta+naipe, valor: valor}
}

function cartas() {
   const cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q", "K"]
   const random = Math.floor(Math.random() * cartas.length)
   return cartas[random]
}

function naipes() {
   const naipes = ["♥", "♣", "♦", "♠"]
   const random = Math.floor(Math.random() * naipes.length)
   return naipes[random]
}

function pegarValor(carta) {
   switch (carta) {
      case 'A':
         return 11
      case 'J':
      case 'Q':
      case 'K':
         return 10
      default:
         return carta
   }
}