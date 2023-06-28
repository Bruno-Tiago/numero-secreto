function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chute.toUpperCase()==='GAME OVER'){
        document.body.classList.add("game-over")
        document.body.innerHTML =`
        <h2>GAME OVER</h2>
        <h3>Pressione o botão para tentar novamente</h3>
        <button id="jogar-novamente" class="btn-game-over">Jogar Novamente</button>
        `
    } else if(ChuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
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

