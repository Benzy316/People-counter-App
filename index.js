// making the buttons work

let countEl = document.getElementById("count-el")
let saveEl =document.getElementById("save-el")
let count = 0 

function increment() {
    count += 3
    countEl.textContent = count
}


function decrement() {
    count -= 2
    countEl.innerText =count
 }

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count=0
   
}
