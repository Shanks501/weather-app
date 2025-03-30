import { getCurrentWeather } from "./index.js";

const locationInput = document.querySelector("#location");

locationInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        createCurrentConditionsElements();
    }
});

export async function createCurrentConditionsElements() {
    deleteAllElements();
    const currentConditions = document.querySelector("#currentConditions");
    const weatherData = await getCurrentWeather(locationInput.value);

    const divEmpty = document.createElement("div");
    const spanDate = document.createElement("span");
    const img = document.createElement("img");
    const divTemp = document.createElement("div");
    const pSunrise = document.createElement("p");
    const spanFeel = document.createElement("span");
    const pSunset = document.createElement("p");
    const pDescription = document.createElement("p");

    divEmpty.textContent = "";
    spanDate.textContent = "Friday 27 July 15:00";
    divTemp.textContent = weatherData.currentTemp + "°C";
    pSunrise.textContent = `Sunrise: ${weatherData.sunrise.slice(0, 5)}`;
    spanFeel.textContent = `Feels like ${weatherData.feelsLikeTemp}`;
    pSunset.textContent = `Sunset: ${weatherData.sunset.slice(0, 5)}`;
    pDescription.textContent = weatherData.todayDescription;

    const weatherIcons = require.context("./images/WeatherIcons", false, /\.svg$/);
    const weatherIconPath = weatherIcons(`./${weatherData.icon}.svg`);

    img.setAttribute("src", weatherIconPath);
    currentConditions.append(
        divEmpty,
        spanDate,
        img,
        divTemp,
        pSunrise,
        spanFeel,
        pSunset,
        pDescription
    );
    console.log(locationInput.value);
    console.log(weatherData);

    locationInput.value = "";
}

function deleteAllElements() {
    const currentConditions = document.querySelector("#currentConditions");
    currentConditions.textContent = "";
}
