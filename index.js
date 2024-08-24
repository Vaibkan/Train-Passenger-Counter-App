// initalize count to 0
// listen for clicks on increment button
// increment count variable when button is clicked 
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countingstr = count + " - "
    saveEl.textContent += countingstr
    countEl.textContent = 0
    count = 0
}