const atividade = document.querySelector("#atividade");
const sala = document.querySelector("#sala");
const data_inicial = document.querySelector("#data_inicial");
const data_final = document.querySelector("#data_final");
const reservar = document.querySelector("#reservar");

const reservas = []

function addReserva(atividade, sala, data_final, data_inicial) {
    const reserva = {
        atividade: atividade,
        sala: sala,
        data_inicial: new Date(data_inicial),
        data_final: new Date(data_final)
    }
    reservas.push(reserva)
}

function limparCampos() {
    atividade.value = ""
    sala.value = ""
    data_inicial.value = ""
    data_final.value = ""
}

reservar.addEventListener('click', (e) => {
    e.preventDefault()
    addReserva(atividade.value, sala.value, data_final.value, data_inicial.value);
    limparCampos()
    console.log(reservas);
    
})