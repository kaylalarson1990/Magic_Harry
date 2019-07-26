import React, { Component } from "react";
import { connect } from "react-redux";
import "./Container.scss";
import { harryPotterHouses } from "../apiCalls/apiCalls";
import Houses from "../Houses/Houses.jsx";
import { setHouses } from "../actions/index";
import PropTypes from "prop-types";

class HouseContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }

  componentDidMount() {
    harryPotterHouses()
      .then(data => data)
      .then(houses => this.props.setHouses(houses))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }

  render() {
    const { houses } = this.props;
    const displayHouses = houses.map(house => (
      <Houses
        key={house.id}
        name={house.name}
        mascot={house.mascot}
        headOfHouse={house.headOfHouse}
        school={house.school}
        houseGhost={house.houseGhost}
        founder={house.founder}
      />
    ));
    return (
      <>
        <article>
          <h2 className="title">Harry Potter Houses</h2>
          <input className="search__input" type="text" placeholder="Search" />
        </article>
        <section className="houses">{displayHouses}</section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({
  setHouses: houses => dispatch(setHouses(houses))
});

HouseContainer.propTypes = {
  houses: PropTypes.object,
  setHouses: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseContainer);
