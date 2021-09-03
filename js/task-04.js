const decBtn = document.querySelector('[data-action="decrement"]')
const inkBtn = document.querySelector('[data-action="increment"]')
const numVal = document.querySelector("#value")

let counterValue = 0
const increment = () => (numVal.textContent = counterValue += 1)
const decrement = () => (numVal.textContent = counterValue -= 1)

decBtn.addEventListener("click", decrement)
inkBtn.addEventListener("click", increment)