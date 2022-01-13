const h1 = document.querySelectorAll(".hellolive:first-child h1");
const grab3 = document.querySelector("#grab3 h1");

console.dir(h1);
h1[0].style.color = "green";
console.dir(grab3);
grab3.style.color = "blue";

function handleTiteClick(){
    h1[1].style.color = "wheat";
}

function handleMouseEnter(){
    h1[1].style.color = "skyblue";
}

function handleMouseLeave(){
    h1[1].style.color = "blue";
}
h1[1].onclick = handleTiteClick;
h1[1].onmouseenter = handleMouseEnter;
h1[1].addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no wifi");
}

function handleWindowOnline(){
    alert("All right");
}

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);