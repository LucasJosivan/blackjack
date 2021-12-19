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
    if (pontosJogador > 21) {
       comprar = false
       continue
    }
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

   let resultado = `Cartas do Jogador: ${cartasJogador} = ${pontosJogador}\nCartas do Computador: ${cartasComputador} = ${pontosComputador}\nObrigado por jogar!`
   let jogadorVenceu = `O Jogador venceu!\n` + resultado
   let computadorVenceu = `O Computador venceu!\n` + resultado
   let ninguemVenceu = `Ninguém venceu!\n` + resultado
   let deuEmpate = `Deu empate!\n` + resultado
   if (pontosJogador < 22 && pontosComputador < 22) {
      if (pontosJogador > pontosComputador) {
         alert(jogadorVenceu)
      }
      if (pontosComputador > pontosJogador) {
         alert(computadorVenceu)
      }
      if (pontosJogador == pontosComputador) {
          alert(deuEmpate)
      }
   }
   if (pontosJogador < 22 && pontosComputador > 21) {
      alert(`O Computador passou de 21\n` + jogadorVenceu)
   }
   if (pontosComputador < 22 && pontosJogador > 21) {
      alert(`O Jogador passou de 21\n` + computadorVenceu)
   }
   if (pontosComputador > 21 && pontosJogador > 21) {
      alert(ninguemVenceu)
   }
}

alert("O jogo acabou!\nAperte F5 para jogar Blackjack!")

function comprarCarta() {
   let carta = cartas()
   let naipe = naipes()
   let valor = pegarValor(carta)
   return {carta: carta+naipe+" ", valor: valor}
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
