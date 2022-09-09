const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];//<= database에서 todo 넣는곳

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) =>toDo.id!=parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="x";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handletodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);//<= database에다가 todo 넣는곳
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener("submit",handletodoSubmit);

function sayhello(item){
    console.log("this is the turn of",item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo)
}

