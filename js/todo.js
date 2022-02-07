const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const CHECKED = "checked";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    let li = event.target.parentElement.parentElement.parentElement;
    
    if (li.id === "")
    {
        li = li.parentElement;
    }
    
    /*console.log(li.id);*/
   
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkToDo(event){
    const checkBox = event.target;
    const li = checkBox.parentElement.parentElement.parentElement;
    
    const target = toDos.find(toDo => toDo.id === parseInt(li.id));
    
    target.check = !target.check;
    paintCheck(checkBox, target.check);

    saveToDos();
}

function paintCheck(checkBox, isChecked){
    if (isChecked == false){
        checkBox.className = "far fa-square";
        checkBox.parentElement.parentElement.classList.remove(CHECKED);
    }
    else{
        checkBox.className = "far fa-check-square";
        checkBox.parentElement.parentElement.classList.add(CHECKED);
    }
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const todoComponent = document.createElement("div");
    todoComponent.className = 'todo-component';

    const todoCheckBox = document.createElement("div");
    todoCheckBox.className = 'todo-checkBox';
    const todoContents = document.createElement("div");
    todoContents.className = 'todo-contents';
    todoContents.innerText = newToDoObj.text;

    const checkBox = document.createElement("i");

    checkBox.addEventListener("click", checkToDo);

    todoCheckBox.appendChild(checkBox);

    /*const span = document.createElement("span");
    span.innerText = newToDoObj.text;*/
    const button = document.createElement("button");    
    button.addEventListener("click", deleteToDo);

    const trashIcon = document.createElement("i");
    trashIcon.className = 'fas fa-trash';


    button.appendChild(trashIcon);

    /* todoContents.appendChild(span);*/
    todoContents.appendChild(button);

    todoComponent.appendChild(todoCheckBox);
    todoComponent.appendChild(todoContents);
    
    li.appendChild(todoComponent);
    toDoList.appendChild(li);
    
    paintCheck(checkBox, newToDoObj.check);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value ="";
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
        check: false,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};

