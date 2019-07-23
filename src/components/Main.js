import React, { Component } from 'react';
import Hero from './Hero';
import MoviesCategory from './MoviesCategory';

class Main extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main>
        <Hero />

        <MoviesCategory category="popular" title="Popular" />
        <MoviesCategory category="top_rated" title="Top Rated" />
        <MoviesCategory category="upcoming" title="Upcoming" />
        <MoviesCategory category="now_playing" title="Now Playing" />
      </main>
    )
  }
}

export default Main;