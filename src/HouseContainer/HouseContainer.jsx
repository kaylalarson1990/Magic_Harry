import React, { Component } from "react";
import { connect } from "react-redux";
import "./Container.scss";
import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";

export class HouseContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      filtered: ""
    };
  }

  handleChange = e => {
    this.setState({
      filtered: e.target.value
    });
  };

  render() {
    const { favoriteCard } = this.props;
    let filteredHouses = this.props.houses.filter(house => {
      return house.name.toLowerCase().indexOf(this.state.filtered) !== -1;
    });
    const displayHouses = filteredHouses.map(house => (
      <Card info={house} key={house.created} favoriteCard={favoriteCard} />
    ));
    return (
      <>
        <article>
          <h2 className="title">Harry Potter Houses</h2>
          <input
            className="search__input"
            type="text"
            value={this.state.filtered}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </article>
        <section className="houses">{displayHouses}</section>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  houses: state.houses
});

HouseContainer.propTypes = {
  houses: PropTypes.array,
  setHouses: PropTypes.func
};

export default connect(mapStateToProps)(HouseContainer);
