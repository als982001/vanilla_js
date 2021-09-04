const API_KEY = "6bfaa8f527f9be78f5e0e6a12855bcd5";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather .city-name");
        const weather = document.querySelector("#weather .city-weather");
        const temperature = document.querySelector("#weather .city-temperature");
        city.innerText = `Location: ${data.name}`;
        weather.innerText = `weather: ${data.weather[0].main}`;  
        temperature.innerText = `temperature: ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);