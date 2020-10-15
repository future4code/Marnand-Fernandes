/*-------------------------------------------------------------> Exercícios de interpretação de código <--------------------------------------------------------------*/

// Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso no console.
/* 
    1.  O que ele faz -> Converte o valor de uma moeda para dolar.
        Como faz -> a função recebe um valor como parâmetro inserido atraves do comando prompt e multiplica pelo valor também 
                    inserido, da cotação do dolar.
        Impresso no console -> R$ 561,00.

    2.  O que ele faz -> Calcula o valor final de um investimento de acordo com tipos específicos como poupança, ações, etc.
        Como faz -> Uma função recebe dois parâmetros, o tipo do investimento e o valor, cada tipo de investimento tem um valor 
                    base diferente que será multiplicado pelo valor do investimento e o valor final será exibido na tela. 
        Impresso no console -> Será printado os valors 165 em novoMontante e TIPO DE INVESTIMENTO INFORMADO INCORRETO! no segundoMontante.

    3.  O que ele faz -> Usa um laço de repetição for para criar dois novos arrays(um com números ímpares e outro com números pares) a partir 
                        de um outro array de números.
        Como faz -> O laço for percorre todo um array de números e um bloco if/else separa os números entre os que tem resto 0(os pares) 
                    e os que não tem(ímpares) e os coloca em um novo array para os de resto 0 e outro array para os que não tem resto 0.
        Impresso no console -> Quantidade total de números 14 
                               6 
                               8.

    4.  O que ele faz -> cria dois novos arrays através de um array principal.
        Como faz -> Percore o array principal com um for e através de um if primeiro ele verifica os números do array principal são menores que 
                    a variável numero1 e se for ele vai atrinuir a variável numero1 ao número do array. No segundo if ele verifica se o número do array 
                    principal é maior que a variável numero2 e atribui a variável numero2 ao número do array.
        Impresso no console -> -10 
                                1590.
*/


/*--------------------------------------------------------------> Exercícios de Lógica de Programação <--------------------------------------------------------------*/

//1. Podemos percorrer uma lista utilizando laços de repetição como for
    // const arrayEx = ["a", "b", "c", 0, 1, 2];    

    // for (let percorreArray of arrayEx) {
    //         console.log(percorreArray);
    //     }
    
    //Há também o map para percorrer
    // const novoArray = arrayEx.map( (array) => {
    //     console.log(array);
    // } );

    //Outra forma é o filter que podemos usar para filtrar algo de um array
    // const arrayComFiltro = arrayEx.filter( (elemento) => {
    //     if (typeof elemento === "string") {
    //         return false;
    //     }
    //     return true;
    // } );
    // console.log(arrayComFiltro);
/*
2. a) false 
   b) true
   c) false
   d) true
   e) true
*/ 

//3. O código não funciona, ele é um loop infinito porque faltou o contador para acrescentar +1 a variável i e tinha que retirar o sinal de =
// pra aparecer certinho a quantodade de números definidos na variável quantidadeDeNumerosPares.
    // const quantidadeDeNumerosPares = 5;
    // let i = 0;
        
    // while(i < quantidadeDeNumerosPares) {
    //     console.log(i*2);
    //     i++;
    // }

//4. 
    // let a;
    // let b;
    // let c;

    // function verificaTipoTriangulo(a, b, c) {
    //     if (a === b && b === c && c === a) {
    //         console.log("O triângulo é Equilátero.");

    //     } else if (a === b && a !== c && c !== b || b === c && b !== a && a !== c || c === a && c !== b && b !== a) {
    //         console.log("O triângulo Isóceles.");

    //     } else if (a !== b && a !== c && b !== c) {
    //         console.log("O triângulo Escaleno.");

    //     } else {
    //         console.log("Digite valores válidos!");
    //     }        
    // }
    // verificaTipoTriangulo(5, 5, 2);

