import React, { Component } from "react";
import { connect } from "react-redux";
import "../HouseContainer/Container.scss";
import Spells from "../Spells/Spells.jsx";
import PropTypes from "prop-types";

class SpellContainer extends Component {
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
    let filteredSpells = this.props.spells.filter(spell => {
      return spell.spell.toLowerCase().indexOf(this.state.filtered) !== -1;
    });
    const displaySpells = filteredSpells.map(spell => (
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
          <input className="search__input" type="text" value={this.state.filtered} onChange={this.handleChange} placeholder="Search" />
        </article>
        <section className="spells">{displaySpells}</section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  spells: state.spells
});

// const mapDispatchToProps = dispatch => ({
//   setSpells: spells => dispatch(setSpells(spells))
// });

SpellContainer.propTypes = {
  spells: PropTypes.array,
  setSpells: PropTypes.func
};

export default connect(mapStateToProps)(SpellContainer);
