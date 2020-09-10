const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const substarctBtn = document.getElementById('btn-substract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculatonOutput = document.getElementById('current-calculations');

function outputResults(result, text) {
    
    currentResultOutput.textContent = result ;
    currentCalculatonOutput.textContent = text;
}
