// // let inputElement = document.createElement('input');
// // inputElement.type = "checkbox";
// // inputElement.id = "myCheckbox";
// // document.body.appendChild(inputElement);

// // let labelElement = document.createElement('label');
// // labelElement.setAttribute("for", "myCheckbox");
// // labelElement.textContent = "Click here";
// // document.body.appendChild(labelElement);





// let todoItemContainer = document.getElementById("todoItemsContainer");
// let addtodoButton = document.getElementById("addTodoButton");
// let saveTodoButton = document.getElementById("saveTodoButton");
// let todosCount = todoList.length;


// function getTodoListFromLocalStorage(){
//     let stringfiedTodoList = localStorage.getItem("TodoList");
//     let parsedTOdoList = JSON.parse(stringfiedTodoList);
//     if(parsedTOdoList === null){
//         return [];
//     }
//     else{
//         return parsedTOdoList;
//     }
// }
 
// let todoList = getTodoListFromLocalStorage();
// function onAddTodo(){
//     let userInputElement = document.getElementById("todoUserInput");
//     let userInputValue = userInputElement.value;
//     if (userInputValue === ""){
//         alert("Enter Valid Text");
//         return; 
//     }
//     else{
        
//     }

//     todosCount = todosCount + 1;
//     let newTodo = {
//         text: userInputValue,
//         unoqueNo : todosCount
//     };
//     createAndAppendTodo(newTodo);
//     userInputElement.value ="";
// }
// addtodoButton.onclick = function(){
//     onAddTodo();
// }






// function createAndAppendTodo(todo) {

//     let todoId = "todo" + todo.uniqueNo;
//     let checkboxId = "checkbox" + todo.uniqueNo;
//     let labelId = "label" + todo.uniqueNo;
//     let todoElement = document.createElement("li");
//     todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
//     todoElement.id = todoId;
//     todoItemContainer.appendChild(todoElement);

//     let inputElement = document.createElement("input");
//     inputElement.type = "checkbox";
//     inputElement.id = checkboxId;
//     inputElement.onclick = function () {
//         onTodoStatusChange(checkboxId, labelId);
//     }
//     inputElement.classList.add("checkbox-input");
//     todoElement.appendChild(inputElement);
 
//     let labelContainer = document.createElement("div");
//     labelContainer.classList.add("label-container", "d-flex", "flex-row");
//     todoElement.appendChild(labelContainer);

 

//     let labelElement = document.createElement("label");
//     labelElement.setAttribute("for", checkboxId);
//     labelElement.id = labelId;
//     labelElement.classList.add("checkbox-label");
//     labelElement.textContent = todo.text;
//     labelContainer.appendChild(labelElement);
 

//     let deleteIconContainer = document.createElement("div");
//     deleteIconContainer.classList.add("delete-icon-container");
//     labelContainer.appendChild(deleteIconContainer);

//     let deleteIcon = document.createElement("i")
//     deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
//     deleteIcon.onclick = function(){
//         ondeleteTodo(todoId);
//     }
//     deleteIconContainer.appendChild(deleteIcon);

// }


// for (let eachItem of todoList){
//     createAndAppendTodo(eachItem); 
// }

// function onTodoStatusChange(checkedId, labelId) {
//     let checkboxElement = document.getElementById(checkedId);

//     let labelElement = document.getElementById(labelId);
//     labelElement.classList.toggle("checked");
// }
 

// function ondeleteTodo(todoId){
//     let todoElement = document.getElementById(todoId);
//     todoItemContainer.removeChild(todoElement);
// }


// saveTodoButton.onclick = function() {
//     localStorage.setItem("todoList",JSON.stringify(todoList)); 
// };














// // --------------------To Store localStorage--------------------



// // localStorage.setItem("name","Pavan");
// // localStorage.setItem("Lover","Gayathri");
// // localStorage.setItem("status","fail")


// // let name = localStorage.getItem("name");
// // let Lover = localStorage.getItem("Lover");
// // let status = localStorage.getItem("status");

// // console.log(name);
// // console.log(Lover);
// // console.log(status);




// // let saveButton = document.getElementById("saveButton");
// // let textAreaElement = document.getElementById("message");
// // saveButton.onclick = function(){
// //     let userCreatedText = textAreaElement.value;
// //     localStorage.setItem("userCreatedText", userCreatedText);

// // };

// // let storedUserInputValue = localStorage.getItem("userCreatedText");
// // if (storedUserInputValue === null){
// //     textAreaElement.value = "";
// // }
// // else{
// //     textAreaElement.value = storedUserInputValue;
// // }



let todoItemContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

// Get todo list from local storage
function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

// Add new todo item
function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value.trim();

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount += 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

// Create and append todo item
function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.checked = todo.isChecked;
    inputElement.onclick = function () {
        onTodoStatusChange(checkboxId, labelId,todoId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true){
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function () {
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

// Handle checkbox toggle
function onTodoStatusChange(checkedId, labelId,todoId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
    let todoObjectIndex = todoList.findIndex(function(eachTodo){
        let eachTOdoId = "todo" + eachTodo.uniqueNo;
        if (eachTOdoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    let todoObject = todoList[todoObjectIndex];
    if (todoObject.isChecked === true){
        todoObject.isChecked = false;
    }
    else{
        todoObject.isChecked = true;
    }
}

// Handle delete
function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemContainer.removeChild(todoElement);

    // Remove from the todoList array
    // let index = todoList.findIndex(todo => "todo" + todo.uniqueNo === todoId);
    // if (index !== -1) {
    //     todoList.splice(index, 1);
    // }

    let deleteElementIndex = todoList.findIndex(function(eachTodo){
        let eachTOdoId = "todo" + eachTodo.uniqueNo;
        if (eachTOdoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    todoList.splice(deleteElementIndex,1);
}

// Save to localStorage
saveTodoButton.onclick = function () {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Add button click
addTodoButton.onclick = function () {
    onAddTodo();
};

// Render existing todos on page load
for (let eachItem of todoList) {
    createAndAppendTodo(eachItem);
}
 

// -----------------To add and delete in a array elements-------------------------
// let myarray = [8,"six",5,8 ,5];
// // let deleteItems = myarray.splice(2,3);
// // console.log(myarray);
// // console.log(deleteItems);
// let itemIndex = myarray.findIndex(function(eachItem){
//     if (eachItem ===5){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(itemIndex);


// -------------------------------findIndex() To find index number in an array-------------

// let custmarData = [
//     {
//         name: "pavna",
//         id : 101
//     },
//     {
//         name: "Tarun",
//         id : 102
//     },
//     {
//         name :"Bhanu",
//         id : 103
//     }
// ];

// let itemIndex = custmarData.findIndex(function(eachItem){
//        if(eachItem.id === 105){
//             return true;
//        }
//        else{
//         return false;
//        }
// });
// console.log(itemIndex);


// ----------------removeIndex()----------------