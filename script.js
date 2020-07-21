const binarInput = document.querySelector('.binar-input')
const resultInput = document.querySelector('.result-input')
const convert = document.querySelector('.convert')

let inputValue;
let binarValue;

convert.addEventListener('click', event => {
    inputValue = binarInput.value
    binarValue = parseInt(binarInput.value, 2);

    inputValue.split('').forEach(num => {
        if (num === '1' || num === '0') {
            resultInput.value = binarValue
        } else {
           return
        }
    })
})