import React, { Component } from 'react';

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}&page=1`)
    .then(res => res.json())
    .then(data => {
      this.props.showMovies(data.results)
    })
    
  }

  render () {
    return (
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/41Vd-ON7ZFL._SX425_.jpg" />

        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          onChange={this.handleChange}
          />
        </form>

        <div class="login">
          login
        </div>
      </div>
    );
  }
}

export default Navbar;