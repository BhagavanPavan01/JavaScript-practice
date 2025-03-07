let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container","d-flex","flex-row");
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id =  "checkboxInput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("lable-container","d-flex","flex-row");
todoElement.appendChild(labelContainer);

