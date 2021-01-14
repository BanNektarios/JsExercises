let theList = document.querySelector("#theList")
let form = document.querySelector("form")
let item = document.querySelector("#item")
let itemNum = 0


form.addEventListener("submit", (e) => {
    e.preventDefault();
    theList.innerHTML += "<li>"+ item.value +"</li>";
    // store(item.value)
    store2(theList.innerHTML)
    itemNum++
    item.value = "";
})

function store(itemValue) {  
    window.localStorage.setItem("item" + itemNum, itemValue);
}

function store2(itemsValues) {
    window.localStorage.myItemsList = itemsValues;
}