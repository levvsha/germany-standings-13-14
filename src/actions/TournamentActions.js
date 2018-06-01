import * as types from '../constants/TournamentConstants';

export function teamNameClick(name) {
  return {
    type: types.TEAM_NAME_CLICK,
    name
  };
}

export function recalculateStandings(round) {
  return {
    type: types.RECALCULATE_STANDINGS,
    round
  }
}
