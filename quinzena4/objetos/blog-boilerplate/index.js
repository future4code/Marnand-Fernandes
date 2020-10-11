//capturando os elementos do HTML
const titulo = document.getElementById("titulo-post");
const imagem = document.getElementById("imagem-post");
const autor = document.getElementById("autor-post");
const conteudo = document.getElementById("conteudo-post");
const conteudoSalvo = document.getElementById("container-de-posts");

//ARARY VAZIO QUE RECEBERÁ OS OBJETOS
const formulariosSalvos = [];

//FUNÇÃO PARA CAPTURAR OS VALORES DOS ELEMENTOS HTML ACIMA E MOSTRAR NA TELA
function salvarConteudo() {

    const formulario = {
        titulo: titulo.value,
        imagem: imagem.value,
        autor: autor.value,
        conteudo: conteudo.value 
    };

    //INSERE NOVO OBJETO NO ARRAY
    formulariosSalvos.push(formulario);

    //VERIFICA SE O LINK DA IMAGEM CUMPRE OS REQUISITOS SOLICITADOS
    if (formulario.imagem.includes(".jpg") || formulario.imagem.includes(".jpeg") || formulario.imagem.includes(".png")) {
        //CAPTURA OS VALORES DO ELEMENTOS HTML DEFINIDOS NO INICIO DO CÓDIGO
        conteudoSalvo.innerHTML += `<div class="cartao"> 
        <p> Título: ${formulario.titulo} </p>
        <img src="${formulario.imagem}" alt="Imagem">
        <p> Autor: ${formulario.autor} </p>
        <p> Conteúdo: ${formulario.conteudo} </p>`;
    } else {
        alert("O campo imagem aceita apenas links terminados em .jpg, .jpeg ou .png.")
    }


    //ESVAZIA OS ELEMENTOS HTML APÓS MOSTRAR OS VALORES NA TELA
    titulo.value = "";
    imagem.value = "";
    autor.value = "";
    conteudo.value = "";
}

