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

export function processingTournamentData(stats) {
  return {
    type: types.PROCESSING_TOURNAMENT_DATA,
    stats
  }
}

export function loadTournamentData() {
  return function (dispatch) {
    return fetch(`${ document.location.href }stats-data/germany-13-14.json`)
      .then(request => request.json())
      .then(stats	=>	{
        dispatch(processingTournamentData(stats));
      });
  }
}
