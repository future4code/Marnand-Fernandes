/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Definindo as variáveis
let resposta = confirm("Quer iniciar uma nova rodada?");
let valorUser;
let valorPc;

console.log("Bem vindo ao jogo de Blackjack!");

   //criando condição para iniciar ou não o jogo
   if(resposta === true) {

      //array para gerar os valores das cartas do Usuário
      const cartasUsuario = [comprarCarta(), comprarCarta()];
      //somando os valores para encontrar a pontuação final das cartas do Usuário
      valorUser = cartasUsuario[0].valor + cartasUsuario[1].valor;
      console.log("Usuário - cartas: "+ cartasUsuario[0].texto, cartasUsuario[1].texto+" - pontuação "+valorUser);

      //array para gerar os valores das cartas do Computador
      const cartasComputador = [comprarCarta(), comprarCarta()];
      //somando os valores para encontrar a pontuação final das cartas do Usuário
      valorPc = cartasComputador[0].valor + cartasComputador[1].valor;
      console.log("Computador - cartas: "+ cartasComputador[0].texto, cartasComputador[1].texto+" - pontuação "+valorPc);

         if(valorUser > valorPc) {
            console.log("O usuário ganhou!");
         } if(valorUser < valorPc) {
            console.log("O computador ganhou!");
         } if(valorUser === valorPc) {
            console.log("Empate!");
         }

   } else {
      console.log("O jogo acabou!");
   }
