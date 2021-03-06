//API는 Application Programming Interface로 다른 서버로부터 
//손쉽게 데이터를 가져오는 수단이다.
//따라서 API는 특정 웹사이트로부터 데이터를 얻거나
//컴퓨터(Machines)끼리 소통하기 위해 고안된 것이다.

//network 패널은 우리가 request한 내용을 보여주는 것
const weather = document.querySelector(".js-weather");

const API_KEY = "e7cd973cb34b1f5dd95d9ea12147030c";

const COORDS = 'coords';

function getWeather(lat, lon){
    //데이터를 얻는 방법
    //fetch() 안에는 가져올 데이터가 들어감, 앞에 https:// 넣어준다.
    // ``(백틱) 사용.
    //API 제공자가 APP_KEY를 통해 사용자가 너무 많은 데이터를 요구하지 않는지 확인.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
    //데이터를 가져왔을 때 호출, 
    //그렇지 않으면 fetch가 완료되는 것을 기다리지 않는다.
    return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ in ${place}`;
    });
}

function saveCoords(coordsObj){ //좌표 저장
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){ //좌표값이 없을 때만 실행
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //객체에 변수의 이름과 객체의 key 이름을 같게 저장할 때 
        //아래와 같이 한다.
        latitude,
        longitude        
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't access geo location.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords == null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();