//5. 
    // let numero1;
    // let numero2;

    // function comparaNumeros(numero1, numero2) {
    //     //i.
    //     if (numero1 > numero2) {
    //         console.log("O maior é: " + numero1);

    //     } else if (numero2 > numero1) {
    //         console.log("O maior é: " + numero2);

    //     } else {
    //         console.log("Digite valores válidos!");
    //     }

    //     //ii.
    //     if (numero1 % numero2 === 0) {
    //         console.log(numero1 + " é divisível por " + numero2);

    //     } else if (numero2 % numero1 === 0) {
    //         console.log(numero2 + " é divisível por " + numero1);

    //     } else {
    //         console.log(numero2 + " não é divisível por " + numero1);
    //     } 
    //     //ii.
    //     if (numero1 % numero2 !== 0) {
    //         console.log(numero1 + " não é divisível por " + numero2);

    //     } else if (numero2 % numero1 !== 0) {
    //         console.log(numero2 + " não é divisível por " + numero1);

    //     } else {
    //         console.log("Digite valores válidos!");
    //     }

    //     //iii.
    //     if (numero1 > numero2) {
    //         let resultado = numero1 - numero2;
    //         console.log("A diferença entre eles é " + resultado);

    //     } else if (numero2 > numero1) {
    //         let resultado = numero2 - numero1;
    //         console.log("A diferença entre eles é " + resultado);

    //     } else {
    //         console.log("Digite valores válidos!");
    //     }
    // }

    // comparaNumeros(2, 74);


/*------------------------------------------------------------------> Exercícios de Funções <------------------------------------------------------------------*/

//1.
    // const arrayDeNumeros = [2, 5, 56, 0, 45, 465, 14, 3, -1, 15]; 
    // const novoArray = [];
    // let maiorNumero = 0;
    // let menorNumero = 0;
    // let segundoMaior = 0;
    // let segundoMenor = 0;

    // for (let i = 0; i < arrayDeNumeros.length; i++) {
    //     if (maiorNumero < arrayDeNumeros[i]) {
    //         maiorNumero = arrayDeNumeros[i];
    //     }

    //     if (menorNumero > arrayDeNumeros[i]) {
    //         menorNumero = arrayDeNumeros[i];
    //     }
    // }

    // for (let elemento of arrayDeNumeros) {
    //     if (elemento !== maiorNumero && elemento !== menorNumero){
    //         novoArray.push(elemento);
    //     }
    // }

    // // console.log(maiorNumero);
    // // console.log(menorNumero);
    // // console.log(arrayDeNumeros);
    // // console.log(novoArray);

    // function name(params) {
    //     for (let i = 0; i < params.length; i++) {
    //         if (segundoMaior < params[i]) {
    //             segundoMaior = params[i];
    //         }
    
    //         if (segundoMenor > params[i]) {
    //             segundoMenor = params[i];
    //         }
    //     }
    // }

    // name(novoArray);
    
    // console.log(segundoMaior);
    // console.log(segundoMenor);

//2.
    let ola = () => alert("Hello Future4");


/*------------------------------------------------------------------> Exercícios de Objetos <------------------------------------------------------------------*/

//1.Um array é um elemento que armazena uma lista de outros elementos semelhantes e um objeto é um conjunto de propriedades associados a um nome ou chave de elemento   
//  Devemos utilizar arrays ou objetos quando um elemento ou um conjunto de elementos possuem mais de uma característica espefífica.

//2. 
    // function criaRetangulo(lado1, lado2) {
        
    //     const largura = lado1;
    //     const altura = lado2;
    //     const perimetro = 2 * (lado1 + lado2);
    //     const area = lado1 * lado2;
        
    //     const retangulo = {
    //         largura: largura,
    //         altura: altura,
    //         perimetro: perimetro,
    //         area: area
    //     }

    //     return retangulo;
    // }

    // console.log(criaRetangulo(5, 5));

//3. 
    // const filmeFavorito = {
    //     titulo: "Matrix Reloaded", 
    //     ano: 2003,
    //     diretor: "Lana Wachowski, Lilly Wachowski", 
    //     elenco: "Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne, Monica Bellucci, Jada Pinkett Smith, Hugo Weaving"
    // }

    // console.log("Venha assistir ao filme "+ filmeFavorito.titulo +", de "+ filmeFavorito.ano +" dirigido por "+ filmeFavorito.diretor +" e estrelado por "+filmeFavorito.elenco+".");

