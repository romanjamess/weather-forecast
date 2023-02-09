const apiKey = "4caa09ce33acc0a294dfdbe9a03e5a23";
const button = document.querySelector(".btn");
const cityInput = document.querySelector(".searchBox")
// const h2 = document.getElementById("city-title");
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}


// fetching the api 
function getApi() {
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`
    console.log(cityInput.value);

    fetch(requestUrl)
    .then(function (response){
      if (response.ok){
        
        return response.json()
        .then(function(data){
          display(data)
          saveHistory(cityInput.value)
            // console.log(data)
        })
      }else {
        window.alert(response.statusText);
      }
       
    })
   
      
}

function saveHistory (city){
  let searchHistory = JSON.parse(localStorage.getItem("history"))|| []
  searchHistory.push(city)
  localStorage.setItem( "history" ,JSON.stringify(searchHistory))
  $("#history").text(" ")
   for (let i=0; i < searchHistory.length; i++) {
  
    $("#history").append($("<button>").html(searchHistory[i]));
    // console.log(searchHistory[i])
   }
  
}
//push the new one to the current array
// global search history
// function that saves searchhistory
//function that makes a btn that grabs local store



function display(data) {
 console.log(data);
 let temp0 = data.main.temp 
//  console.log(temp);
let humidity0 = data.main.humidity 
let wind0 = data.wind.speed
let cityName0 = data.name
let date0 = data.dt //append this to the page 
// unix time stamp 
let currentDate = new Date(date0 * 1000)
let formattedDate = currentDate.toLocaleDateString()
console.log(formattedDate)

$("#day-zero").text(" ")
$("#day-zero").append($("<h4 class='card-title'>").html(cityName0));
$("#day-zero").append($("<p>").html("Temp: " + temp0 + "  °F"));
$("#day-zero").append($("<p>").html("Humidity: " + humidity0 + "%"));
$("#day-zero").append($("<p>").html("Wind Speed: " + wind0+ "  MPH"));
$("#day-zero").append(formattedDate);


}
//5 day forecast function 
function forecast(){
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=imperial&appid=${apiKey}`

  fetch(url)
  .then(function (response){
    // console.log(response);
    if (response.ok){
      return response.json()
      .then(function(data){
        console.log(data , " line 74")
        displayDays(data)
        
      })
    }else {
      window.alert(response.statusText);
    }
     
  })
}



function displayDays (data) {
// console.log(data.list[0].main.temp);
let temp1 = data.list[0].main.temp
// temp1 = Math.round((temp1 - 273.15) * 9/5 + 32)
console.log(temp1)
console.log(data);

// day one weather 
let humidity1 = data.list[1].main.humidity
let wind1 = data.list[1].wind.speed
let cityName1 = data.city.name
let date1 = data.list[0].dt_txt
let array1 =  date1.split(" " , 1)
// console.log(array1)
// let dayOneDate = new Date(date1 * 1000)
// console.log(dayOneDate)
// let formattedDate1 = dayOneDate.toLocaleDateString()
// console.log(formattedDate1)

// day one 
$("#day-one").text(" ")
$("#day-one").append($("<h4 class='card-title'>").html(cityName1));
$("#day-one").append($("<p>").html("Temp: " + temp1 + "  °F"));
$("#day-one").append($("<p>").html("Humidity: " + humidity1 + "%"));
$("#day-one").append($("<p>").html("Wind Speed: " + wind1+ "  MPH"));
$("#day-one").append(array1);

//day two weather
let humidity2 = data.list[8].main.humidity
let wind2 = data.list[8].wind.speed
let cityName2 = data.city.name
let temp2 = data.list[8].main.temp
let date2 = data.list[9].dt_txt
let array2 = date2.split(" ", 1)
// let daytwoDate = new Date(date2 * 1000)
// let formattedDate2 = daytwoDate.toLocaleDateString()

//day two 
$("#day-two").text(" ")
$("#day-two").append($("<h4>").html(cityName2));
$("#day-two").append($("<p>").html("Temp: " + temp2 + "  °F"));
$("#day-two").append($("<p>").html("Humidity: " + humidity2 + "%"));
$("#day-two").append($("<p>").html("Wind Speed: " + wind2+ "  MPH"));
$("#day-two").append(array2);

// day three
let humidity3 = data.list[16].main.humidity
let wind3 = data.list[16].wind.speed
let cityName3 = data.city.name
let temp3 = data.list[16].main.temp
let date3 = data.list[17].dt_txt
let array3 = date3.split(" ", 1)
// let dayThreeDate = new Date(date3 * 1000)
// let formattedDate3 = dayThreeDate.toLocaleDateString()

// day three 
$("#day-three").text(" ")
$("#day-three").append($("<h4>").html(cityName3));
$("#day-three").append($("<p>").html("Temp: " + temp3 + "  °F"));
$("#day-three").append($("<p>").html("Humidity: " + humidity3 + "%"));
$("#day-three").append($("<p>").html("Wind Speed: " + wind3+ "  MPH"));
$("#day-three").append(array3);

// day 4
let humidity4 = data.list[24].main.humidity
let wind4 = data.list[24].wind.speed
let cityName4 = data.city.name
let temp4 = data.list[24].main.temp
let date4 = data.list[25].dt_txt
let array4 = date4.split(" ", 1)
// let dayfourDate = new Date(date4 * 1000)
// let formattedDate4 = dayfourDate.toLocaleDateString()

// day 4
$("#day-four").text(" ")
$("#day-four").append($("<h4>").html(cityName4));
$("#day-four").append($("<p>").html("Temp: " + temp4 + "  °F"));
$("#day-four").append($("<p>").html("Humidity: " + humidity4 + "%"));
$("#day-four").append($("<p>").html("Wind Speed: " + wind4+ "  MPH"));
$("#day-four").append(array4);

// day 5
let humidity5 = data.list[32].main.humidity
let wind5 = data.list[32].wind.speed
let cityName5 = data.city.name
let temp5 = data.list[32].main.temp
let date5 = data.list[33].dt_txt
let array5 = date5.split(" ", 1)
// let dayFiveDate = new Date(date5 * 1000)
// let formattedDate5 = dayFiveDate.toLocaleDateString()

// day 5
$("#day-five").text(" ")
$("#day-five").append($("<h4>").html(cityName5));
$("#day-five").append($("<p>").html("Temp: " + temp5 + "  °F"));
$("#day-five").append($("<p>").html("Humidity: " + humidity5 + "%"));
$("#day-five").append($("<p>").html("Wind Speed: " + wind5+ "  MPH"));
$("#day-five").append(array5);


}



button.addEventListener("click" , () => {
  getApi ()
  forecast ()
  saveHistory ()
})


//questions 
//do i have to math for each card? 
//get the users input instead of the hard code?
//get the css to operate with me?
// display local storage of last 5 searched?
//apply dates to correct cards
//append the current text the same way as the forecast text


//function local store get.item 