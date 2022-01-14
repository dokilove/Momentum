const h1 = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");


function handleTiteClick(){
    const clickedClass = "clicked";
    if (h1[1].className === clickedClass){
        h1[1].className = "";
    } else{
        h1[1].className = clickedClass;
    }    
}

h1[1].addEventListener("click", handleTiteClick);
