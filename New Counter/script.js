let counterElement = document.getElementById("counterValue");

function incrementBtn() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
}

 
function decrementBtn() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
}

function resetBtn() {
    updatedCounterValue = 0 ;
    counterElement.textContent = updatedCounterValue ;
    counterElement.style.color = "black";
}