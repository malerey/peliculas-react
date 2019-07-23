import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SearchResults from './components/SearchResults'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query_movies: []
    }
  }

  showMovies = (movies = []) => {
    this.setState({
      query_movies: movies
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar showMovies={this.showMovies} />
        
        {/* <Sidebar /> */}

        {this.state.query_movies.length
          ? <SearchResults
            movies={this.state.query_movies}
          />
          :
          <Main />
        }

      </div>
    );
  }
}

export default App;
