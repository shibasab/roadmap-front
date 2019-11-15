import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoadmaps } from '../../actions/roadmap';

export class Roadmap extends Component {
  static propTypes = {
    roadmap: PropTypes.array.isRequired,
    getRoadmaps: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRoadmaps();
  }

  render() {
    console.log(this.props.roadmap);
    return (
      <Fragment>
        <br></br>
        <h4>Roadmap List</h4>
        {this.props.roadmap.map(roadmap => (
          <li key={roadmap.id}>{roadmap.title}</li>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap.roadmap
});

export default connect(
  mapStateToProps,
  { getRoadmaps }
)(Roadmap);
