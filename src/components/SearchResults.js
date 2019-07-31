import React, { Component } from 'react';
import Movie from './Movie'

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.getMovies(this.props)
  };

  componentWillReceiveProps(nextProps) {
    this.getMovies(nextProps)
  }

  getMovies = data => {
    let direccionDeBusqueda = data.query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data.query}&page=1`
   : `https://api.themoviedb.org/3/movie/${data.category}?api_key=${API_KEY}&language=en-US&page=1`
    fetch(direccionDeBusqueda)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      })
  }


  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <div className="movies">
        {this.state.movies.map(m => <Movie data={m} />)} 
        </div>
      </div>
    )
  }
}

export default SearchResults