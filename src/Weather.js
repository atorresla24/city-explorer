import React from 'react';
import Card from 'react-bootstrap/Card';
//import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  render() {
    let weatherInfo = this.props.cityWeather.map((info, idx) => {
      return (
        <Card.Text key={idx}>Date: {info.datetime} Weather: {info.description}</Card.Text>
      )
    })
    return (
      <Card>
        {weatherInfo}
      </Card>
    )
  }
}

export default Weather;
