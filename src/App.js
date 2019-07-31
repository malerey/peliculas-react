import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SearchResults from './components/SearchResults';
import Modal from './components/Modal'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleQuery = q => {
    this.setState({
      query: q,
      category: ''
    })
  }

  funcionDelPadre = params => {
    this.setState({
      category: params,
      query: ''
    })
  }

  getId = id => {
    console.log(id)
    this.setState({
      id: id
    })
  }


  render() {

    return (
      <div className="App">
        
        {this.state.id ?
        <Modal 
        id={this.state.id}
        />
        : ''
        }

        <Navbar handleQuery={this.handleQuery} />

        <Sidebar funcionDelPadre={this.funcionDelPadre}/>

        {this.state.query || this.state.category
          ? <SearchResults
            query={this.state.query}
            category={this.state.category}
          />
          :
          <Main
          getId={this.getId}
          />
        }


      </div>
    );
  }
}

export default App;
