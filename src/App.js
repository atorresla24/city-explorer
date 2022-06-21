//import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      lat: '',
      lon: ''
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ALEC_TORRES_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    this.setState={
      city: cityInfo.data[0].lon
    };
    console.log(cityInfo.data[0].lon);
  }

  handleInput = (event) => {
    this.setState({
     city: event.target.value 
    });
  }

  render() {
    //let coordinates = this.state.city.map((city) => {return <li>{city.boundingbox}</li>});
    return(
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Choose City </label>
        <input type='text' onInput={this.handleInput}></input>
        <button type='submit'>Explore!</button>
      </form>
      <ul>
        {}
      </ul>
      </>
    )
  };
}

//function App() {
    //return (
      <div className="App">
        <header className="App-header">
          City Explorer
        </header>
        <main>
          <body>
          <form>
          <label for='city'>Choose City</label>
          <input type='text' id='cityChosen' name='cityChosen'></input>
          <button></button>
          </form>
          </body>
        </main>
      </div>
    //);
  //}


export default App;
