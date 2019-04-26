import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "./hoc/requireAuth";

import { fetchPlants } from "../actions";
import "./PlantsList.scss";

class PlantList extends Component {
  componentDidMount() {
    this.props.fetchPlants();
  }
  renderPlants() {
    const { plants } = this.props;
    if (!plants) {
      return (
        <div className="ui segment loader-segment">
          <div className="ui active inverted dimmer">
            <div className="ui medium text loader">
              Loading Events from API...
            </div>
          </div>
        </div>
      );
    }
    return this.props.plants.map(plant => (
      <div className="ui card" key={plant._id}>
        <div className="image">
          <img src={plant.image} />
        </div>
        <div className="content">
          <a className="header">{plant.name}</a>
          <div className="description">{plant.description}</div>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div id="plant-list" className="ui container flex">
        {this.renderPlants()}
      </div>
    );
  }
}

const mapStateToProps = ({ plants }) => ({ plants });

export default connect(
  mapStateToProps,
  { fetchPlants }
)(requireAuth(PlantList));
