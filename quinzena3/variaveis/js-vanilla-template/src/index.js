/*  Exercícios de interpretação de código.
    Respostas:
    1. - será impresso no console: 
        10 
        10 5
    2. - será impresso no console: 
        10 10 10
*/

//---------------------------------------
//Exercícios de escrita de código N° 1
let nome 
let idade

console.log(typeof(nome))
console.log(typeof(idade))

//Apareceu o tipo undefined, acredito que porque eu não defini nenhum valor para as variáveis inicialmente 

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log(nome)
console.log(idade)

console.log(typeof(nome))
console.log(typeof(idade))

//O tipo das variáceis mudou, pois agora elas possuem valores atribuídos pelo usuário

console.log("Olá "+nome+", você tem " +idade+" anos")


//---------------------------------------
//Exercícios de escrita de código N° 2
let cor
let lugar
let livro
let relax
let hobby

cor = prompt("Qual sua cor favorita?")
lugar = prompt("Qual seu lugar favorito")
livro = prompt("Qual seu livro favorito?")
relax = prompt("O que você faz para relaxar?")
hobby = prompt("Qual seu hobby?")

console.log("Qual sua cor favorita?")
console.log(cor)
console.log("Qual seu lugar favorito?")
console.log(lugar)
console.log("Qual seu livro favorito?")
console.log(livro)
console.log("O que você faz para relaxar?")
console.log(relax)
console.log("Qual seu hobby?")
console.log(hobby)


//---------------------------------------
//Exercícios de escrita de código N° 3
let comidasFavoritas = ["fricassê", "pizza", "lasanha", "galinha cozida", "medalhão"]

console.log(comidasFavoritas)

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt("Qual a sua comida favorita?")

console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


//---------------------------------------
//Exercícios de escrita de código N° 4
let perguntas = ["Hoje esta frio?", "Amanhã será quinta-feira?", "Choveu hoje?"]

let respostas = [true, false, true]

console.log(perguntas[0])
console.log(respostas[0])

console.log(perguntas[1])
console.log(respostas[1])

console.log(perguntas[2])
console.log(respostas[2])
