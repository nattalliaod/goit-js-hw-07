const refs = {
    input: document.querySelector('#text'),
    changeSize: document.querySelector('#font-size-control')

}
console.dir(refs.input)

refs.changeSize.addEventListener('input', onInputHandle)

function onInputHandle() {
   refs.input.style.fontSize = `${refs.changeSize.value}px`
 
}

