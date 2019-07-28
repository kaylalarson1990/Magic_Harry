import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites"
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { MainContainer } from "../MainContainer/MainContainer";
import HouseContainer from "../HouseContainer/HouseContainer";
import SpellContainer from "../SpellContainer/SpellContainer";
import {
  harryPotterSpells,
  harryPotterHouses,
  harryPotterCharacters
} from "../apiCalls/apiCalls";
import { setSpells, setHouses, setCharacters } from "../actions/index";
import { Route, Switch } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();
    this.state = {
        favorites: []
    }
  }

  componentDidMount() {
    harryPotterSpells()
      .then(data => data)
      .then(spells => this.props.setSpells(spells))
      .catch(this.setState({ error: "Error fetching wizard data" }));
    harryPotterHouses()
      .then(data => data)
      .then(houses => this.props.setHouses(houses))
      .catch(this.setState({ error: "Error fetching wizard data" }));
    harryPotterCharacters()
      .then(data => data)
      .then(characters => this.props.setCharacters(characters))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }


  homePage = () => (
    <>
      <MainContainer />
    </>
  );

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={() => this.homePage()} />
          <Route exact path="/characters" component={CharacterContainer} />
          <Route exact path="/houses" component={HouseContainer} />
          <Route exact path="/spells" component={SpellContainer} />
          <Route exact path="/favorites" render={() => (<Favorites favorites={this.state.favorites} />)} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  spells: state.spells,
  houses: state.houses,
  characters: state.characters
});

export const mapDispatchToProps = dispatch => ({
  setSpells: spells => dispatch(setSpells(spells)),
  setHouses: houses => dispatch(setHouses(houses)),
  setCharacters: characters => dispatch(setCharacters(characters))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
