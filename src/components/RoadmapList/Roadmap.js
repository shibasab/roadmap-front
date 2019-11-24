import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRoadmaps } from '../../actions/roadmap';

export class Roadmap extends Component {
  static propTypes = {
    roadmap: PropTypes.array.isRequired,
    getRoadmaps: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  arrangeTime = time => {
    return time.split('T')[0];
  };

  componentDidMount() {
    this.props.getRoadmaps();
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <div className="">
          {this.props.roadmap.map(roadmap => (
            <div key={roadmap.id} className="mb-3">
              <div className="">
                <Link
                  to={`/roadmaps/${roadmap.id}`}
                  className="card-title text-dark"
                  style={{
                    fontSize: '1.5em'
                  }}
                >
                  {roadmap.title}
                </Link>
                <p
                  className="card-text"
                  style={{ margin: '0px', color: 'gray' }}
                >
                  {roadmap.overview}
                </p>
                <div className="row">
                  <p>like : {roadmap.like}</p>
                  <p style={{ marginLeft: '10px' }}>
                    {this.arrangeTime(roadmap.created_at)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap.roadmap
});

export default withRouter(connect(mapStateToProps, { getRoadmaps })(Roadmap));
