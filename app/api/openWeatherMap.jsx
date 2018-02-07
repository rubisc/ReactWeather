//load in axios
//create a func that gets returned when someone requires the module
//call axios to give us weather

var axios = require('axios');
//generate base url
//cost makes a variable that cannot be altered
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ee5a3c613d579b1b23c5e2a325cf9135&units=imperial'

module.exports = {
  getTemp: function(location) {
    //this takes our plain text string and codes it properly for browser
    var encodedLocation = encodeURIComponent(location);
    var requestUrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //openweathermap doesn't conform to usual http req syntax sometimes
    //axios.get takes a url, fetches it, brings back results
    //uses promises
    return axios.get(requestUrl).then(function(res) {
      //success case, but watches out for an error (weird)
      //check if this fires off so we can catch error
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        //give us the temp in the json response
        return res.data.main.temp;
      }
    }, function(res) {
      //total error case
      //res.data.message gives us our error message
      throw new Error(res.data.message)
    });
  }
}
