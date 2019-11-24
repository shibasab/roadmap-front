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
    let detail = this.props.detail;

    return (
      <Fragment>
        <div>
          <h2>{detail.title}</h2>
          <h4 style={{ fontWeight: 'lighter' }}>{detail.overview}</h4>
          <p>like: {detail.like}</p>
          {detail.roadmap ? (
            <div className="row" style={{ marginTop: '10px' }}>
              {detail.roadmap.map(roadmap => (
                <div key={roadmap.id} className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title" style={{ fontSize: '1.5em' }}>
                        {roadmap.title}
                      </p>
                      <p className="card-text" style={{ color: 'gray' }}>
                        {roadmap.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.roadmap.detail
});

export default withRouter(connect(mapStateToProps, { getDetails })(Detail));
