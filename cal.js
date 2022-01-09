let result = document.getElementById('printf');
function append(value) {
    result.value += value
}
function cal() {
    result.value = eval(result.value);
}
function dele() {
    result.value = "";
}


// -----------------------------------------------------------
// let buttons = document.getElementsByClassName('button');
// for(let i = 0; i< buttons;i++){
//     let button = buttons[i];
//     button.addEventListener('click',function onClick()
//     {
//        result.value += button.innerHTML;
//     })
// }