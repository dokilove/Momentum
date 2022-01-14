const h1 = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");


function handleTiteClick(){
    h1[1].classList.toggle("clicked");
}

h1[1].addEventListener("click", handleTiteClick);
