var currentNumberWrapper = document.getElementById('currentNumber');
var inc = document.getElementById('increment').addEventListener("click", increment)
var dec = document.getElementById('decrement').addEventListener("click", decrement)
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red"; 
    } else{
        currentNumberWrapper.style.color = "black"
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red"; 
    } else{
        currentNumberWrapper.style.color = "black"
    }
}