import './AnotherContainer.styl';

import React, {
  Component,
} from 'react';

import Type from 'prop-types';

import { bindActionCreators }       from 'redux';
import { connect }                  from 'react-redux';
import { NavLink as Link }          from 'react-router-dom';

import {
  TestActions,
} from 'actions';

@connect(state => ({
  testData: state.testReducer
}), dispatch => ({
  actions: bindActionCreators(TestActions, dispatch)
}))
export default class AnotherContainer extends Component {
  /**
   * Validates passed properties
   */
  static propTypes = {
    actions: Type.object,
    testData: Type.object
  };

  /**
   * Renders 'AnotherContainer' component
   */
  render() {
    return (
      <div className="another-container-root">
        Another Container
        <Link exact={true} to="/">Go to main page</Link>
      </div>
    );
  }
}
