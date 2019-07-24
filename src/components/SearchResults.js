import React, { Component } from 'react';
import Movie from './Movie'

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e'; // las variables disponibles en todo nuestro componente se escriben aqui con mayusculas

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
      // iniciamos el estado con un array "movies" vacio
      // si no lo agregamos, vamos a tener un error apenas monta el componente
      // porque el render() va a tratar de hacer un map sobre algo que no existe
      // (prueben borrar este estado y ver como se rompe!)
    }
  }
  componentDidMount() { // cuando el componente se monta, se ejecuta esta funcion 
    // la funcion hace un fetch usando la query que recibimos por parametros desde App.js
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.props.query}&page=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      })
      // esta funcion hace un fetch y guarda en el estado la lista de peliculas
  };


  render() {
    return (
      <div>
        <h1>Search Results</h1>
        {/* notemos que aunque este componente no importa el css "movies.css", 
        de todos modos la clase "movies" usa ese estilo (esta en flex)
        Muy importante recordar que el CSS se ejecuta para todos los elementos de nuestro codigo
        que tengan el mismo nombre de clase, aunque no lo importemos explicitamente aqui */}
        <div className="movies">
        {this.state.movies.map(m => <Movie data={m} />)} 
        </div>
      </div>
    )
  }
}

export default SearchResults