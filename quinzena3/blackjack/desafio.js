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

//Declarando principais variáveis
let iniciaJogo = confirm("Quer iniciar uma nova rodada?");
//Sortear as cartas
let cartasUser = [comprarCarta(), comprarCarta()];
let cartasPc = [comprarCarta(), comprarCarta()];
let totalUser = 0;
let totalPc = 0;

//Mensagem de boas vindas
console.log("Bem vindo ao jogo de Blackjack!");

//Verifica se o jogo foi iniciado ou não
if (iniciaJogo === false) {
    //Mensagem caso o jogo não tenha sido iniciado
    console.log("O jogo acabou!");
} else {
    //caso o jogo tenha sido iniciado, executa o programa

    //Caso apareça dois ases (A), sortear as cartas novamente
    if (cartasUser[0].valor === 11 && cartasUser[1].valor === 11 || cartasPc[0].valor === 11 && cartasPc[1].valor === 11) {
        console.log("As cartas devem ser sorteadas novamente, por favor utilize a tecla F5");
    } else {
        let maisUmaCarta = confirm(
            "Suas cartas são "+cartasUser[0].texto+", "+cartasUser[1].texto+". A carta revelada do computador é "+cartasPc[0].texto+"." +
            "\n"+  // \n faz pular a linha
            "Deseja comprar mais uma carta?"
            );
            
            while (maisUmaCarta === true) {
                //declarando um novo array
                let cartasTextoUser = []; 

                //acrescentando mais um elemeto no array cartasUser
                cartasUser.push(comprarCarta());

                //console.log(cartasUser);

                //criando novo array para mostar apenas o valor do texto do array cartasUser
                for (let cartaUser of cartasUser) {
                    cartasTextoUser.push(cartaUser.texto);
                }

                maisUmaCarta = confirm(
                    "Suas cartas são "+cartasTextoUser+". A carta revelada do computador é "+cartasPc[0].texto+"." +
                    "\n"+  // \n faz pular a linha
                    "Deseja comprar mais uma carta?"
                ); 

                //Soma o valor de todas as cartas sorteadas do usuário
                for (let cartaUser of cartasUser) {
                    totalUser += cartaUser.valor;
                }

                //Soma o valor de todas as cartas sorteadas do PC
                for (let cartaPc of cartasPc) {
                    totalPc += cartaPc.valor;
                }

                if (totalUser >= 21 || maisUmaCarta === false) {
                    if (totalUser > totalPc && totalUser < 21) {
                        maisUmaCarta = alert(
                            "Suas cartas são "+cartasTextoUser+" . Sua pontuação é "+totalUser+"."+"\n"+ 
                            "As cartas do computador "+cartasPc[0].texto+", "+cartasPc[1].texto+". A pontuação do computador é "+totalPc+"."+"\n"+
                            "O usuário ganhou!."
                        ); 
                    } else if (totalUser > totalPc && totalUser > 21) {
                        maisUmaCarta = alert(
                            "Suas cartas são "+cartasTextoUser+" . Sua pontuação é "+totalUser+"."+"\n"+ 
                            "As cartas do computador "+cartasPc[0].texto+", "+cartasPc[1].texto+". A pontuação do computador é "+totalPc+"."+"\n"+
                            "O computador ganhou!."
                        ); 
                    } else if (totalUser < totalPc && totalPc < 21) {
                        maisUmaCarta = alert(
                            "Suas cartas são "+cartasTextoUser+" . Sua pontuação é "+totalUser+"."+"\n"+ 
                            "As cartas do computador "+cartasPc[0].texto+", "+cartasPc[1].texto+". A pontuação do computador é "+totalPc+"."+"\n"+
                            "O computador ganhou!."
                        ); 
                    } else if (totalUser < totalPc && totalPc > 21) {
                        maisUmaCarta = alert(
                            "Suas cartas são "+cartasTextoUser+" . Sua pontuação é "+totalUser+"."+"\n"+ 
                            "As cartas do computador "+cartasPc[0].texto+", "+cartasPc[1].texto+". A pontuação do computador é "+totalPc+"."+"\n"+
                            "O usuário ganhou!."
                        ); 
                    }
                }
            }
    }

}
