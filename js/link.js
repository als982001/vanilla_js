const inputURLForm = document.querySelector(".search-box");
const inputURL = document.querySelector(".search-box input");

function GoToURL(link){
    link.preventDefault();
    location.href = "https://www.google.com/search?q=" + inputURL.value;
    
}

inputURLForm.addEventListener("submit", GoToURL);