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
        const weatherData = {
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
            forecastDate: [
                data.days[1].datetime,
                data.days[2].datetime,
                data.days[3].datetime,
                data.days[4].datetime,
                data.days[5].datetime,
                data.days[6].datetime,
                data.days[7].datetime,
            ],
            forecastTempMax: [
                data.days[1].tempmax,
                data.days[2].tempmax,
                data.days[3].tempmax,
                data.days[4].tempmax,
                data.days[4].tempmax,
                data.days[6].tempmax,
                data.days[7].tempmax,
            ],
            forecastTempMin: [
                data.days[1].tempmin,
                data.days[2].tempmin,
                data.days[3].tempmin,
                data.days[4].tempmin,
                data.days[5].tempmin,
                data.days[6].tempmin,
                data.days[7].tempmin,
            ],
            forecastTempIcon: [
                data.days[1].icon,
                data.days[2].icon,
                data.days[3].icon,
                data.days[4].icon,
                data.days[5].icon,
                data.days[6].icon,
                data.days[7].icon,
            ],
        };
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return "Unavailable";
    }
}
