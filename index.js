const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    //toggle 이란? 
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();