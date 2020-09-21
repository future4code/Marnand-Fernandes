/*
OSERVAÇÃO - os exercícos de escrita de código também estão comentados para não executarem todos de uma vez
*/

//Exercício de Interpretação
// 1. a. false
//    b. false
//    c. true
//    e. boolean

// 2. a. 
//    b. null
//    c. 11
//    d. 0
//    e. 19
//    f. 6

//Exercício de escrita de código
//1. 
/*
    let idade; 
    let idade2;
    let resposta;
    let diferenca;

    idade = Number(prompt("Qual a sua idade?"));
    idade2 = Number(prompt("Qual da sua melhor amiga ou amigo?"));
    resposta = idade > idade2;
    diferenca = idade - idade2;

    console.log("Sua idade é maior do que a do seu melhor amigo ou amiga?");
    console.log(resposta);
    console.log(diferenca);
*/

//2. 
/*
    let numPar;
    let resto;

    numPar = Number(prompt("Insira um número par"));
    resto = numPar%2;

    console.log(resto);
    
    Notei que o resto sempre será 0

    Caso o número digitado seja ímpar o resto sempre será 1
*/

//3. 
/*
    let listaDeTarefas = [];
    let deletaDaLista;
    
    listaDeTarefas[0] = prompt("Cite uma tarefa que realize em seu dia-a-dia.");
    listaDeTarefas[1] = prompt("Cite mais uma tarefa que realize em seu dia-a-dia.");
    listaDeTarefas[2] = prompt("Cite outra uma tarefa que realize em seu dia-a-dia.");

    console.log(listaDeTarefas);

    deletaDaLista = prompt("Digite o índice de uma das tarefas que citou, onde a primeira se refe a 0, a segunda a 1 e a terceira a 2.");

    listaDeTarefas.splice(deletaDaLista, 1);

    console.log(listaDeTarefas);
*/

//4.
/* 
    let nome;
    let email; 

    nome = prompt("Qual seu nome?");
    email = prompt("Qual seu email?");

    console.log("O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nome+"!");
*/

/*
DESAFIOS 
*/

//1.
/*
    let transform; 

    transform = (77-32)*5/9+273.15;

    console.log("77ºF para K");
    console.log(transform+"K");

    transform = (80)*9/5 + 32;

    console.log("80ºC para ºF");
    console.log(transform+"ºF");

    transform = (30)*9/5 + 32;

    console.log("30ºC para ºF");
    console.log(transform+"ºF");

    transform = 30+273.15;

    console.log("30ºC para K");
    console.log(transform+"K");
*/

//2. 
/*
    let consumo = 280;
    let quilowattHora = 0.05;
    let valor; 
    let desconto;

    valor = quilowattHora * consumo;

    console.log("Valor a ser pago pela residência:", valor);
    
    desconto = valor - (valor*15)/100;

    console.log("Valor com 15% de desconto", desconto);
*/

//3. 
    let libra = 20;
    const oz = 10.5;
    const milha = 100;
    const pes = 50;
    const galao = 103.56;
    const xicara = 450;
    let converte;

    converte = libra*0.4536;

    console.log("20lb equivalem a "+converte+"kg");
   
     converte = oz*0.0283;

    console.log("10.5oz equivalem a "+converte+"kg");
    
    converte = milha*1609.344;

    console.log("100mi equivalem a "+converte+"m");

    converte = pes*0.3048;

    console.log("50ft equivalem a "+converte+"m");

    converte = galao*3,7854;

    console.log("103.56gal equivalem a "+converte+"l");

    converte = xicara*0.24;

    console.log("450xic equivalem a "+converte+"l");

    libra = Number(prompt("Digite o valor que deseja cenverter de libra para quilos: "));

    converte = libra*0.4536;

    console.log(libra+"lb equivalem a "+converte+"kg");
