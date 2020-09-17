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
