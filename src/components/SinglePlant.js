import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from "./hoc/requireAuth";
import { fetchPlant } from "../actions";

class SinglePlant extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPlant(id);
  }
  renderComments(comments) {
    if (!comments || !comments.length) {
      return <div>No comments to show yet..</div>;
    }
    return (
      <div className="ui relaxed divided list">
        {comments.map(comment => (
          <div className="item" key={comment._id}>
            <div className="content">
              <h4 className="header">{comment.text}</h4>
              <div className="description">{comment.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    const { singlePlant } = this.props;
    if (!singlePlant) {
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
    const {
      plant: { image, name, description },
      comments
    } = singlePlant;
    return (
      <div className="ui container">
        <div className="ui card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <h3 className="header">{name}</h3>
            <div className="description">{description}</div>
          </div>
        </div>
        {this.renderComments(comments)}
      </div>
    );
  }
}

const mapStateToProps = ({ singlePlant }) => ({ singlePlant });

export default connect(
  mapStateToProps,
  { fetchPlant }
)(requireAuth(SinglePlant));
