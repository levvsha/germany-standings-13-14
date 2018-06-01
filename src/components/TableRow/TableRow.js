import React, { Component } from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const gameStatsPropTypes = Type.shape({
  date: Type.string.isRequired,
  result: Type.oneOf['win', 'draw', 'lose'],
  roundNumber: Type.number.isRequired,
  team1: Type.shape({
    code: Type.string.isRequired,
    key: Type.string.isRequired,
    name: Type.string.isRequired,
    score: Type.number.isRequired
  }).isRequired,
  team2: Type.shape({
    code: Type.string.isRequired,
    key: Type.string.isRequired,
    name: Type.string.isRequired,
    score: Type.number.isRequired
  }).isRequired
});

export default class TableRow extends Component {
  static propTypes = {
    rowStats: Type.shape({
      additionStatsGame1: gameStatsPropTypes,
      additionStatsGame2: gameStatsPropTypes,
      additionStatsScore: Type.number,
      drawn: Type.number.isRequired,
      goalDifference: Type.number.isRequired,
      goalsAgainst: Type.number.isRequired,
      goalsFor: Type.number.isRequired,
      lost: Type.number.isRequired,
      name: Type.string.isRequired,
      played: Type.number.isRequired,
      points: Type.number.isRequired,
      position: Type.number.isRequired,
      won: Type.number.isRequired
    }),
    rowClickAction: Type.func.isRequired
  };

  onTeamNameClick() {
    this.props.rowClickAction(this.props.rowStats.name);
  }

  render() {
    const rowStyle = {
      transform: `translateY(${ this.props.rowStats.position * 28 }px)`
    };

    const { position,
      name,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalDifference,
      points,
      additionStatsScore,
      additionStatsGame1,
      additionStatsGame2,
      selected } = this.props.rowStats;

    return (
      <tr
        style={ rowStyle }
        onClick={::this.onTeamNameClick}
        className={classNames('tournament-table-row', { selected : selected })}
      >
        <td>
          { position }
        </td>
        <td className="team-name">
          { name }
        </td>
        <td>
          { played }
        </td>
        <td>
          { won }
        </td>
        <td>
          { drawn }
        </td>
        <td>
          { lost }
        </td>
        <td className="goal-stats">
          { goalsFor } - { goalsAgainst }
        </td>
        <td>
          { goalDifference }
        </td>
        <td>
          { points }
        </td>
        <td className={classNames('addition-cell score', { visible : _.isFinite(additionStatsScore) })}>
          { additionStatsScore }
        </td>
        <td className={classNames('addition-cell',
          { visible : additionStatsGame1 },
          { win: additionStatsGame1 && additionStatsGame1.result === 'win' },
          { draw: additionStatsGame1 && additionStatsGame1.result === 'draw' },
          { lose: additionStatsGame1 && additionStatsGame1.result === 'lose' }
        )}>
          { additionStatsGame1 &&
          <div>
            <span>
              { additionStatsGame1.team1.key }
            </span>
            &nbsp;{ additionStatsGame1.team1.score }
            <span>&nbsp;:&nbsp;</span>
            { additionStatsGame1.team2.score }&nbsp;
            <span>
              { additionStatsGame1.team2.key }
            </span>
          </div>
          }
        </td>
        <td className={classNames('addition-cell',
          { visible : additionStatsGame2 },
          { win: additionStatsGame2 && additionStatsGame2.result === 'win' },
          { draw: additionStatsGame2 && additionStatsGame2.result === 'draw' },
          { lose: additionStatsGame2 && additionStatsGame2.result === 'lose' }
        )}>
          { additionStatsGame2 &&
          <div>
            <span>
              { additionStatsGame2.team1.key }
            </span>
            &nbsp;{ additionStatsGame2.team1.score }
            <span>&nbsp;:&nbsp;</span>
            { additionStatsGame2.team2.score }&nbsp;
            <span>
              { additionStatsGame2.team2.key }
            </span>
          </div>
          }
        </td>
      </tr>
    );
  }
}