//4. 
    // const pessoa = {
    //     nome: "Dr. Cooper", 
    //     idade: 27, 
    //     email: "dr.cooper@email.com",
    //     endereco: "Pasadena, California"
    // }

    // //console.log(pessoa);

    // function anonimizarPessoa(objeto) {
    //     return pessoaAnonima = {
    //         ...objeto, 
    //         nome: "ANÔNIMO",
    //     }
    // }

    // console.log(anonimizarPessoa(pessoa));


/*------------------------------------------------------------------> Exercícios de Funções de array <------------------------------------------------------------------*/

//1.a) 
    // const pessoas = [
    //     { nome: "Pedro", idade: 20 },
    //     { nome: "João", idade: 10 },
    //     { nome: "Paula", idade: 12 },
    //     { nome: "Artur", idade: 89 } 
    // ]

//     const soMaiores = pessoas.filter( (pessoa) => { return pessoa.idade > 20 } );
   
//    console.log(soMaiores);

//b) 
    // const soMenores = pessoas.filter( (pessoa) => { return pessoa.idade <= 20 } );
   
    // console.log(soMenores);

//2.
    // const array = [1, 2, 3, 4, 5, 6];
//a) 
    // const arrayMultiplicado2 = array.map( (numeros) => { return numeros * 2 } );

    // console.log(arrayMultiplicado2);

//b)
    // const arrayMultiplicado2 = array.map( (numeros) => { return String(numeros * 3) } );

    // console.log(arrayMultiplicado2);

//c) 
    // const arrayMultiplicado2 = array.map( (numeros) => { 
    //     if (numeros % 2 === 0) {
    //         return `${numeros} é par`;     
    //     } else {
    //         return `${numeros} é impar`; 
    //     }
    // } );

    // console.log(arrayMultiplicado2);

//3.
    // const pessoas = [
    //     { nome: "Paula", idade: 12, altura: 1.8},
    //     { nome: "João", idade: 20, altura: 1.3},
    //     { nome: "Pedro", idade: 15, altura: 1.9},
    //     { nome: "Luciano", idade: 22, altura: 1.8},
    //     { nome: "Artur", idade: 10, altura: 1.2},
    //     { nome: "Soter", idade: 70, altura: 1.9}
    // ];
//a)
    // const acessoPermitido = pessoas.filter( (pessoa) => {
    //     if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
    //         return true;
    //     }
    // } );
   
    // console.log(acessoPermitido);

//b) 
    // const acessoNegado = pessoas.filter( (pessoa) => {
    //     if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
    //         return false;
    //     } return true;
    // } );

    // console.log(acessoNegado);

//4.
    // const consultas = [
    //     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    //     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    //     { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    //     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    // ];

    // const filtroConsultas = consultas.map( (pessoa) => { 
    //     if (pessoa.cancelada === false && pessoa.genero === "masculino") {
    //         return `Olá, Sr. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuseo recebimento deste e-mail.`;

    //     } else if (pessoa.cancelada === false && pessoa.genero === "feminino") {
    //         return `Olá, Sra. ${ pessoa.nome }. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${ pessoa.dataDaConsulta }. Por favor, acuseo recebimento deste e-mail.`;

    //     } else if (pessoa.cancelada === true && pessoa.genero === "feminino"){
    //         return `Olá, Sra. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`; 

    //     } else if (pessoa.cancelada === true && pessoa.genero === "masculino"){
    //         return `Olá, Sr. ${ pessoa.nome }. Infelizmente, sua consulta marcada para o dia ${ pessoa.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`; 
    //     }
    // } );

    // console.log(filtroConsultas);

//5.
    // const contas = [
    //     { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    //     { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    //     { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    //     { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    //     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    //     { cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]; 

    // const compras = contas.forEach( (conta) => {
    //     for (let elemento of conta.compras) {
    //         elemento;
    //         conta.saldoTotal -= elemento;
    //     }
        
    // } );
    
    // console.log(contas);
