const navItems= document.getElementById("navItem1")

const searchBtn = document.getElementById("searchBtn")



navItem.addEventListener("mouseover", ()=> event.target.style.color = "black");
navItem.addEventListener("mouseout", ()=> event.target.style.color = "rgba(0, 0, 0, 0.8)");
navItem.addEventListener("click", ()=> {
    navItem.style.border = "none"
    event.target.parentElement.style.border = "1px solid black"
});

searchBtn.addEventListener("click", ()=> console.log(searchBox.value));

let x = "John Doe"
//x = prompt("Hey user enter your name: ", "John Doe")

const span = document.querySelector("#usrDetails")
span.innerHTML= "<p>Welcome "+ x +"</p>"



