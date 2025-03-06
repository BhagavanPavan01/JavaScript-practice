let h1Element = document.createElement('h1');
h1Element.textContent = "Bhagavan Pavan";
let containerElement = document.getElementById('myContainer'); 
document.body.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading";
btnElement.onclick = function(){
    h1Element.textContent = "Software Developer";
    h1Element.classList.add("heading");
}
containerElement.appendChild(btnElement);

let removeStyleElement = document.createElement('button');
removeStyleBtnElement.textContent = "Remove Styles";
removeStyleBtnElement.onclick = function(){
    h1Element.classList.remove("heading");
};
document.getElementById('myContainer').appendChild(removeStyleBtnElement);

 let h2Element = document.createElement('h2');
 h2Element.textContent = "pedada gayathri";
 let containerElement = document.getElementById('ourContainer'); 
 containerElement.appendChild(h2Element);