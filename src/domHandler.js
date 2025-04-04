import { getCurrentWeather } from "./index.js";

const locationInput = document.querySelector("#location");

locationInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const weatherData = await getCurrentWeather(locationInput.value);
        // changeBackgroundGradient();
        createCurrentConditionsElements(weatherData);
        createMoreDetailsElements(weatherData);
        createHourlyWeatherElements(weatherData);
        createWeatherDaysElements(weatherData);
    }
});

function createCurrentConditionsElements(weatherData) {
    const currentConditions = document.querySelector("#currentConditions");
    currentConditions.textContent = "";

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
    console.dir(weatherData);

    locationInput.value = "";
}

function createMoreDetailsElements(weatherData) {
    const detailsWeather = document.querySelector("#detailsWeather");
    detailsWeather.textContent = "";

    const spanMoreDetails = document.createElement("span");

    const arrDetails = ["Wind speed", "Air humidity", "UV index", "Preciptation probability"];
    const arrDetailsData = [
        weatherData.windSpeed,
        weatherData.humidity,
        weatherData.uvindex,
        weatherData.precipProb,
    ];
    const arrDetailsUnit = ["km/h", "%", "", "%"];

    spanMoreDetails.textContent = "More details";
    detailsWeather.append(spanMoreDetails);

    arrDetails.forEach((element, index) => {
        const divDetailName = document.createElement("div");
        const spanDetailsData = document.createElement("span");

        divDetailName.setAttribute("class", "moreDetails");

        divDetailName.textContent = element;
        spanDetailsData.textContent = ` ${arrDetailsData[index]} ${arrDetailsUnit[index]} `;
        divDetailName.append(spanDetailsData);
        detailsWeather.append(divDetailName);
    });
}

function createHourlyWeatherElements(weatherData) {
    const hourlyWeather = document.querySelector("#hourlyWeather");
    hourlyWeather.textContent = "";

    const arrTimeOfDayName = ["Night", "Morning", "Day", "Evening"];

    arrTimeOfDayName.forEach((e) => {
        const spanTimeOfDay = document.createElement("span");
        spanTimeOfDay.setAttribute("class", "timeOfDay");
        spanTimeOfDay.textContent = e;

        hourlyWeather.append(spanTimeOfDay);
    });

    weatherData.hourlyTemp.forEach((element) => {
        const pHourlyTemp = document.createElement("p");
        pHourlyTemp.textContent = `${Math.floor(parseInt(element))} °C`;

        hourlyWeather.append(pHourlyTemp);
    });

    weatherData.hourlyTempHour.forEach((element) => {
        const spanHourOfDay = document.createElement("span");
        spanHourOfDay.textContent = `${element.slice(0, 5)}`;

        hourlyWeather.append(spanHourOfDay);
    });
}

function createWeatherDaysElements(weatherData) {
    const weatherDays = document.querySelector("#weatherDays");
    weatherDays.textContent = "";

    weatherData.forecastDate.forEach((dateElement, index) => {
        const divDay = document.createElement("div");
        const h5DayOfTheWeek = document.createElement("h5");
        const spanDateDay = document.createElement("span");
        const divMaxTemp = document.createElement("p");
        const divMinTemp = document.createElement("p");
        const imgIconDay = document.createElement("img");

        const date = new Date(dateElement);
        const dayName = date.toLocaleString("en-US", { weekday: "long" });

        const weatherIcons = require.context("./images/WeatherIcons", false, /\.svg$/);
        const weatherIconPathDay = weatherIcons(`./${weatherData.forecastTempIcon[index]}.svg`);

        divDay.setAttribute("class", "day");
        weatherDays.append(divDay);

        h5DayOfTheWeek.textContent = dayName;
        spanDateDay.textContent = "24 july";
        divMaxTemp.textContent = `Max: ${weatherData.forecastTempMax[index]} °C`;
        divMinTemp.textContent = `Min: ${weatherData.forecastTempMin[index]} °C`;
        imgIconDay.setAttribute("src", weatherIconPathDay);

        divDay.append(h5DayOfTheWeek, spanDateDay, divMaxTemp, divMinTemp, imgIconDay);
    });
}

// function changeBackgroundGradient() {
//     const container = document.querySelector("#container");
//     console.log(container);
//     container.removeAttribute("class");
//     container.setAttribute("class", "cloudyWeather");
// }
