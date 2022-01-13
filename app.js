const title = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");

console.dir(title);
title[0].style.color = "green";
console.dir(grab3);
grab3.style.color = "blue";

function handleTiteClick(){
    title[1].style.color = "wheat";
}

function handleMouseEnter(){
    title[1].style.color = "skyblue";
}

function handleMouseLeave(){
    title[1].style.color = "blue";
}

title[1].addEventListener("click", handleTiteClick);
title[1].addEventListener("mouseenter", handleMouseEnter);
title[1].addEventListener("mouseleave", handleMouseLeave);