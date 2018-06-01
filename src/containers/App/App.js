import './App.styl';
import './bootstrap.styl';

import React from 'react';
import Type from 'prop-types';
import { Provider } from 'react-redux';
import TournamentTable from '../TournamentTable';
import configureStore from '../../store/configureStore.js'

const store = configureStore();

export default class App extends React.Component {
  static propTypes = {
    children: Type.array
  }

  render() {
    return (
      <div>
        <Provider store={ store } >
          <TournamentTable/>
        </Provider>
      </div>
    );
  }
}
