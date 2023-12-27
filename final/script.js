const apiKey = "6b4f1f3365b6d74a04c98b7954259185";
const descriptionField = document.querySelector(".description");
const tempField = document.querySelector(".temp");
const postButton = document.querySelector(".button");
const input = document.querySelector(".city");

function kelvinsToCelsius(k){
    return k - 273.15;
}

async function getCoordinates(city){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);
    let answer = await response.json();
    let lat = answer[0].lat;
    let lon = answer[0].lon;
    return [lat, lon];
}

async function getWeather(city){
    let coordinates = await getCoordinates(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${apiKey}`);
    const answer = await response.json();
    descriptionField.textContent = answer.weather[0].main;
    tempField.textContent = `Температура   ${Math.round(kelvinsToCelsius(answer.main.temp))} C˚`;
    descriptionField.style.opacity = `1`;
    tempField.style.opacity = `1`;
}

postButton.addEventListener("click", function(){
    getWeather(input.value);
})

