var input = document.querySelector('.input_text');
var cityname = document.querySelector('#Cityname');
var temperature = document.querySelector('.Temperature');
var description = document.querySelector('.Weatherdescription');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+document.getElementById("cityname").value+'&appid='+document.getElementById("APIkey").value)
.then(response => response.json())
.then(data => {
  var temperatureValue = data['main']['temp'];
  var citynameValue = data['name'];
  var descriptionValue = data['weather'][0]['description'];

  cityname.innerHTML = citynameValue;
  description.innerHTML = "Weather description - "+descriptionValue;
  temperature.innerHTML = "Temperature - "+temperatureValue+" K";
})

.catch(err => alert("Wrong city name!"));
})
