import React, { Component }  from 'react';
import Movie from './Movie'

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>
        {this.props.movies.map(m=> <Movie data={m}/>)} 
      </div>
    )
  }
}

export default SearchResults