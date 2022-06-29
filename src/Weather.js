import React from 'react';
//import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  render() {
    let fiveDay = <WeatherDay
    cityWeather = {this.props.cityWeather}
    />
    return(
      <>
       {fiveDay}
       </>
     )
    }
}

export default Weather;

// let weatherInfo = this.props.cityWeather.map((info, idx) => {
    //   return (
    //     <Card.Text key={idx}>Date: {info.datetime} Weather: {info.description}</Card.Text>
    //   )
    // })
    // return (
    //   <Card>
    //     {weatherInfo}
    //   </Card>
    // )
