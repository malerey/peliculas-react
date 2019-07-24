import React, { Component } from 'react';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  handleChange = e => { // esta funcion se ejecuta toda vez que el usuario escribe algo en el input
    this.setState({
      query: e.target.value // guardamos en el estado del componente la busqueda del usuario
    })
  }

  handleSubmit = e => { // esta funcion se ejecuta cuando el usuario envia el formulario
    e.preventDefault()
    this.props.handleQuery(this.state.query) // le enviamos a la funcion del padre la data del estado (la busqueda del usuario)
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

        <div className="login">
          login
        </div>
      </div>
    );
  }
}

export default Navbar;