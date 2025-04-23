 let bgContainerEl = document.createElement("div");
 bgContainerEl.classList.add("bg-container");
 document.body.appendChild(bgContainerEl);

 let headingEl = document.createElement("h1");
 headingEl.classList.add("h1");
 headingEl.textContent = "Grocery List";
 bgContainerEl.appendChild(headingEl);

 let listContainerEl = document.createElement("ul");
 listContainerEl.classList.add("list-container");
 bgContainerEl.appendChild(listContainerEl);

 let groceryItems = ["Milk","Peanut Butter","Choco Chips","Tomato Sauce","Cup Cakes","Noodles",];
 for (let groceryItem of groceryItems){
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);
 }
//  let listItemEl = document.createElement("li");
//  listItemEl.textContent = "milk";
//  listContainerEl.appendChild(listItemEl);

 let inputElement = document.createElement("input");
 inputElement.id = "Myinput";
 inputElement.type = "checkbox";
 bgContainerEl.appendChild(inputElement)

 let labelElement = document.createElement("label");
 labelElement.textContent = "Having Door Delivary";
 labelElement.classList.add("delivery-text");
 labelElement.setAttribute("for","Myinput");
 bgContainerEl.appendChild(labelElement);

 let breakEl = document.createElement("br")
 bgContainerEl.appendChild(breakEl);

 let buttonEl = document.createElement("button");
 buttonEl.classList.add("btn","btn-primary","button");
 buttonEl.textContent = "Procees to Pay";
 bgContainerEl.appendChild(buttonEl);
