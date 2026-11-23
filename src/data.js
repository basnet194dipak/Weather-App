const API_KEY = process.env.API_KEY;

async function weather_data(location, metric) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${metric}&key=${API_KEY}`;
  try
  {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Weather data fetched successfully:", data);
    return data;
  }
  catch (error)
  {
    console.error("Error fetching weather data:", error);
    throw error;
  }
  
}

export { weather_data };
