var input = document.querySelector('.input_text');
var cityname = document.querySelector('#Cityname');
var temperature = document.querySelector('.Temperature');
var description = document.querySelector('.Weatherdescription');
var button= document.querySelector('.submit');

var weatherIcon = document.querySelector('.weather-icon');
//let locationIcon = document.querySelector('.weather-icon');
//const iconElement = document.querySelector(".weather-icon");

//const weather = {};

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+document.getElementById("cityname").value+'&appid='+document.getElementById("APIkey").value)
.then(response => response.json())
.then(data => {
  var temperatureValue = (data['main']['temp']-273.15).toFixed(0);
  var citynameValue = data['name'];
  var descriptionValue = data['weather'][0]['description'];
  
  //var iconId = data.weather[0].icon;
  var iconId = data['weather'][0]['icon'];
  //const icon = data.weather[0].icon;
  // weather.iconId = data.weather[0].icon;

  // cityname.innerHTML = citynameValue;
  // description.innerHTML = "Weather description - "+descriptionValue;
  // temperature.innerHTML = "Temperature - "+temperatureValue+" °C";
  cityname.innerHTML = citynameValue;
  description.innerHTML = descriptionValue;
  temperature.innerHTML = temperatureValue+" °C";
  
  //locationIcon.innerHTML = '<img src="/home/raghu/SW_Prjs/AWS/OpenWeather/icons/${icon}.png">';
  //iconElement.innerHTML = `<img src="./icons/${weather.iconId}.png"/>`;
  weatherIcon.innerHTML = `<img src="./icons/${iconId}.png"/>`;
})

.catch(err => alert("Wrong city name!"));
})
