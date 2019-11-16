import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { getDetails } from '../../actions/roadmap';

export class Detail extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired,
    getDetails: PropTypes.func.isRequired
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetails(id);
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <h4>Roadmap Details</h4>
        <div className="list-group">
          <p>{this.props.detail.title}</p>
          <p>{this.props.detail.detail}</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.roadmap.detail
});

export default withRouter(
  connect(
    mapStateToProps,
    { getDetails }
  )(Detail)
);
