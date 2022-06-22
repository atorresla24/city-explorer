//import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      lat: '',
      lon: '',
      map: '',
      error: false,
      errorMessage: ''
    };
  }


  handleSubmit = async (event) => {
    try {
    event.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&q=${this.state.city}&format=json`;
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`;
    let cityInfo = await axios.get(url);
    let cityMap = await axios.get(mapUrl);
    console.log(cityInfo);
    this.setState({
      cityData: cityInfo.data[0],
      city: cityInfo.data[0].display_name,
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      map: cityMap,
      error: false
    });
    //console.log(cityInfo.data[0].lat);
  } catch(error) {
    this.setState({
      error: true, 
      errorMessage: `An Error Occurred: {error.response.status}`
    });
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
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Choose City </label>
        <input type='text' onInput={this.handleInput}></input>
        <button type='submit'>Explore!</button>
      </form>
      <p>City: {this.state.city}</p>
      <p>Latitude: {this.state.lat}</p>
      <p>Longitude: {this.state.lon}</p>
      <img src={this.state.map} alt={this.state.city}/>
      {this.state.error
      ? <p>{this.state.errorMessage}</p>
      :
      <ul>
        {}
      </ul>
  }
      </>
    )
  };
}


export default App;
