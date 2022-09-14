// https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=2d8be646e815cb01ae7f38129230b591

var cityInput = document.querySelector("#city-input");
var cityList = document.querySelector("#cityList");

var cities = [];
function renderCities () {
        cityList.innerHTML = "";
    for (var i = 0; i < cities.length; i++) {
        var city = cities[1];
        var li = document.createElement ("li");
        li.textContent = city;
        li.setAttribute("data-index", i);
        cityList.appendChild(li);
    }
}
function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
      }
renderz();   
function storeCities() {
localStorage.setItem("cities", JSON.stringify(cities));
}

storedCities();
    }
init()










// var issueContainer = document.getElementById('current');
// var fetchButton = document.getElementById('fetch-button');

// var getApi = function(){
// var apiUrl = "https:api.openweathermap.org/data/2.5/forecast?city"

// fetch(apiUrl)
// .then(function (response) {
//     return response.json();
// }) 
// .then(function (data) {
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       var userName = document.createElement('h3');
//       var issueTitle = document.createElement('p');
//       userName.textContent = data[i].user.login;
//       issueTitle.textContent = data[i].title;
//       issueContainer.append(userName);
//       issueContainer.append(issueTitle);
//     }
//   });
// }
// fetchButton.addEventListener('click', getApi)