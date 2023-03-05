// f3025d63e9da5a90b52806180f71085c
// api: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const API_KEY = `f3025d63e9da5a90b52806180f71085c`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  // console.log(data);
  //   const temperature = document.getElementById("temperature");
  //     temperature.innerText = data.main.temp;

  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
};

const setInnerTextById = (temp, text) => {
  const temperature = document.getElementById(temp);
  temperature.innerText = text;

  document.getElementById("btn-search").addEventListener("click", function () {
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    loadTemperature(city);

    document.getElementById("city-name").innerText = city;
  });
};

loadTemperature("dhaka");
