import "./styles.css";
import "./domHandler.js";

async function getWeatherData(location) {
    const response = fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?unitGroup=metric&key=BTBQSXWTRQGC28YHE78448Z76`
    );
    const weatherData = (await response).json();
    return weatherData;
}

export async function getCurrentWeather(location) {
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
            icon: data.currentConditions.icon,
            hourlyTemp: [
                data.days[0].hours[0].temp,
                data.days[0].hours[3].temp,
                data.days[0].hours[6].temp,
                data.days[0].hours[9].temp,
                data.days[0].hours[12].temp,
                data.days[0].hours[15].temp,
                data.days[0].hours[18].temp,
                data.days[0].hours[21].temp,
            ],
            hourlyTempHour: [
                data.days[0].hours[0].datetime,
                data.days[0].hours[3].datetime,
                data.days[0].hours[6].datetime,
                data.days[0].hours[9].datetime,
                data.days[0].hours[12].datetime,
                data.days[0].hours[15].datetime,
                data.days[0].hours[18].datetime,
                data.days[0].hours[21].datetime,
            ],
        };
        return Weather;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return "Unavailable";
    }
}
