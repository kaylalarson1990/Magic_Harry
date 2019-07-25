import React, { Component } from "react";
import { connect } from "react-redux";
import "./CharacterContainer.scss";
import { harryPotterCharacters } from "../apiCalls/apiCalls";
import Characters from "../Characters/Characters.jsx";
import { setCharacters } from "../actions/index";
import PropTypes from "prop-types";

class CharacterContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }
  componentDidMount() {
    harryPotterCharacters()
      .then(data => data)
      .then(characters => this.props.setCharacters(characters))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }

  render() {
    const { characters } = this.props;
    const displayCharacters = characters.map(character => (
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
          <input class="search__input" type="text" placeholder="Search" />
        </article>
        <section className="characters">{displayCharacters}</section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters
});

const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch(setCharacters(characters))
});

CharacterContainer.propTypes = {
  characters: PropTypes.object,
  setCharacters: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterContainer);
