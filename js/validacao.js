function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido, fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }


    if (numero === numeroSecreto){
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>Número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})