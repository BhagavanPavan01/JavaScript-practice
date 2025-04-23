// // function displayGreeting(displayName){
// //     console.log("hello");
// //     displayName();
// //     console.log("Good Morning");
// // }

// // displayGreeting(function(){
// //     console.log("Pavan");
// // });


// function displayGreeting(displayName){
//     console.log("Hello");
//     displayName();
//     console.log("Good Morning");
// }

// function displayPavan(){
//     console.log("Pavan");
// }

// displayGreeting(displayPavan);


// let counter = setInterval(function(){
//     console.log(counter);
//     counter = counter + 1;
// }
// ,1000);


// let setIntervalBtn = document.getElementById("setIntervalBtn");
// let clearIntervalBtn = document.getElementById("clearIntervalBtn");

// let uniqueId = null;
// setIntervalBtn.onclick = function(){
//     let counter = 0;
//     uniqueId = setInterval(function(){
//         console.log(counter);
//         counter = counter + 1;
//     },1000);
// }

// clearIntervalBtn.onclick = function(){
//     clearInterval(uniqueId);
// }


// let greetBtnEl = document.getElementById("greetBtn");
// greetBtnEl.addEventListener('click',function(){
//     console.log("Hello Pavan");
// });


// let inpputElement = document.createElement("input");
// function printkeyDown(event){
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.key);  
    
// }

// inpputElement.addEventListener('keydown',printkeyDown);
// inpputElement.addEventListener('keyup',printkeyDown);
// document.body.appendChild(inpputElement);



// ----------------------------Timer Bamb ------------------------

// let timerEl = document.getElementById("timer");
// let defuserEl = document.getElementById("defuser");
// let countdown = 10;
// let intervalId = setInterval(function(){
//     countdown = countdown - 1;
//     timerEl.textContent = countdown;
//     if (countdown === 0){
//         timerEl.textContent = "BOOM!";
//         clearInterval(intervalId);
//     }
// },1000);

// defuserEl.addEventListener("keydown", function(event){
//     let bombDefuserText = defuserEl.value; 
//     if(event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0){
//         timerEl.textContent = "Congratulations! Bomb defused.";
//         clearInterval(intervalId);
//     }
// });





// let url = "https://gorest.co.in/public-api/users"

// fetch(url,options) 

// .then(function(responce){
//     return responce.text();
// })
// .then(function(data){
//     let parsedData = JSON.parse(data);
//     console.log(parsedData);
// });

// let data = {
//     name: "Rahul Attuluri ", 
    // gender: "male",
    // email: "rahul123415426840220220@gmail.com",
    // status: "Active",
// };

// let options = {
//     method: "GET", 
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': 'Bearer 4453f57d262f29cbb725282e7bbae168458c1eb7335cf9965d52739529133681',
//     },
//     // body: JSON.stringify(data),
// };

// let url = "https://gorest.co.in/public-api/users/7845187";

// fetch(url, options)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(jsonData) {
//         console.log(jsonData);
//     })
    // .catch(function(error) {
    //     console.error("Error:", error);
    // });









// -----------------Wikipedia search ------------------



let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result){

    let {title,link,description} = result;

    // 1  Div container == result item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    // 2 anchor title -- result title

    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";

    resultItemEl.appendChild(resultTitleEl);

    // 3 Title break

    let titlebreakEl = document.createElement("br");
    resultItemEl.appendChild(titlebreakEl);

    // 4 anchor URL = result url

    let urlEL = document.createElement("a");
    urlEL.classList.add("result-url");
    urlEL.textContent = link;
    urlEL.target = "_blank";
    urlEL.href = link;

    resultItemEl.appendChild(urlEL);
    // 5 line break

    let linebreakEl = document.createElement("br");
    resultItemEl.appendChild(linebreakEl);
    // 6 paragraph description = line description.ca

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("result-description");
    descriptionEl.textContent = description;

    resultItemEl.appendChild(descriptionEl);



}
function displayResults(searchResults){
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults){
        createAndAppendSearchResult(result);
    }
    
}

function searchWikipedia(event){
    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
        .then(function(responce){
            return responce.json();
        })
        .then(function(jsonData){
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}
searchInputEl.addEventListener("keydown", searchWikipedia);






