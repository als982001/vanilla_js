const clock = document.querySelector("h2#clock");
const day = document.querySelector(".today-day");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const today = date.getDate();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    day.innerText = days[today];
}

getClock();
setInterval(getClock, 1000);