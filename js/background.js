// const images = [
//     "fog.jpg",
//     "forest.jpeg",
//     "mountains.jpeg"
// ];
// const body = document.querySelector('body');

// bgImg.classList.add("bgImg")

// document.body.appendChild(bgImg);
const images = [
    "fog.jpg",
    "forest.jpeg",
    "mountains.jpeg"
];
const body = document.querySelector('body');

const IMG_NUMBER = images.length;

const chosenImg = images[Math.floor(Math.random()*images.length)];

function chaPho(IMG_NUMBER){
    const image = new Image();
    image.src = `img/${chosenImg}`;
    image.classList.add('bgImg');
    body.appendChild(image);
}

console.log(chosenImg)

function inti(){
    chaPho(Math.floor(Math.random()*images.length));
}
inti();

