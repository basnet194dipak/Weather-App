const API_KEY = process.env.API_KEY

async function weather_data(location, metric) {
    var url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${metric}&key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return data
}

export {weather_data}