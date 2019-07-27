import React, { Component } from "react";
import { connect } from "react-redux";
import "../HouseContainer/Container.scss";
import { harryPotterCharacters } from "../apiCalls/apiCalls";
import Characters from "../Characters/Characters.jsx";
import { setCharacters } from "../actions/index";
import PropTypes from "prop-types";

export class CharacterContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      filtered: ""
    };
  }
  componentDidMount() {
    harryPotterCharacters()
      .then(data => data)
      .then(characters => this.props.setCharacters(characters))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }

  handleChange = (e) => {
    this.setState({
      filtered: e.target.value
    })
  }

  render() {
    let filteredCharacters = this.props.characters.filter(
      (character) => {
        return character.name.toLowerCase().indexOf(this.state.filtered) !== -1;
      }
    );
    const displayCharacters = filteredCharacters.map(character => (
      <Characters
        key={character.id}
        name={character.name}
        house={character.house}
        role={character.role}
        school={character.school}
        species={character.species}
      />
    ));
    return (
      <>
        <article>
          <h2 className="title">Harry Potter Characters</h2>
          <input className="search__input" type="text" value={this.state.filtered} onChange={this.handleChange} placeholder="Search" />
        </article>
        <section className="characters">{displayCharacters}</section>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  characters: state.characters
});

export const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch(setCharacters(characters))
});

CharacterContainer.propTypes = {
  characters: PropTypes.object,
  setCharacters: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterContainer);
