const title = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");

console.dir(title);
title[0].style.color = "green";
console.dir(grab3);
grab3.style.color = "blue";

function handleTiteClick(){
    title[1].style.color = "wheat";
}

title[1].addEventListener("click", handleTiteClick);