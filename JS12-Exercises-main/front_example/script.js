const display = document.getElementById("display");


const numberElement = document.getElementsByClassName("numbers");
for (let i = 0; i < numberElement.length; i++) {
    numberElement[i].addEventListener("click", function () {
        alert(this.innerText)
    })
}

const symbolElement = document.getElementsByClassName("symbols")
for (let i = 0; i < symbolElement.length; i++) {
    symbolElement[i].addEventListener("click", function () {
        alert(this.innerText)
    })
}

const calculationElement = document.getElementsByClassName("calculations")
for (let i = 0; i < calculationElement.length; i++) {
    calculationElement[i].addEventListener("click", function () {
        alert(this.innerText)
    })
}
