import "./style.css";
import { weather_data } from "../data";

let default_location = "kathmandu"
let metric = "metric"
let default_unit = "C"
let default_distance = "km"
let locations = default_location


// fill present data
function present_future(content, classes){
    var today = document.querySelector(`.${classes}`)
    today.innerHTML = content
}

function change_present(day){
let present_content = `<div class="weather-card">

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
                <strong>${day[0].tempmax}°${default_unit}</strong>
            </div>
        </div>

        <div class="stat">
            <span>🌡️</span>
            <div>
                <small>Low</small>
                <strong>${day[0].tempmin}°${default_unit}</strong>
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
                <strong>${day[0].windspeed} ${default_distance}/h</strong>
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
present_future(present_content,"today")
}

function change_future(day)
{
let future_content = day.slice(1).map(item => `
    <div class="forecast-row">

        <div class="forecast-date">
            <strong>${new Date(item.datetime + "T00:00:00").toLocaleDateString("en-US", {
                weekday: "short"
            })}</strong>

            <span>${new Date(item.datetime + "T00:00:00").toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            })}</span>
        </div>

        <div class="forecast-weather">
            <div class="forecast-icon">🌧️</div>

            <div>
                <strong>${item.conditions}</strong>
                <span>Rain ${item.precipprob}%</span>
            </div>
        </div>

        <div class="forecast-temp">
            <strong>${Math.round(item.tempmax)}°</strong>
            <span>${Math.round(item.tempmin)}°</span>
        </div>

    </div>
`).join("");
present_future(future_content,"future")

}

async function display(default_location, metric)
{
    let weather= await weather_data(default_location, metric)
    let day = weather.days
    change_present(day)
    change_future(day)
}

document.addEventListener("DOMContentLoaded", ()=>{
    display(default_location,metric)
})

let change = document.querySelector(".change")
change.addEventListener("click",()=>{
    if (metric=="metric")
    {
        metric = "us"
        default_unit = "K"
        default_distance = "Miles"
    }
    else{
        metric = "metric"
        default_unit = "C"
        default_distance="km"
    }
    display(locations, metric)
})