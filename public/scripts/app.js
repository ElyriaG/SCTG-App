// const axios = require('axios');
const requirejs = require('requirejs');


requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs([axios],
axios
.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + searchLocation + "?apikey=" + APIkey)
.then(function(response) {
    console.log(response);
 })
 .catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }); 

      
//   $(document).ready(function () {
//     let APIkey = "HgCNJPGZdbENgmsatzFBnhvizNNuayRO";
//   let searchedCity = "";
//   let secondLink = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + searchedCity + "?apikey=" + APIkey ;

//   $("#submitButton").on("click", function SearchCity(event) {
//     event.preventDefault();
//     searchedCity = $("#searchCityForm").val();
//     $("#chosen-city").text(searchedCity);
//     console.log(searchedCity);

//   //   $("#infoHere").text(searchedCity);
//   //   $ajax({
//   //       url: secondLink,
//   //       method: "GET"
//   //   }).then(function (response) {
//   //       $("#infoHere").text(SearchedCity);
//   //   });
//   // });
// });
//   })