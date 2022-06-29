import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component{
  render(){
  let movieInfo = this.props.movie.map((info, idx) => {
      return (
        <Card key={idx}>
        <Card.Text>Movie Title: {info.title} Description: {info.description}</Card.Text>
        </Card>
      )
    })
    return (
      <>
        {movieInfo}
        </>
    )
  }
}

export default Movie;