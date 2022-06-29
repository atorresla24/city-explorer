import React from 'react';
//import Card from 'react-bootstrap/Card';
import Movie from './Movie';

class Movies extends React.Component{
  render() {
    let movies = <Movie
    movie = {this.props.movie}
    />
    return (
      <>
      {movies}
      </>
    )
  }
}

export default Movies;