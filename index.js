const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    //toggle 이란? 하나의 설정 값에서 다른 설정 값으로 변경하는 것
    //처음 누르면 보였다가 한번 더 누르면 안보이게 하는 것처럼
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();