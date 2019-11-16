import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { getRoadmaps } from '../../actions/roadmap';

export class Roadmap extends Component {
  static propTypes = {
    roadmap: PropTypes.array.isRequired,
    getRoadmaps: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  handleClick = id => {
    this.props.history.push(`/roadmaps/${id}`);
  };

  componentDidMount() {
    this.props.getRoadmaps();
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <h4>Roadmap List</h4>
        <div className="list-group">
          {this.props.roadmap.map(roadmap => (
            <button
              key={roadmap.id}
              onClick={this.handleClick.bind(this, roadmap.id)}
              className="list-group-item list-group-item-action"
            >
              {roadmap.title}
            </button>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap.roadmap
});

export default withRouter(
  connect(
    mapStateToProps,
    { getRoadmaps }
  )(Roadmap)
);
