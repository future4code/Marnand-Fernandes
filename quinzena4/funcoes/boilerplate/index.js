/*------------------------------> Exercícios de interpretação de código <------------------------------*/
// EXERCÍCIO 1
//a. 10 
//   50
//b. Não apareceria nada, porque dentro da função é utilizado o return, e não console.

//EXERCÍCIO 2
//a. Darvas 
//   Goli
//b. Amanda 
//   Caio

//EXERCÍCIO 3 
//   A função conta os números de um array e monta um novo array somente com os números pares 
//   depois faz um retorno do array.
//   Podemos trocar o nome do arrayFinal por arrayDeNumerosPares

/*------------------------------> Exercícios de escrita de código <------------------------------*/
//EXERCÍCIO 4 
//a. 
    // let myInfor = () => {
    //     return "Eu sou Márnand, tenho 28 anos, moro em São José de Ribamar e sou estudante.";
    // }

    // let result = console.log(myInfor());

//b. 
    // let aboutMe = (name, age, city, student) => {
    //     if (student === true) {
    //         return "Eu sou "+name+", tenho "+age+" anos, moro em "+city+" e sou estudante.";
    //     } else if (student === false) {
    //         return "Eu sou "+name+", tenho "+age+" anos, moro em "+city+" e não sou estudante.";
    //     } else {
    //         return false;
    //     }
    // }

    // let result = console.log(aboutMe("João", 32, "Jundiaí", true));

//EXERCÍCIO 5
//a.
    // let sum = (number1, number2) => {
    //     return number1 + number2;
    // }

    // let result = console.log(sum(5, 6));

//b.
    // let test = (number1, number2) => {
    //     if (number1 >= number2) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // let result = console.log(test(8, 7));

//c. 
    // let phrase = (text) => {
    //     for (i = 0; i < 10; i++) {
    //         console.log(text);
    //     }
    // }

    // phrase("Olá, me chamo Márnand.");
 
//EXERCÍCIO 6 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
    // let countArray = (paramArray) => {
    //     return paramArray.length;
    // }
    
    // let result = countArray(array);
    // console.log(result);
    
//b. 
    const verifyOfPair = (number) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    // const result = verifyOfPair(100);
    // console.log(result);

//c. 
    // const countPairArray = (paramArray) => {
    //     const newArray = [];
    //     for (element of paramArray) {
    //         if (element % 2 === 0) {
    //             newArray.push(element);
    //         }
    //     }

    //     return newArray.length;
    // }
    
    // let result = countPairArray(array);
    // console.log(result);

//d. 
    const countPairArray = (paramArray) => {
        const newArray = [];
        for (element of paramArray) {
            if (verifyOfPair(element) === true) {
                newArray.push(element);
            }
        }

        return newArray.length;
    }
    
    let result = countPairArray(array);
    console.log(result);