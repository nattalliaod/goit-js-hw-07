const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}
// console.log(refs.nameInput)
// console.log(refs.nameOutput)

refs.nameInput.addEventListener('input', onFormInput)

function onFormInput(event) {
    // refs.nameOutput.textContent = event.currentTarget.value
    if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = 'незнакомец'
    } else { 
        refs.nameOutput.textContent = event.currentTarget.value
    }

}