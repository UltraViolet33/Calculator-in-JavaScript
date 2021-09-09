/**
 * Calculator Javascript file
 * By Ulysse Valdenaire
 */

//Gobal variables
let buttonValue;
let screenResult = document.getElementById('result');
let equalButton = document.getElementById('equal');
let buttons = document.getElementsByClassName('button');

//funtion who returns the value of the clicked button
function getValue(value){
    buttonValue = value;  
    screenResult.textContent =screenResult.textContent + buttonValue;   
}

/**
 *Function for the DEL button
 who deletes the value on the screen of the last button
 clicked 
 */
 function deleteElement(){
     str = screenResult.textContent
     screenResult.textContent = str.substring(0, screenResult.textContent.length - 1);   
 }

 /**
  * Funtion for the reset button who reset the screen
  */ 
 function reset(){
     screenResult.textContent ="";
 }

/**
 * Function who makes the operations and displays the results
 */
equalButton.addEventListener('click', function(){
    let strOperation = screenResult.textContent;
    if(strOperation.includes('x')){
        strOperation =  strOperation.replace('x', '*');
        console.log(strOperation);
    }
      result = eval(strOperation);
     screenResult.textContent = result;  
})















