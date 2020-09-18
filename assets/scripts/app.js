const defauleValue = 0;
let currentResult = defauleValue;
let addLogEntries = [];
let substractLogEntries = [];
let multiplyLogEntries = [];
let divideLogEntries = [];




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
    currentResult += enteredNumber ;
    createAndWriteOutput('+', initialResult , enteredNumber);
    addLogEntries.push(enteredNumber);
    console.log("AddLogEntries", addLogEntries);

} 

function substract (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult -=  enteredNumber ;
    createAndWriteOutput('-', initialResult , enteredNumber);
    substractLogEntries.push(enteredNumber);
    console.log("SubstractLogEntries", substractLogEntries);

}

function multiply () {

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult  *= enteredNumber ;
    createAndWriteOutput('*', initialResult , enteredNumber);
    multiplyLogEntries.push(enteredNumber);
    console.log("MultiplyLogEntries" ,multiplyLogEntries);


}


function divide (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult  /= enteredNumber ;
    createAndWriteOutput('/', initialResult , enteredNumber);
    divideLogEntries.push(enteredNumber);
    console.log("DivideLogEntries", divideLogEntries);
}


function clear (){

    currentResult = 0;
    const calDescription = 0;
    userInput.value='';
    outputResults(currentResult, calDescription);
    addLogEntries.splice(0, addLogEntries.length);
    substractLogEntries.splice(0, substractLogEntries.length);
    multiplyLogEntries.splice(0, multiplyLogEntries.length);
    divideLogEntries.splice(0, divideLogEntries.length);
    console.clear();

}

addBtn.addEventListener("click" , add);
substractBtn.addEventListener("click" , substract);
multiplyBtn.addEventListener("click" , multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear)
