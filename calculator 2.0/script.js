let num1 = '';
let num2 = '';
let sign = '';
let result = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

const out = document.querySelector('.calc_screen p');

function clearAll () {
    num1 = '';
    num2 = '';
    sign = '';
    result = false;
    out.textContent = 0;
} 

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if(num2 === '' && sign === ''){
        num1 += key;
        out.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && result){
            num2 = key;
            finish = false;
            out.textContent = num1;
        }
        else {
            num2 += key;
            out.textContent = num2;
        }
        return;
    } 

    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

if (key === '=') {
    if (num2 === '') {
        num2 = num1;
    }
    switch(sign) {
        case '+':
            num1 = (+num1) + (+num2);
            break;
        case '-':
            num1 = num1 - num2;
            break;
        case '*':
            num1 = num1 * num2;
            break;
        case '/':
            num1 = num1 / num2;
            break;
    } 
    result = true;
    out.textContent = num1;  
}
}

