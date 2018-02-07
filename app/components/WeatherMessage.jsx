var React = require('react');

//we can use destructuring to turn (props) into ({temp, location})
var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return (
    <h3>It is {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
