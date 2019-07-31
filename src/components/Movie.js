import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    const id = this.props.data.id
    this.props.getId(id)
  }

  render () {
    return (
      <div className="single_movie">
        <img
        onClick={this.handleClick}
        src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + this.props.data.poster_path}
        />
        <p>{this.props.data.title}</p>
      </div>
    )
  }
}

export default Movie;