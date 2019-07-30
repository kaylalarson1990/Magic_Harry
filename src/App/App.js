import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../Header/Header";
import Error from "../Error/Error.js";
import Favorites from "../Favorites/Favorites";
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
    };
  }

  componentDidMount() {
    const { favorites } = this.state;
    if (!!favorites) this.getFromStorage();

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

  favoriteCard = id => {
    const favoritedCard = [
      ...this.props.characters,
      ...this.props.spells,
      ...this.props.houses
    ].find(card => card.id === id);

    favoritedCard.favorite = !favoritedCard.favorite;
    if (
      favoritedCard.favorite &&
      !this.state.favorites.includes(favoritedCard)
    ) {
      this.setState({
        favorites: [...this.state.favorites, favoritedCard]
      });
    } else {
      this.setState({
        favorites: this.state.favorites.filter(favorite => favorite.id !== id)
      });
    }
    this.saveToStorage();
  };

  saveToStorage = () => {
    const { favorites } = this.state;
    let favs = JSON.stringify(favorites);
    localStorage.setItem("favorites", favs);
  };

  getFromStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };

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
          <Route
            exact
            path="/characters"
            render={() => (
              <CharacterContainer
                data={this.props.characters}
                favoriteCard={this.favoriteCard}
              />
            )}
          />
          <Route
            exact
            path="/houses"
            component={() => (
              <HouseContainer
                data={this.props.houses}
                favoriteCard={this.favoriteCard}
              />
            )}
          />
          <Route
            exact
            path="/spells"
            component={() => (
              <SpellContainer
                data={this.props.spells}
                favoriteCard={this.favoriteCard}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Favorites
                favorites={this.state.favorites}
                favoriteCard={this.favoriteCard}
                onLoad={this.getFromStorage}
              />
            )}
          />
          <Route render={Error} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
