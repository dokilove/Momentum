const h1 = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");

console.dir(h1);
h1[0].style.color = "green";
console.dir(grab3);
grab3.style.color = "blue";

function handleTiteClick(){
    const currentColor = h1[1].style.color;
    let newColor;
    if (currentColor === "blue"){
        newColor = "tomato"
    }else{
        newColor = "blue";
    }
    h1[1].style.color = newColor;
}

h1[1].addEventListener("click", handleTiteClick);
