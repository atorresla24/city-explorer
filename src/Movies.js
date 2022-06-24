import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component{
  render() {
    let movieInfo = this.props.movie.map((info, idx) => {
      return (
        <Card.Text key={idx}>Movie title: {info.title} Description: {info.description}</Card.Text>
      )
    })
    return (
      <Card>
        {movieInfo}
      </Card>
    )
  }
}

export default Movies;