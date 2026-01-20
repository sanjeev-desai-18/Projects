const API_ID = "4db05fd2bbefb79bc1af7144eab86f43";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.getElementById("weather-img");

const tempValue = document.getElementById("temperature-value");
const cityName = document.getElementById("city");

const humidityValue = document.getElementById("humidity");

const windSpeedValue = document.getElementById("wind-speed");

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_ID}&units=metric`;

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchWeatherData();
  }
});

searchBtn.addEventListener("click", fetchWeatherData);

async function fetchWeatherData() {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Please enter a city.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`
    );

    const data = await response.json();
    console.log("Weather data : ", data);

    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  tempValue.textContent = Math.round(data.main.temp);
  humidityValue.textContent = data.main.humidity + "%";
  windSpeedValue.textContent = data.wind.speed + " kmph";

  cityName.textContent = data.name;
  let weatherIcon = "";

  if (data.weather[0]["main"] === "Clear") {
    weatherIcon = "clear.png";
  } else if (data.weather[0]["main"] === "Clouds") {
    weatherIcon = "clouds.png";
  } else if (
    data.weather[0]["main"] === "Drizzle" ||
    data.weather[0]["main"] === "Haze"
  ) {
    weatherIcon = "drizzle.png";
  } else if (data.weather[0]["main"] === "Snow") {
    weatherIcon = "snow.png";
  } else if (
    data.weather[0]["main"] === "Mist" ||
    data.weather[0]["main"] === "Fog"
  ) {
    weatherIcon = "mist.png";
  }

  weatherImg.src = `images/${weatherIcon}`;
}
