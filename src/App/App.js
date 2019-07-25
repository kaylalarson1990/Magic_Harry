import React, {Component} from 'react';
import './App.css';
import { Header } from  '../Header/Header';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import { MainContainer } from '../MainContainer/MainContainer';
import { HouseContainer } from '../HouseContainer/HouseContainer';
import { SpellContainer } from '../SpellContainer/SpellContainer';
import { Route } from "react-router-dom";

class App extends Component {

  homePage = () => (
    <>
      <Header />
      <MainContainer />
    </>
  )

  
  render() {
  return (
    <div className="App">
      <Route exact path='/' component={() => this.homePage()} />
      <Route exact path='/characters' component={CharacterContainer} />
      <Route exact path='/houses' component={HouseContainer} />
      <Route exact path='/spells' component={SpellContainer} />
    </div>
  );
  }
}

export default App;
