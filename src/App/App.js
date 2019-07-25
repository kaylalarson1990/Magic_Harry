import React, {Component} from 'react';
import './App.css';
import { Header } from  '../Header/Header';
import CharacterContainer from '../CharacterContainer/CharacterContainer';

class App extends Component {

  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <CharacterContainer /> */}
    </div>
  );
  }
}

export default App;
