let number1 = 0
let number2 = 0
const display = document.getElementById('display');
const numberElements = document.getElementsByClassName('numbers');
for(let i = 0; i < numberElements.length; i++) {
    numberElements[i].addEventListener('click', function() {
        display.innerText += this.innerText
    })
}

const symbolElements = document.getElementsByClassName('symbols')
for(let i = 0; i < symbolElements.length; i++) {
    symbolElements[i].addEventListener('click', function() {
        if(this.innerText == "AC") {
            display.innerText = ""
            number1 = 0
            number2 = 0
        }
    })
}

const calculationElements = document.getElementsByClassName('calculations')
for(let i = 0; i < calculationElements.length; i++) {
    calculationElements[i].addEventListener('click', function() {
        if(this.innerText == "+") {
            number1 = Number(display.innerText)
            display.innerText = "" // ??? "+"
            // alert(number1)
        }
        if(this.innerText == "=") {
            number2 = Number(display.innerText)
            display.innerText = ""
            display.innerText = number1 + number2
            number1 = 0
            number2 = 0
        }
    })
}

