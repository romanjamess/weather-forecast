const apiKey = "4caa09ce33acc0a294dfdbe9a03e5a23";
const button = document.querySelector(".btn");
// const h2 = document.getElementById("city-title");
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}


// fetching the api 
function getApi() {
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=${apiKey}`
    

    fetch(requestUrl)
    .then(function (response){
      if (response.ok){
        
        return response.json()
        .then(function(data){
          display(data)
            // console.log(data)
        })
      }else {
        window.alert(response.statusText);
      }
       
    })
   
      
}
getApi();

function display(data) {
//  console.log(data.main);
 let temp = data.main.temp 
  temp = Math.round((temp - 273.15) * 9/5 + 32)
//  console.log(temp);
let humidity = data.main.humidity 
let wind = data.wind.speed
let cityName = data.name
//appending data to current weather
//  $("#current-temp").append($("li")("Temp: " + temp))
$("#current-temp").append(temp);
 $("#current-humidity").append(humidity);
 $("#current-wind").append(wind);
 $("#city-title").append(cityName)
//  console.log(data);
 

}
//5 day forecast function 
function forecast(){

var url = `https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=${apiKey}`

  fetch(url)
  .then(function (response){
    if (response.ok){
      return response.json()
      .then(function(data){
        displayDays(data)
          console.log(data)
      })
    }else {
      window.alert(response.statusText);
    }
     
  })
}

forecast();

function displayDays (data) {
// console.log(data.list[0].main.temp);
let temp1 = data.list[0].main.temp
temp1 = Math.round((temp1 - 273.15) * 9/5 + 32)
console.log(temp1)


// day one weather 
let humidity1 = data.list[0].main.humidity
let wind1 = data.list[0].wind.speed
let cityName1 = data.city.name

// day one 
$("#day-one").append($("<h4>").html(cityName1));
$("#day-one").append($("<p>").html("Temp: " + temp1 + "  °F"));
$("#day-one").append($("<p>").html("Humidity: " + humidity1 + "%"));
$("#day-one").append($("<p>").html("Wind Speed: " + wind1+ "  MPH"));


//day two weather
let humidity2 = data.list[1].main.humidity
let wind2 = data.list[1].wind.speed
let cityName2 = data.city.name
let temp2 = data.list[1].main.temp

//day two 
$("#day-two").append($("<h4>").html(cityName2));
$("#day-two").append($("<p>").html("Temp: " + temp2 + "  °F"));
$("#day-two").append($("<p>").html("Humidity: " + humidity2 + "%"));
$("#day-two").append($("<p>").html("Wind Speed: " + wind2+ "  MPH"));

// day three
let humidity3 = data.list[2].main.humidity
let wind3 = data.list[2].wind.speed
let cityName3 = data.city.name
let temp3 = data.list[2].main.temp

// day three
$("#day-three").append($("<h4>").html(cityName3));
$("#day-three").append($("<p>").html("Temp: " + temp3 + "  °F"));
$("#day-three").append($("<p>").html("Humidity: " + humidity3 + "%"));
$("#day-three").append($("<p>").html("Wind Speed: " + wind3+ "  MPH"));

// day 4
let humidity4 = data.list[3].main.humidity
let wind4 = data.list[3].wind.speed
let cityName4 = data.city.name
let temp4 = data.list[3].main.temp

// day 4
$("#day-four").append($("<h4>").html(cityName4));
$("#day-four").append($("<p>").html("Temp: " + temp4 + "  °F"));
$("#day-four").append($("<p>").html("Humidity: " + humidity4 + "%"));
$("#day-four").append($("<p>").html("Wind Speed: " + wind4+ "  MPH"));

// day 5
let humidity5 = data.list[4].main.humidity
let wind5 = data.list[4].wind.speed
let cityName5 = data.city.name
let temp5 = data.list[4].main.temp

// day 5
$("#day-five").append($("<h4>").html(cityName5));
$("#day-five").append($("<p>").html("Temp: " + temp5 + "  °F"));
$("#day-five").append($("<p>").html("Humidity: " + humidity5 + "%"));
$("#day-five").append($("<p>").html("Wind Speed: " + wind5+ "  MPH"));



}

// getApi();

// create another function for the forecast 
// append it to the page in another function the same way we did 
//




//grab the city value from input box
// now i need to append the new york parameter to the page 
// after i have to append the users input to the page instead of the new york parameter
// next to append the 5 day forecast to the page 
 



button.addEventListener("click" , getApi )
