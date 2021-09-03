const refs = {
    create: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    input: document.querySelector('[step="1"]'),
}
refs.create.addEventListener('click', getAmount)
refs.destroy.addEventListener('click', destroyBoxes)

function getAmount() {
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
}

function destroyBoxes() {
    refs.boxes.textContent = ''
    refs.input.value = ''
  
 
} 
function createBoxes(amount) {
    const startBoxSize = 30
    const element = document.createDocumentFragment()
    for (let i = 0; i < amount; i+=1) {
        let size = startBoxSize + i * 10
        const box = document.createElement('div')
    
        box.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`
        element.appendChild(box)
    }
    boxes.appendChild(element)

}
function random() {
  return Math.floor(Math.random() * 256)
}

