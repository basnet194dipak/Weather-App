import "./style.css";

const API_KEY = process.env.API_KEY
const default_location = "kathmandu"

async function weather_data(location) {
    var metric = "metric" 
    var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${metric}&key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

weather_data(default_location)