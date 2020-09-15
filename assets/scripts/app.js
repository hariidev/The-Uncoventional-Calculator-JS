const defauleValue = 0;
let currentResult = defauleValue;

function getInputNumber (){

   return parseInt(userInput.value);

}


function createAndWriteOutput ( operator , resultBefore , calcNumber){
    
    const calDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResults(currentResult, calDescription);

}

function add (){
 
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber ;
    createAndWriteOutput('+', initialResult , enteredNumber);

} 

function substract (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber ;
    createAndWriteOutput('-', initialResult , enteredNumber);

}

function multiply () {

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber ;
    createAndWriteOutput('*', initialResult , enteredNumber);


}


function divide (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber ;
    createAndWriteOutput('/', initialResult , enteredNumber);
}


function clear (){

    currentResult = 0;
    const calDescription = 0;
    userInput.value='';
    outputResults(currentResult, calDescription);

}

addBtn.addEventListener("click" , add);
substractBtn.addEventListener("click" , substract);
multiplyBtn.addEventListener("click" , multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear)
