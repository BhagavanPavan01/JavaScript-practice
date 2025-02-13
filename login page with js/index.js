let inputElenment = document.getElementById("inputElement");
let signinText = document.getElementById("signinText");
function signin(){
    let inputValue = inputElenment.value;
    let verifytext = "Hi " + inputValue + ", Verifying your account.";
    signinText.textContent = verifytext;
}