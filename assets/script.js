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
            console.log(data)
        })
      }else {
        window.alert(response.statusText);
      }
       
    })
   
      
}
getApi();

function display(data) {
 console.log(data.main);
 var temp = data.main.temp 
  temp = Math.round((temp - 273.15) * 9/5 + 32)
 console.log(temp);

 document.getElementById("city-title").append(temp);


}

// function forecast(){

// var url = `api.openweathermap.org/data/2.5/forecast?q=dallas&appid=${apiKey}`

//   fetch(url)
//   .then(function (response){
//     if (response.ok){
//       return response.json()
//       .then(function(data){
//         display(data)
//           console.log(data)
//       })
//     }else {
//       window.alert(response.statusText);
//     }
     
//   })


// }
// forecast();
// getApi();

// create another function for the forecast 
// append it to the page in another function the same way we did 
//




//grab the city value from input box
// now i need to append the new york parameter to the page 
// after i have to append the users input to the page instead of the new york parameter
// next to append the 5 day forecast to the page 
 



button.addEventListener("click" , getApi );
