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
    }
  }

  handleQuery = q => { // esta funcion se pasa a Navbar para poder obtener la busqueda del usuario
    this.setState({
      query: q
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar handleQuery={this.handleQuery} />
        
        {/* <Sidebar /> */}

 {/* conditional rendering:
 si hay una busqueda en el estado, mostramos el componente de los resultados de la busqueda
 si no la hay, mostramos el componente Main */}
 
        {this.state.query
          ? <SearchResults
            query={this.state.query}
          />
          :
          <Main />
        }

      </div>
    );
  }
}

export default App;
