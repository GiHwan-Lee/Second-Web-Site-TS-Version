const API_KEY = "appid=d1595b0c10a7b2944311a6c54d221929";

interface WeatherData {
  weather: { main: string }[];
  main: { temp: number };
  name: string;
}

function positions(position: GeolocationPosition) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${API_KEY}&units=metric`;

  fetch(url)
    .then((response: Response) => response.json())
    .then((data: WeatherData) => {
      const weather: HTMLSpanElement | null = document.querySelector(
        "#weather span:first-child"
      );
      const city: HTMLSpanElement | null = document.querySelector(
        "#weather span:last-child"
      );

      if (weather && city) {
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = `${data.name}`;
      } else {
        throw new Error("Could not find weather or city element");
      }
    });
}

function onError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(positions, onError);
