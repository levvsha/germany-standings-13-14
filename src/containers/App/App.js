import './App.styl';

import React from 'react';
import Type from 'prop-types';

import ProjectRawTheme from '../../theme/material_ui_raw_theme';
import { getMuiTheme } from 'material-ui/styles';

import { asyncComponent } from 'react-async-component';
import { Route, Switch } from 'react-router-dom';

const AnotherContainer = asyncComponent({
  resolve: () => import('../AnotherContainer/AnotherContainer') //eslint-disable-line no-undef
});

const InitialContainer = asyncComponent({
  resolve: () => import('../InitialContainer/InitialContainer') //eslint-disable-line no-undef
});

export default class App extends React.Component {
  static propTypes = {
    children: Type.array
  }

  static get childContextTypes() {
    return { muiTheme: Type.object };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(ProjectRawTheme) };
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route key="/" exact={true} path="/" component={InitialContainer} />
          <Route key="/another" exact={true} path="/another/test" component={AnotherContainer} />
        </Switch>
      </div>
    );
  }
}
