import "./style.css";
import { weather_data } from "../data";

let default_location = "kathmandu"
let metric = "metric"


// fill present data
function present(content){
    var today = document.querySelector(".today")
    today.innerHTML = content
}

document.addEventListener("DOMContentLoaded", async ()=>{

    let weather= await weather_data(default_location, metric)
    let day = weather.days

    let content = `<div class="weather-card">

    <div class="weather-main">
        <div>
            <p class="weather-date">${day[0].datetime}</p>
            <h1>${day[0].temp}°</h1>
            <p class="weather-condition">${day[0].conditions}</p>
            <p class="weather-description">${day[0].description}</p>
        </div>

        <div class="weather-icon">🌧️</div>
    </div>

    <div class="weather-stats">

        <div class="stat">
            <span>🌡️</span>
            <div>
                <small>High</small>
                <strong>${day[0].tempmax}°C</strong>
            </div>
        </div>

        <div class="stat">
            <span>🌡️</span>
            <div>
                <small>Low</small>
                <strong>${day[0].tempmin}°C</strong>
            </div>
        </div>

        <div class="stat">
            <span>💧</span>
            <div>
                <small>Humidity</small>
                <strong>${day[0].humidity}%</strong>
            </div>
        </div>

        <div class="stat">
            <span>💨</span>
            <div>
                <small>Wind</small>
                <strong>${day[0].windspeed} km/h</strong>
            </div>
        </div>

        <div class="stat">
            <span>☀️</span>
            <div>
                <small>UV Index</small>
                <strong>${day[0].uvindex}</strong>
            </div>
        </div>

        <div class="stat">
            <span>🌧️</span>
            <div>
                <small>Rain Chance</small>
                <strong>${day[0].precipprob}%</strong>
            </div>
        </div>

    </div>

    <div class="sun-info">
        <div>
            <span>🌅</span>
            <p>Sunrise</p>
            <strong>${day[0].sunrise}</strong>
        </div>

        <div>
            <span>🌇</span>
            <p>Sunset</p>
            <strong>${day[0].sunset}</strong>
        </div>
    </div>

</div>

`
    present(content)
})