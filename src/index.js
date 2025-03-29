import "./styles.css";
// const buttonCheck = document.querySelector("#buttonCheck");

// buttonCheck.addEventListener("click", async () => {
//     const inputLocation = document.querySelector("#location");
//     // const divCurrentTemp = document.querySelector("#currentTemp");
//     const WeatherData = await getCurrentTemperature(inputLocation.value);
//     console.log(WeatherData);
//     // divCurrentTemp.textContent = `Current temperature is ${WeatherData.currentTemp}°C`;
// });

async function getWeatherData(location) {
    const response = fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?unitGroup=metric&key=BTBQSXWTRQGC28YHE78448Z76`
    );
    const weatherData = (await response).json();
    return weatherData;
}
async function getCurrentWeather(location) {
    try {
        const data = await getWeatherData(location);
        console.log(data);
        const Weather = {
            currentTemp: data.currentConditions.temp,
            feelsLikeTemp: data.currentConditions.feelslike,
            conditions: data.currentConditions.conditions,
            sunrise: data.currentConditions.sunrise,
            sunset: data.currentConditions.sunset,
            todayDescription: data.days[0].description,
            windSpeed: data.currentConditions.windspeed,
            humidity: data.currentConditions.humidity,
            uvindex: data.currentConditions.uvindex,
            precipProb: data.currentConditions.precipprob,
        };
        return Weather;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return "Unavailable";
    }
}

console.log(getCurrentWeather("ljubljana"));
