const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    yearTitle = clockContainer.querySelector("h2");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    yearTitle.innerText = `Today : ${year}-${
        month < 10 ? `0${month}` : month
        }-${day < 10 ? `0${day}` : day}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    getYear();
}

init();
