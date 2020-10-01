let valorId = "";

function novaTarefa() {
    const tarefa = document.getElementById("tarefa");
    const valorTarefa = tarefa.value;
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

    if (valorTarefa !== "") {
        const campo = document.getElementById(valorId);
        campo.innerHTML += `<li>${valorTarefa}</li>`;
        tarefa.value = "";
    } else {
        alert("Insira uma tarefa por favor!")
    }
}
