//----------------------------------> Exercícios de interpretação de código <----------------------------------//
// EXERCÍCIO 1
// o código do exercício 1 está somando valores enquanto a variável i for menor que 5.
// o resultado impresso será: 10

// EXERCÍCIO 2
    // a. 19
    //    21
    //    23
    //    25
    //    27
    //    30
    // b. o for...of é suficiente para acessar cada índice da lista
    //   podemos chama-lo dessa maneira:
    //     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    //     for (let numero of lista) {
    //         console.log(numero)
    //     }

//----------------------------------> Exercícios de escrita de código <----------------------------------//
// EXERCÍCIO 3
// Este array será usado para exemplificar as respostas de todos os itens
    const arrayOriginal = [10, 11, 12, 15, 18];  

    // // Resposta item a.
    // for (let numero of arrayOriginal) {
    //     console.log(numero);
    // }

    // Resposta item b.
    // for (let numero of arrayOriginal) {
    //     numero = numero / 10;
    //     console.log(numero);
    // }

    // Resposta item c.
    // const novoArray = [];

    // for (let numero of arrayOriginal) {
    //     numeroP = numero % 2;
    //     if (numeroP === 0) {
    //         novoArray.push(numero);
    //     }
    // }
    
    // console.log(novoArray);

    // Resposta item d.
    // const novoArrayString = [];

    // for (let numero of arrayOriginal) {
    //     novoArrayString.push("O elemento do índex "+arrayOriginal.indexOf(numero)+" é "+numero);
    // }
    
    // console.log(novoArrayString);

    // Resposta item e.
    let valorMaximo = 0;

    for (let numero of arrayOriginal) {
        if (numero > valorMaximo) {
                valorMaximo = numero
            }
    }

    console.log(valorMaximo);

    let valorMinimo = valorMaximo;

    for (let numero of arrayOriginal) {
        if (numero < valorMinimo) {
                valorMinimo = numero
            }
    }

    console.log(valorMinimo);
