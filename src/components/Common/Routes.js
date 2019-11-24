import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import List from '../Pages/List';
import Detail from '../Pages/Detail';

export default class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/roadmaps" component={List} />
          <Route exact path="/roadmaps/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const NotFound = () => {
  return <p>ページが見つかりません</p>;
};
