const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const APY_KEY ="58e0f74a42da866b5f3ae783d2d5ba3d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${APY_KEY}&units=metric`;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}
function onGeoErro(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErro);