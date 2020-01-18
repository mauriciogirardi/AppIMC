const btnCalcElemento = document.querySelector('button')
const resEl = document.querySelector('#res')

function calcularImc(event) {
    event.preventDefault()

    resEl.innerHTML = ''

    const pesoElment = document.querySelector('#peso')
    const alturaElement = document.querySelector('#altura')

    if (pesoElment.value === '' || alturaElement.value === '') {
    
        if (pesoElment.value === '') {
            pesoElment.style.border = '2px solid red'
        } else if (alturaElement.value === '') {
            alturaElement.style.border = '2px solid red'
        }
        
    } else {
        
        pesoElment.style.border = '1px solid #ccc'
        alturaElement.style.border = '1px solid #ccc'

        const resutadoImc = pesoElment.value / (alturaElement.value * alturaElement.value)

        const p = document.createElement('p')   
        resEl.appendChild(p)

        p.style.backgroundColor = 'rgb(253, 128, 82)'
        p.style.marginTop = '20px'
        p.style.padding = '10px 3px'

        if (resutadoImc < 18.5) {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (abaixo do peso!)')
            p.appendChild(textRes)

        } else if (resutadoImc >= 18.5 && resutadoImc <= 24.9) {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (Peso normal!)')
            p.appendChild(textRes)

        } else if (resutadoImc >= 25 && resutadoImc <= 29.9) {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (Sobrepeso)')
            p.appendChild(textRes)

        } else if (resutadoImc >= 30 && resutadoImc <= 34.9) {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (Obesidade gra 1!)')
            p.appendChild(textRes)

        } else if (resutadoImc >= 35 && resutadoImc <= 39.3) {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (Obesidade gra 2!)')
            p.appendChild(textRes)

        } else {

            let textRes = document.createTextNode('Seu IMC é: ' + Math.round(resutadoImc) + ' (Obesidade gra 3!)')
            p.appendChild(textRes)

        }
    
        pesoElment.value = ''
        alturaElement.value = ''

    }

}

btnCalcElemento.onclick = calcularImc



