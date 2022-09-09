let a = 10;
let b =2;

const myName = "yusu"//const는 수정불가 let은 가능 나중에 따로 쓰지않아댐
//var역시 언제든 수정 가능 하지만 그게 안좋을 수도 잇어서 const권장
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+myName);
// myName = "ho";

// console.log("you name is"+myName);//100프로 오류 const라

const amIFat = null;
let something ;
console.log(something, amIFat);
//null은 안에 아무것도 없다
//undefined는 정의가 되지 않음
//true는 켜져잇음 false는 꺼져잇음 

// const mon ="mon";
// const tue = "tue";
// const wed = "wed";
// const thu =  "thu";
// const fri = "fri";
// const sat =  "sat";
// const sun = "sun";


const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];


console.log(daysOfweek[4]);

//push가 추가하기
daysOfweek.push("sun");
console.log(daysOfweek);


// const apple= "apple";
// const potato = "potato";

const toBuy =["potato","tomato","pizza"]
toBuy.push("kimbap");

console.log(toBuy);

//function
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson +"," + " I'm "+age+"years old");
}

sayHello("shin",26)
sayHello("nico",21)
sayHello("dal",10)

console.log("lalalalalala");

function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}

function divide(a,b){
    console.log(a/b)
}

plus(8,60)
divide(60,4)
//NaN = not a number



const player1 ={
    name:"nico",
    sayHello:function(otherpsersonsname){
        console.log("hello! "+otherpsersonsname + " nice to meet you")
    },
};

player1.sayHello("lynn");
player1.sayHello("shin");

function pus (a,b){
    console.log(a+b);
}

pus(5,5);
////////////////////////////////////////////
//object

const player = {
    name:"shin",
    score:10,
    fat:true,

};
console.log(player);
console.log(player["name"]);
console.log(player.name)

//const는 수정이 불가능 하지만 object의 내용은 수정 가능

console.log(player);
player.fat = false;
console.log(player);// true지만 위에서 바뀌게 적용

//오브젝트에 추가
console.log(player);
player.lastName = "potato";
player.score = 100;
console.log(player);

player.name = "bic"
console.log(player);

player.sexy = "soon";
console.log(player);

//
// function minusFive(a){
//     console.log(a-5);
// }
// minusFive(15,10,13,45,68,89,15);

//
const calculator ={
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    power:function(a,b){
        return a**b;
    },
    percent:function(a,b){
        return a%b;
    }
};
const plusResult = calculator.add(2,3);
const minusResult =  calculator.minus(plusResult,10)
const divideResult =  calculator.divide(10,minusResult)
const powerResult = calculator.power(divideResult,plusResult)
const percentResult = calculator.percent(plusResult,minusResult)
// const year = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner +2;//return은 calculateKrAge(year)을 대신해줌
// }
// const krAge = calculateKrAge(year);
// console.log(krAge);

const age = parseInt(prompt("몇살?"));

if(isNaN(age)||age<0){
    console.log("정수를 쓰시오")
}else if(age<19){
    console.log("가라")
}else if(age>=19&&age<=50){
    console.log("맛잇게드세요")
}else if(age>50&&age<=80){
    console.log("건강을 생각하세요")
}else if (age===100){
    console.log("wow대단하시네요")
}else if(age>80){
    console.log("맘대로 하세요")
}
//prompt는 사용자에게 메세지를 보내서 값을 받음
//하지만 아주 구닥다리라 사용 x
//||은 or 둘중 하나만 , &&은 and 둘다 확인
// true||true===true
// false||true===true
// true||false===true
// false||false===false

// true&&true===true
// false&&true===false
// true&&false===false
// false&&false===false
// true||false||false===true
//

//클릭으로 색깔 계속 변하게 하기
const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    const currentcolor = h1.style.color;
    let newColor;
    if(currentcolor=="blue"){
        newColor = "tomato";
    } else{
        newColor="blue";
    }
    h1.style.color = newColor;
}


h1.addEventListener("click",handleTitleClick);


//    if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//    }else{
//     h1.classList.add(clickedClass);
//    } 이 다섯줄이 h1.classList.toggle("clicked") 하나로 퉁침


// body{
//     background-color: beige;
// }
// h1{
//     color:blue;
//     transition:color.1s ease-in-out
// }
// .clicked{
//     color:tomato;
// }
// .sexy-font{
//     font-family: 'Courier New', Courier, monospace;

// } 버튼놀이 색

// const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){
//     h1.classList.toggle("clicked");
// }


// h1.addEventListener("click",handleTitleClick); 버튼놀이 코드


//how to make clock
//const clock = document.querySelector("h2#clock");

// function getClock(){
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2,"0"); padstart: '2자리를 채우기 위해 0을 넣어라'
//     const minutes =  String(date.getMinutes()).padStart(2,"0");
//     const seconds = String(date.getSeconds()).padStart(2,"0");
//     clock.innerText =`${hours}:${minutes}:${seconds}`;
// }
// getClock()
// setInterval(getClock,1000);