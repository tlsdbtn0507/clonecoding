const loginForm = document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();//preventDefault은 기본행동을 막는 기능
                        //기본 행동이란 서브밋을 실행하면 무조건 f5는것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername==null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}