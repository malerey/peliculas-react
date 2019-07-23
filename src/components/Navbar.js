import React, { Component } from 'react';

class Navbar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/41Vd-ON7ZFL._SX425_.jpg" />

        <form>
          <input type="text" />
        </form>

        <div class="login">
          login
        </div>
      </div>
    );
  }
}

export default Navbar;