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
      error: "",
      filtered: ""
    };
  }

  componentDidMount() {
    harryPotterHouses()
      .then(data => data)
      .then(houses => this.props.setHouses(houses))
      .catch(this.setState({ error: "Error fetching wizard data" }));
  }

  handleChange = (e) => {
    this.setState({
      filtered: e.target.value
    })
  }

  render() {
    let filteredHouses = this.props.houses.filter(house => {
      return house.name.toLowerCase().indexOf(this.state.filtered) !== -1;
    });
    const displayHouses = filteredHouses.map(house => (
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
          <input className="search__input" type="text" value={this.state.filtered} onChange={this.handleChange} placeholder="Search" />
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
  houses: PropTypes.array,
  setHouses: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseContainer);
