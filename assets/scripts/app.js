const defauleValue = 0;
let currentResult = defauleValue;
let LogEntries = [];




function getInputNumber (){

   return parseInt(userInput.value);

}


function createAndWriteOutput ( operator , resultBefore , calcNumber){
    
    const calDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResults(currentResult, calDescription);

}

function logEntry (operation, prevResult, number , result){

    const logentry = {

        operation : operation,
        prevResult : prevResult,
        number : number,
        result : result
    }
    LogEntries.push(logentry);
    console.log(LogEntries);
}





function add (){
 
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber ;
    createAndWriteOutput('+', initialResult , enteredNumber);
    logEntry('ADD', initialResult, enteredNumber, currentResult);

    

} 

function substract (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult -=  enteredNumber ;
    createAndWriteOutput('-', initialResult , enteredNumber);
    logEntry('SUBSTRACT', initialResult, enteredNumber, currentResult);
    
   

}

function multiply () {

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult  *= enteredNumber ;
    createAndWriteOutput('*', initialResult , enteredNumber);
    logEntry('MULTIPLY', initialResult, enteredNumber, currentResult);
   
    


}


function divide (){

    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult  /= enteredNumber ;
    createAndWriteOutput('/', initialResult , enteredNumber);
    logEntry('DIVIDE', initialResult, enteredNumber, currentResult);
   
}


function clear (){

    currentResult = 0;
    const calDescription = 0;
    userInput.value='';
    outputResults(currentResult, calDescription);
    LogEntries.splice(0, LogEntries.length);
    console.clear();

}

addBtn.addEventListener("click" , add);
substractBtn.addEventListener("click" , substract);
multiplyBtn.addEventListener("click" , multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear)
