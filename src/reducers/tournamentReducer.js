import * as types from '../constants/TournamentConstants';

import {
  calculateResultsOfTeam,
  recalculateStandings,
  processingTournamentData
} from './helpers/tournamentHelpers';

const initialState = {
  teamsStats: [],
  rounds: [],
  tournamentData: {},
  allRoundsLength: null
};

export default function tableRow(state = initialState, action) {
  switch (action.type) {

    case types.TEAM_NAME_CLICK:
      return {
        ...state,
        teamsStats: calculateResultsOfTeam(state, action.name)
      };

    case types.RECALCULATE_STANDINGS: {
      const { teamsStats, rounds } = recalculateStandings(state, action.round, state.tournamentData);

      return {
        ...state,
        teamsStats,
        rounds
      };
    }

    case types.PROCESSING_TOURNAMENT_DATA:
      return processingTournamentData(state, action.stats);

    default:
      return state;
  }
}
