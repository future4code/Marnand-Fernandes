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
let resposta = confirm("Quer iniciar uma nova rodada?");
let valorUser;
let valorPc;
let totalUser = 0;
let totalPc = 0;

 console.log("Bem vindo ao jogo de Blackjack!");

   //criando condição para iniciar ou não o jogo
   if(resposta === true) {

      //array para gerar os valores das cartas do Usuário
      const cartasUsuario = [comprarCarta(), comprarCarta()];
      const cartasComputador = [comprarCarta(), comprarCarta()];

         //verifica se não houve a chamada de duas cartas ases (A), ou seja, valor 11, ao mesmo tempo
         if(cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
            cartasUsuario = [comprarCarta(), comprarCarta()];
            cartasComputador = [comprarCarta(), comprarCarta()];
         } 

         //Caixa de diálogo mostrando as cartas sorteadas
         let maisUma = confirm(
            "Suas cartas são "+cartasUsuario[0].texto+" "+cartasUsuario[1].texto+". A carta revelada do computador é "+cartasComputador[0].texto+"."+
            "\n"+  // \n faz pular a linha
            "Deseja comprar mais uma carta?"
         );

         //Verifica se houve compra de carta
         if(maisUma === true) {
            cartasUsuario.push(comprarCarta());
            cartasComputador.push(comprarCarta());

            confirm(
               "Suas cartas são "+cartasUsuario[0].texto+" "+cartasUsuario[1].texto+" "+cartasUsuario[2].texto+". A carta revelada do computador é "+cartasComputador[0].texto+" "+cartasComputador[1].texto+"."+
               "\n"+  // \n faz pular a linha
               "Deseja comprar mais uma carta?"
            );

            //soma todos os itens do array cartasUsuario com a propriedade valor
            for (let i in cartasUsuario) {
               totalUser += cartasUsuario[i].valor;
            }

            let cartasUser = cartasUsuario.map(function(item){return item.texto}); 
            let cartasPc = cartasComputador.map(function(item){return item.texto}); 

            if(totalUser <= 21 && totalUser > totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". O usuário ganhou!");
            } if (totalUser <= 21 && totalUser < totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". O computador ganhou!");
            } if (totalUser <= 21 && totalUser === totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". Empate!");
            } if (totalUser > 21 && totalUser < totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". O usuário ganhou!");
            } if (totalUser > 21 && totalUser > totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". O computador ganhou!");
            } if (totalUser > 21 && totalUser === totalPc) {
               confirm("Suas cartas são "+cartasUser+". Sua pontuação é "+totalUser+". As cartas do computador são "+cartasPc+" . A pontuação do computador é "+totalPc+". Empate!");
            } 
         }

/* 
//O reduce faz a soma dos elemtos de uma array de maneira mais simples que um laço de repetição
//O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
let total = cartasUsuario.reduce((total, cartasUsuario) => total + cartasUsuario.valor, 0);//)O zero é dado como valor inicial
console.log(total);
*/
      
  } else {
      console.log("O jogo acabou!");
   }
