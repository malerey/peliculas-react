import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="single_movie">
        <img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + this.props.data.poster_path} />
        <p>{this.props.data.title}</p>
      </div>
    )
  }
}

export default Movie;