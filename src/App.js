//import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      lat: '',
      lon: '',
      error: false,
      errorMessage: '',
      map: '',
      weatherData: [],
      movieData: [],
    };
  }


  handleSubmit = async (event) => {
    try {
    event.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=12`;
    console.log(cityInfo);
    this.setState({
      cityData: cityInfo.data[0],
      city: cityInfo.data[0].display_name,
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      error: false,
      map: mapUrl
    });
    this.handleWeather(cityInfo.data[0].lat, cityInfo.data[0].lon);
    this.handleMovie();
    //console.log(cityInfo.data[0].lat);
  } catch(error) {
    this.setState({
      error: true,
      errorMessage: `An Error Occurred: {error.response.status}`
    });
  }
  };

   handleWeather = async (lat, lon) => {
    let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${lat}&lon=${lon}`
    try{
      let weatherData = await axios.get(url)
      console.log(weatherData.data);
      this.setState({
        weatherData: weatherData.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleMovie = async() => {
    let url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`
    try{
      let movieData = await axios.get(url)
      console.log(movieData.data);
      this.setState({
        movieData: movieData.data
      });
    } catch (error){
      console.log(error);
    }
  };

  handleInput = (event) => {
    this.setState({
     city: event.target.value 
    });
  }

  render() {
    //console.log(this.state);
    //img src = https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12
    return(
      <html>
      
      <h1>City Explorer</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Choose City </label>
        <input type='text' onInput={this.handleInput}></input>
        <button type='submit'>Explore!</button>
      </form>
      <p>City: {this.state.city}</p>
      <p>Latitude: {this.state.lat}</p>
      <p>Longitude: {this.state.lon}</p>
      <Image src={this.state.map} alt={this.city}/>
      {this.state.error &&
       <Alert variant={'danger'}>{this.state.errorMessage}</Alert>
  }
  <Weather
    cityWeather={this.state.weatherData}
    />
  <Movies
    movie={this.state.movieData}
    />
      </html>
    )
  };
}


export default App;
