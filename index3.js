const time_div = document.querySelector("#time");
const weather_div = document.querySelector("#weather");
const location_div = document.querySelector("#location");

const timeFn = () => {
  const date = new Date(Date.now());
  const hour = date.getHours();
  const minute =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  time_div.innerHTML = `${hour}:${minute}`;
};
setInterval(timeFn, 1000);

const geoOk = async (position) => {
  const { latitude, longitude } = position.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=af39ab32f19c0e479e0761a150e0f9bf`;
  const json = await fetch(url).then((response) => response.json());
  console.log(json);
  weather_div.innerHTML = json.weather[0].main;
  location_div.innerHTML = json.name;
};
const geoFalse = () => {
  console.log("its not work");
};

navigator.geolocation.getCurrentPosition(geoOk, geoFalse);
