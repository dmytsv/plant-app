import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div
        className="ui card"
        key={plant._id}
        onClick={() => this.props.history.push(`/plants/${plant._id}`)}
      >
        <div className="image">
          <img src={plant.image} alt={plant.name} />
        </div>
        <div
          data-before={
            plant.users.length
              ? `Liked by ${plant.users.length} users`
              : "Be first one to like!"
          }
          className="content"
        >
          <h3 className="header">{plant.name}</h3>
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
)(PlantList);
