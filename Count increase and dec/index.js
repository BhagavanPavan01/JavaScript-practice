let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue + 1;
    counterElement.textContent = updatedCounterValue;

    let G = 10; // Threshold for color change

    // Corrected Color-Changing Logic
    if (updatedCounterValue > G) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "green";
    }
}

function onDecrement() {
    let previousCounterValue = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue - 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    }
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black"; // Reset color
}
