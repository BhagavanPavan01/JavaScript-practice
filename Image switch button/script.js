
function manipulateStyles(){
    document.getElementById("headingElement").textContent = "Bhagavan pavan";
    document.getElementById("headingElement").style.color = "red"; 
}


function switchOn(){
    document.getElementById("offlight").src = "https://i.pinimg.com/736x/31/8e/52/318e52abb1d1c010b025ec9087863cb5.jpg";
    document.getElementById("offimage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WjTh5E2GzviinUTCZ10aOhf2U65S912W0uhuEhpDeSi4rEAcNj3yFxiwKf1YIWOk5hw&usqp=CAU";
    document.getElementById("switchstatus").textContent = "Switched ON";
    document.getElementById("switchONcolor").style.backgroundColor = "gray";
    document.getElementById("switchOffcolor").style.backgroundColor = "green";
    document.getElementById("switchOffcolor").style.color = "black";
}

function switchOff(){
    document.getElementById("offlight").src = "https://media.istockphoto.com/id/523616495/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=pjv-wWMBRNvnE5G68k5CWe6id34gkvxkMleizCj1AYM=";
    document.getElementById("offimage").src = "https://www.shutterstock.com/image-photo/view-darkness-muzzle-cat-on-600nw-84795544.jpg";
    document.getElementById("switchstatus").textContent = "Switched OFF"; 
    document.getElementById("switchONcolor").style.backgroundColor = "red";
    document.getElementById("switchOffcolor").style.backgroundColor = "gray";
    document.getElementById("switchONcolor").style.color = "black";
    
} 