import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{
  render(){
  let weatherInfo = this.props.cityWeather.map((info, idx) => {
      return (
        <Card key={idx}>
        <Card.Text>Date: {info.datetime} Weather: {info.description}</Card.Text>
        </Card>
      )
    })
    return (
      <>
        {weatherInfo}
        </>
    )
  }
}

export default WeatherDay;