import './TournamentTable.styl';
import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import Type from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tournamentActions } from '../../actions';
import { TableRow } from '../../components';
import Slider from 'rc-slider';

const mapStateToProps = state => ({
  teamsStats: state.tournamentReducer.teamsStats,
  rounds: state.tournamentReducer.rounds,
  allRoundsLength: state.tournamentReducer.allRoundsLength
});

const mapDispatchToProps = dispatch => ({
  tournamentActions: bindActionCreators(tournamentActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class TournamentTableApp extends Component {
  static propTypes = {
    allRoundsLength: Type.number,
    rounds: Type.array,
    teamsStats: Type.array,
    tournamentActions: Type.shape({
      loadTournamentData: Type.func.isRequired,
      processingTournamentData: Type.func.isRequired,
      recalculateStandings: Type.func.isRequired,
      teamNameClick: Type.func.isRequired
    })
  };

  componentDidMount()	{
    this.props.tournamentActions.loadTournamentData();
  }

  render() {
    const { teamsStats } = this.props;
    const roundsLength = this.props.allRoundsLength;

    const tableRows = teamsStats.map((teamStats, index) => {
      return (
        <TableRow
          key={ index }
          rowStats={ teamStats }
          rowActions={this.props.rowActions}/>
      );
    });

    return (
      <div className="row">
        <div className="slider-container col-xs-11 col-xs-push-1">
          <Slider
            dots
            min={1}
            step={1}
            onChange={this.props.rowActions.recalculateStandings}
            defaultValue={roundsLength}
            max={roundsLength}
          />
        </div>
        <div className="col-xs-11 col-xs-push-1">
          <table className="tournament-table table">
            <thead>
              <tr>
                <th>
                </th>
                <th className="team-name">
                  Team
                </th>
                <th>
                  P
                </th>
                <th>
                  W
                </th>
                <th>
                  D
                </th>
                <th>
                  L
                </th>
                <th className="goal-stats">
                  Gs
                </th>
                <th>
                  Gd
                </th>
                <th>
                  Pt
                </th>
              </tr>
            </thead>
            <tbody className="tournament-table-body">
              { tableRows }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}