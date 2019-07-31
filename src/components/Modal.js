import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

const API_KEY = 'a70dbfe19b800809dfdd3e89e8532c9e';


class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {title:''}
    }
  }

  componentDidMount() {
    
    fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movie: data
        })
      })
  }

  render() {

    return (
      <div>
 
        <h1>{this.state.movie.title}</h1>
   
      </div>
    )
  }
}

export default Modal;