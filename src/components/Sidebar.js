import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleClick = e => {
    const category = e.target.id
    this.props.funcionDelPadre(category)
  }

  render() {

    return(
      <div>
        <h2 id="popular" onClick={this.handleClick}>Popular</h2>
        <h2 id="top_rated" onClick={this.handleClick}>Top Rated</h2>
        <h2 id="upcoming" onClick={this.handleClick}>Upcoming</h2>
        <h2 id="now_playing" onClick={this.handleClick}>Now playing</h2>
      </div>
    )
  }
}

export default Sidebar;