// let myArray = [10,15,"pavan","gayathri",143];
// myArray[4] = "Lovers";
// myArray.push("Deeplovers");
// myArray.pop(); 
// console.log(myArray);
// console.log(myArray[3]);
// console.log(myArray.length);


let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";   
let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);  

let btnElement = document.createElement('button');
let removeStyles = document.createElement('button');
btnElement.textContent = "Change Headding";
btnElement.onclick = function(){
     h1Element.textContent = "4.0 Technologies";
     h1Element.classList.add("heading")
}
containerElement.appendChild(btnElement);
 
removeStyles.textContent = "Remove Styles";
removeStyles.onclick = function(){
     
     h1Element.classList.remove("heading")
}

document.getElementById('myContainer').appendChild(removeStyles);



 
 