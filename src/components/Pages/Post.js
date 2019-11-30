import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postRoadmap } from '../../actions/roadmap';

export class Post extends Component {
  state = {
    title: '',
    overview: '',
    roadmap: []
  };

  static propTypes = {
    postRoadmap: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, overview, roadmap } = this.state;
    const proadmap = { title, overview, roadmap };
    this.props.postRoadmap(proadmap);
    this.setState({
      title: '',
      overview: '',
      roadmap: []
    });
    this.props.history.push('/roadmaps');
  };

  render() {
    const { title, overview, roadmap } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>ロードマップを投稿する</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>タイトル</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>概要</label>
            <input
              className="form-control"
              type="text"
              name="overview"
              onChange={this.onChange}
              value={overview}
            />
          </div>

          <div className="form-group">
            <button to={`/roadmaps`} type="submit" className="btn btn-primary">
              投稿
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { postRoadmap })(Post);
