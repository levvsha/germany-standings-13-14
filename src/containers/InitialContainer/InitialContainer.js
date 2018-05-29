import './InitialContainer.styl';

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

import { DummyComponent } from 'components';

@connect(state => ({
  testData: state.testReducer
}), dispatch => ({
  actions: bindActionCreators(TestActions, dispatch)
}))
export default class InitialContainer extends Component {
  /**
   * Validates passed properties
   */
  static propTypes = {
    actions: Type.object,
    testData: Type.object
  };

  /**
   * Invokes after the initial rendering of component
   */
  componentDidMount() {
    this.props.actions.testAction();
  }

  /**
   * Renders 'InitialContainer' component
   */
  render() {
    console.log('this.props.testData.message ==>', this.props.testData.message);

    return (
      <div className="c-initial-container-root">
        <DummyComponent />
        <Link exact={true} to="/another/test">Go to another route</Link>
      </div>
    );
  }
}
