let valorId = "";

//muda valores de valorId para selecionar dia da semana
function diaSemana() {
    const diaSemana = document.getElementById("dias-semana");
    const valorSemana = diaSemana.value;

    switch (valorSemana) {
        case "domingo":
            valorId = "domingo";
        break;

        case "segunda":
            valorId = "segunda";
        break;

        case "terca":
            valorId = "terca";
        break;

        case "quarta":
            valorId = "quarta";
        break;

        case "quinta":
            valorId = "quinta";
        break;

        case "sexta":
            valorId = "sexta";
        break;

        case "sabado":
            valorId = "sabado";
        break;

        default:
            alert("Escolha um dia da semana válido!")
            break;
    }

    //riscar elemento
    document
    .getElementById(valorId)
    .addEventListener("click", tarefaFeita);

    function tarefaFeita(event) {
        event.target.classList.toggle("riscar");;
    }
}

//isere velor dentro da div dia-semana
function novaTarefa() {
    const tarefa = document.getElementById("tarefa");
    const valorTarefa = tarefa.value;

    diaSemana();

    if (valorTarefa !== "") {
        const campo = document.getElementById(valorId);
        campo.innerHTML += `<li id="selecionado">${valorTarefa}</li>`;
        tarefa.value = "";
    } else {
        alert("Insira uma tarefa por favor!")
    }
}
