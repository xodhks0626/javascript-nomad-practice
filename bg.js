const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    //prepend? 콘텐츠를 선택한 요소 내부의 시작 부분에 삽입
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();