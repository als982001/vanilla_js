const images = [
    "0.png",
    "1.png",
    "2.png"
];

// onst chosenImage = images[Math.floor(Math.random()*images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

const imgForBackground = "img/"+images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url(${imgForBackground})`;