import React, { Component } from "react";
import { connect } from "react-redux";
import "../HouseContainer/Container.scss";
import Characters from "../Characters/Characters.jsx";
import PropTypes from "prop-types";

export class CharacterContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      filtered: ""
    };
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


CharacterContainer.propTypes = {
  characters: PropTypes.object,
  setCharacters: PropTypes.func
};

export default connect(
  mapStateToProps
)(CharacterContainer);
