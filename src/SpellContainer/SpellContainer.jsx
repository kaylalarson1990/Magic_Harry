import React, { Component } from "react";
import { connect } from "react-redux";
import "../HouseContainer/Container.scss";
import { harryPotterSpells } from "../apiCalls/apiCalls";
import Spells from "../Spells/Spells.jsx";
import { setSpells } from "../actions/index";
import PropTypes from "prop-types";

class SpellContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }

  componentDidMount() {
    harryPotterSpells()
      .then(data => data)
      .then(spells => this.props.setSpells(spells))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }

  render() {
    const { spells } = this.props;
    const displaySpells = spells.map(spell => (
      <Spells
        key={spell.id}
        spell={spell.spell}
        type={spell.type}
        effect={spell.effect}
      />
    ));
    return (
      <>
        <article>
          <h2 className="title">Harry Potter Spells</h2>
          <input className="search__input" type="text" placeholder="Search" />
        </article>
        <section className="spells">{displaySpells}</section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  spells: state.spells
});

const mapDispatchToProps = dispatch => ({
  setSpells: spells => dispatch(setSpells(spells))
});

SpellContainer.propTypes = {
  spells: PropTypes.array,
  setSpells: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellContainer);
