const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button'); 
const clearButton = document.getElementById('clear');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;
let firstValuePosition = 0;

function setNumberValue(number) {
    console.log(number);
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

function callOperator(operator) {
    console.log(operator);
    const displayValue = calculatorDisplay.textContent;
    const current = displayValue.length;
    if(operator === '='){
        
        result();
        return;
    }
    if (displayValue === '') {
        return;
    }
    if (['+', '-', '*', '/', 'x', '÷'].includes(displayValue[current - 1])) {
        operatorValue = operator;
        if(operator === '*'){
            
            operator = 'x';
            calculatorDisplay.textContent = displayValue + operator;
        }
        else if(operator === '/'){
            
            operator = '÷';
            calculatorDisplay.textContent = displayValue + operator;
        }
        else{
        
        calculatorDisplay.textContent = displayValue.slice(0, current - 1) + operator;
    }
    }
    else{
        operatorValue = operator;
        if(operator === '*'){   
            operator = 'x';
            calculatorDisplay.textContent = displayValue + operator;
        }
        else if(operator === '/'){
            
            operator = '÷';
            calculatorDisplay.textContent = displayValue + operator;
        }
        else{
        
            calculatorDisplay.textContent = displayValue + operator;
        }
    }
    firstValue = displayValue.slice(0,[current]);
    firstValuePosition = current;
    console.log(firstValue);
    awaitingNextValue = true;
    
}

function addDecimal(dot) {
    console.log(dot);
    const displayValue = calculatorDisplay.textContent;
    if (awaitingNextValue === false){
        calculatorDisplay.textContent = displayValue.includes('.') ? displayValue : displayValue + dot;
    }
    else{
        const vfirstValuePosition = firstValuePosition+1;
        
        const secondValue = displayValue.slice(vfirstValuePosition);
        if (secondValue.includes('.')) {
            return;
        }
        else{
            calculatorDisplay.textContent = displayValue + dot;
            
        }
        calculatorDisplay.textContent = displayValue + dot;
        console.log("display",displayValue.slice(firstValuePosition));
    }
}

function clearDisplay() {
    calculatorDisplay.textContent = '';
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    firstValuePosition = 0;
}

function result() {
    console.log("operatorValue",operatorValue);
    if (operatorValue === '') {
        return;
    }
    else if (operatorValue === '+') {
        calculatorDisplay.textContent = parseFloat(firstValue) + parseFloat(calculatorDisplay.textContent.slice(firstValue.length + 1));
        console.log("callplus");
    }
    else if (operatorValue === '-') {
        calculatorDisplay.textContent = parseFloat(firstValue) - parseFloat(calculatorDisplay.textContent.slice(firstValue.length + 1));
        console.log("callminus");
    }
    else if (operatorValue === '*') {
        calculatorDisplay.textContent = parseFloat(firstValue) * parseFloat(calculatorDisplay.textContent.slice(firstValue.length + 1));
        console.log("callmultiply");
    }
    else if (operatorValue === '/') {
        calculatorDisplay.textContent = parseFloat(firstValue) / parseFloat(calculatorDisplay.textContent.slice(firstValue.length + 1));
        console.log("calldivide");
    }
}
      

inputButtons.forEach((input) => {
   
   if (input.classList.length === 0) {
       input.addEventListener('click', () => setNumberValue(input.value));
   }
   else if (input.classList.contains('operator')) {
       input.addEventListener('click', () => callOperator(input.value));
       
   }
   else if (input.classList.contains('decimal')) {
       input.addEventListener('click', () => addDecimal(input.value));
   }
   else if (input.classList.contains('clear')) {
       input.addEventListener('click', () => clearDisplay());
   }
   });

   
