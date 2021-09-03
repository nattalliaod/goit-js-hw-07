const input = document.querySelector('#validation-input')
console.dir(input)
const dataVal = input.getAttribute('data-length')
console.log(dataVal)

input.addEventListener('blur', onInputAdd)

function onInputAdd() {
    const dataLength = input.value.length
    console.log(dataLength)
    if (dataLength === Number(dataVal)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
