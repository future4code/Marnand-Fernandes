                                /***********************************************
                                        Exercícios de interpretação de código 
                                ***********************************************/

// EXERCÍCIO 1
    // O código verifica se um número daddo pelo usuário é par(se o resto da divisão por 2 é zero).
    // Ele imprime "Passou no teste.", caso o número seja par.
    // Ele imprime "Não passou no teste", caso o número seja ímpar.

// EXERCÍCIO 2
    // a. O código verifica qual fruta o cliente esta comprando para revelar seu devido preço.
    // b. Mensagem impressa no console = "O preço da fruta maçã é R$ 2.25".
    // c. Mensagem impressa no console = "O preço da fruta pêra é R$ 5".

// EXERCÍCIO 3
    // a. Está definindo a variável numero recebendo um valor que o usuário irá digitar e 
    //    transformando o valor digitado em Number.

    // b. Se o número digitado for 10 = "Esse número passou no teste".
    //    Se o número digitado for -10 vai aparcer uma mensagem dizendo que a variável mensagem não foi definida.

    // c. Sim, porque o código tenta exibir a variável mensagem no escopo global, 
    //    mas a variável foi definida no escopo filho, 
    //    o bloco if, que não permite seu uso fora dele.


                                /***********************************************
                                        Exercícios de escrita de código 
                                ***********************************************/

// EXERCÍCIO 4
    //exercício 4 - 1 e 2
/*    const idade = Number(prompt("Digite sua idade."));

    //exercício 4 - 3
    if (idade >= 18) {
        console.log("Você pode dirigir.");
    } else {
        console.log("Você não pode dirigir.");
    }
*/

// EXERCÍCIO 5 
/*    const turno = prompt("Digite 'M' para o turno matutino, 'V' para o vespertino ou 'N' para o noturno.");

    if (turno === "M") {
        console.log("Bom Dia!");
    } else if (turno === "V") {
        console.log("Boa Tarde!");
    } else if (turno === "N"){
        console.log("Boa Noite!");
    } else {
        console.log("Digite apenas 'M' ou 'V' ou 'N' maiúsculas.");
    }
*/

// Exercício 6
/*    const turno = prompt("Digite 'M' para o turno matutino, 'V' para o vespertino ou 'N' para o noturno.");
    
    switch (turno) {
        case "M":
            console.log("Bom Dia!");
            break;

        case "V":
            console.log("Boa Tarde!");
            break;

        case "N":
            console.log("Boa Noite!");
            break;

        default:
            console.log("Digite apenas 'M' ou 'V' ou 'N' maiúsculas.");
    }
*/

// Exercício 7
/*    const genero = prompt("Qual o gênero do filme que irão assistir?");
    const valor = Number(prompt("Qual o valor do ingresso?"));

    if (genero === "fantasia" && valor < 15) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme :(");
    }
*/

// DESAFIO 1
/*    const genero = prompt("Qual o gênero do filme que irão assistir?");
    const valor = Number(prompt("Qual o valor do ingresso?"));

    if (genero === "fantasia" && valor < 15) {
        const snack = prompt("Qual snack gostaria de comprar?");
        console.log("Bom filme!");
        console.log("... com", snack);
    } else {
        console.log("Escolha outro filme :(");
    }
*/

// DESAFIO 2
    const nome = prompt("Digite seu nome completo");
    let tipoJogo = prompt("O jogo que deseja assistir é internacional, IN ou doméstico, DO?"); 
    let etapaJogo = prompt("O jogo que deseja assistir está em qual etapa?"+"\n" 
                            +"SF - semi-final, DT - decisão de 3º lugar ou FI - final"); 
    let categoria = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4"));
    const qtdIngressos = Number(prompt("Quantos ingressos deseja?"));
    let valor;

    switch (tipoJogo) {
        case "IN":
            tipoJogo = "Internacional";
            break;
        
        case "DO":
            tipoJogo = "Doméstico";
            break; 

        default:
            tipoJogo = "Valor indefinido, escolha novamente!";
            break;
    }

    switch (etapaJogo) {
        case "SF":
            etapaJogo = "Semi-final";
            break;
        
        case "DT":
            etapaJogo = "Disputa pelo 3º lugar";
            break; 

        case "FI":
            etapaJogo = "Final";
            break; 

        default:
            tipoJogo = "Valor indefinido, escolha novamente!";
            break;
    }



    console.log("---Dados da compra---");
    console.log("Nome so cliente:", nome);
    console.log("Tipo do jogo:", tipoJogo);
    console.log("Etapa do jogo:", etapaJogo);
    console.log("Categoria:", categoria);
    console.log("Quantidade de ingressos:", qtdIngressos);
    console.log("---Valores---");

    //começo do bloco if principal
    if (tipoJogo === "Doméstico") {
        if (etapaJogo === "Semi-final" && categoria === 1) {
            valor = 1320; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 1) {
            valor = 660; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 1) {
            valor = 1980; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Semi-final" && categoria === 2) {
            valor = 880; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 2) {
            valor = 440; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 2) {
            valor = 1320; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Semi-final" && categoria === 3) {
            valor = 550; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 3) {
            valor = 330; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 3) {
            valor = 880; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);
            
        } else if (etapaJogo === "Semi-final" && categoria === 4) {
            valor = 220; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 4) {
            valor = 170; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 4) {
            valor = 330; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);
            
        } else {
            console.log("Parece que você digitou algo que não devia, tente novamente!");
        }
    
    //meio do bloco if principal, else if
    } else if (tipoJogo === "Internacional"){
        if (etapaJogo === "Semi-final" && categoria === 1) {
            valor = 1320 * 4.1; 
            
            console.log("Valor do ingresso: R$", valor);
            console.log("Valor total: R$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 1) {
            valor = 660 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 1) {
            valor = 1980 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Semi-final" && categoria === 2) {
            valor = 880 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 2) {
            valor = 440 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 2) {
            valor = 1320 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Semi-final" && categoria === 3) {
            valor = 550 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 3) {
            valor = 330 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 3) {
            valor = 880 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);
            
        } else if (etapaJogo === "Semi-final" && categoria === 4) {
            valor = 220 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Disputa pelo 3º lugar" && categoria === 4) {
            valor = 170 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);

        } else if (etapaJogo === "Final" && categoria === 4) {
            valor = 330 * 4.1; 
            
            console.log("Valor do ingresso: U$", valor);
            console.log("Valor total: U$", valor * qtdIngressos);
            
        } else {
            console.log("Parece que você digitou algo que não devia, tente novamente!");
        }
    
    //final do bloco if principal, else
    } else {
        console.log("Parece que você digitou algo que não devia, tente novamente!");
    }
    