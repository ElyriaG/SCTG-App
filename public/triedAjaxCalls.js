
//These work separately
$.ajax({
  url: searchLink,
  method: "GET"
}).then(function (response) {
  cityKey = response[0].Key;
})

$.ajax({
  url: searchCityLink,
  method: "GET"
}).then(function (response) {
  //  cityKey = response[0].Key;
  console.log(response);
  $("#low-weather").text(response.DailyForecasts[0].Temperature.Minimum.Value + "F & ");
  $("#high-weather").text(response.DailyForecasts[0].Temperature.Maximum.Value + "F");
})


$.ajax({
  url: searchLink,
  method: "GET",
  success: function (response) {
    cityKey = response[0].Key;
    // console.log(response[0].LocalizedName);
    console.log(response);
    // $("#searchCityForm").text(searchedCity);
  }
}).then(function () {
  $.ajax({
    url: searchCityLink,
    method: "GET",
    success: function (responseTwo) {
      // console.log(responseTwo);
      $("#low-weather").text(responseTwo.DailyForecasts[0].Temperature.Minimum.Value + "F & ");
      $("#high-weather").text(responseTwo.DailyForecasts[0].Temperature.Maximum.Value + "F");
    }
  })
}
)


$.ajax({
  url: searchLink,
  method: "GET",
  success: function (response) {
    cityKey = response[0].Key;
  }
}).then(
  $.ajax({
    url: searchCityLink,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#low-weather").text(response.DailyForecasts[0].Temperature.Minimum.Value + "F & ");
    $("#high-weather").text(response.DailyForecasts[0].Temperature.Maximum.Value + "F");
  })
)

$.when(
  $.ajax({
    url: searchCityForLink,
    method: "GET",
    success: function (response) {
      cityKey = response[0].Key;
      // console.log(response[0].LocalizedName);
      console.log("response one hit"); //did hit
    }
  }).then(function () {
    $.ajax({
      url: searchCityForWeather,
      method: "GET",
      success: function (responseTwo) {
        console.log("response two hit"); //did not hit w/ajax call. Hit w/o ajax call
        //  $("#low-weather").text(responseTwo.DailyForecasts[0].Temperature.Minimum.Value + "F & ");
        //  $("#high-weather").text(responseTwo.DailyForecasts[0].Temperature.Maximum.Value + "F");
      }
    })
  })
)