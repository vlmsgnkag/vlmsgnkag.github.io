const dias = document.querySelector("#theNumbers > li:nth-child(1)")
const horas = document.querySelector("#theNumbers > li:nth-child(3)")
const minutos = document.querySelector('#theNumbers > li:nth-child(5)')
const segundos = document.querySelector('#theNumbers > li:nth-child(7)')

setInterval(() => {
    if(segundos.innerText > 00) {
        if(segundos.innerText > 10) {
            segundos.innerText = `${segundos.innerText - 1}`
        } else {
            segundos.innerText = `${'0' + String(segundos.innerText - 1)}`
        }
    } else {
        changeMinute()
    }
}, 1000)

function changeMinute() {
    if(minutos.innerText > 00) {
        if (minutos.innerText > 10) {
            minutos.innerText = `${minutos.innerText - 1}`
            segundos.innerText = '59'
        } else {
            minutos.innerText = `${'0' + String(minutos.innerText - 1)}`
            segundos.innerText = '59'
        }
    } else {
        changeHour()
    }
}

function changeHour() {
    if(horas.innerText > 00) {
        if(horas.innerText > 10) {
            horas.innerText = `${horas.innerText - 1}`
            minutos.innerText = '60'
        } else {
            horas.innerText = `${'0' + String(horas.innerText - 1)}`
            minutos.innerText = '60'
        }
    } else{
        changeDay()
    }
}

function changeDay() {
    if (dias.innerText > 00) {
        if(dias.innerText > 10) {
            dias.innerText = `${dias.innerText - 1}`
            horas.innerText = '24'
        } else {
            dias.innerText = `${'0' + String(dias.innerText - 1)}`
            horas.innerText = '24'
        }
    }
}

const bg = document.querySelector('.bg')
const loginBox = document.querySelector('.loginBox')

const btnSubscribe = document.querySelector('#btnSubscribe')
const btn = document.querySelector('#btn')

btnSubscribe.addEventListener('click', () => {
    bg.classList.add('blurElement')
    loginBox.classList.remove('hideElement')
})

btn.addEventListener('click', () => {
    bg.classList.remove('blurElement')
    loginBox.classList.add('hideElement')
    newSubscriber()
})

function newSubscriber() {
    window.alert('Obrigado Por Se Inscrever! 💜')
}