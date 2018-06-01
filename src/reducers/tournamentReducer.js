import * as types from '../constants/TournamentConstants';
import _ from 'lodash';

function createTeamBlank(teamName) {
  return {
    name: teamName,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0
  };
}

function processingTournamentData(state, stats) {
  _.forEach(stats.rounds, (round, index) => {
    const roundNumber = index + 1;

    _.forEach(round.matches, (match) => {
      match.roundNumber = roundNumber;
      match.team1.score = match.score1;
      match.team2.score = match.score2;

      delete match.score1;
      delete match.score2;
    });
  });

  return {
    teamsStats: calculateStandings(stats.rounds.length, stats),
    rounds: stats.rounds,
    allRoundsLength: stats.rounds.length,
    tournamentData: stats
  };
}

function calculateStandings(numLastRound, tournamentData) {
  const teams = {};

  _(tournamentData.rounds).take(numLastRound).map('matches').flatten().forEach((match) => {
    const homeTeamKey = match.team1.key;
    const guestTeamKey = match.team2.key;
    const homeTeamScore = match.team1.score;
    const guestTeamScore = match.team2.score;

    teams[homeTeamKey] ? _.noop() : teams[homeTeamKey] = createTeamBlank(homeTeamKey);
    teams[guestTeamKey] ? _.noop() : teams[guestTeamKey] = createTeamBlank(guestTeamKey);

    teams[homeTeamKey].played++;
    teams[guestTeamKey].played++;

    teams[homeTeamKey].goalsFor = teams[homeTeamKey].goalsFor + match.team1.score;
    teams[guestTeamKey].goalsFor = teams[guestTeamKey].goalsFor + match.team2.score;

    teams[homeTeamKey].goalsAgainst = teams[homeTeamKey].goalsAgainst + match.team2.score;
    teams[guestTeamKey].goalsAgainst = teams[guestTeamKey].goalsAgainst + match.team1.score;

    teams[homeTeamKey].goalDifference = teams[homeTeamKey].goalsFor - teams[homeTeamKey].goalsAgainst;
    teams[guestTeamKey].goalDifference = teams[guestTeamKey].goalsFor - teams[guestTeamKey].goalsAgainst;

    if (homeTeamScore > guestTeamScore) {
      teams[homeTeamKey].points = teams[homeTeamKey].points + 3;

      teams[homeTeamKey].won++;
      teams[guestTeamKey].lost++;
    } else if (homeTeamScore < guestTeamScore) {
      teams[guestTeamKey].points = teams[guestTeamKey].points + 3;

      teams[guestTeamKey].won++;
      teams[homeTeamKey].lost++;
    } else {
      teams[homeTeamKey].points = teams[homeTeamKey].points + 1;
      teams[guestTeamKey].points = teams[guestTeamKey].points + 1;

      teams[homeTeamKey].drawn++;
      teams[guestTeamKey].drawn++;
    }
  });

  return _(teams).orderBy(['points', 'goalDifference', 'goalsFor'], ['desc', 'desc', 'desc'])
    .map((teamStats, index) => {
      return _.assignIn(teamStats, { position: index + 1 });
    }).value();
}

function recalculateStandings(state, round, tournamentData) {
  let newStandings = calculateStandings(round, tournamentData);
  const currentSelectedTeam = _.find(state.teamsStats, 'selected');

  let newState = {
    teamsStats: newStandings,
    rounds: _.take(tournamentData.rounds, round)
  };

  if (currentSelectedTeam) {
    newState.teamsStats = calculateResultsOfTeam(newState, currentSelectedTeam.name);
  }

  newState.teamsStats = _.map(state.teamsStats, (teamStats) => {
    const teamName = teamStats.name;
    return _.merge(teamStats, _.find(newState.teamsStats, { name: teamName }));
  });

  return newState;
}

function calculateResultsOfTeam(state, targetTeamName) {
  const enemyTeamsNames = _.map(state.teamsStats, 'name');

  const matchesWithTargetTeam = _(state.rounds).map('matches').flatten().value().filter((match) => {
    return _.intersection([match.team1.key, match.team2.key], [targetTeamName]).length;
  });

  const teamsStatsCopy = state.teamsStats.slice(0);
  const currentSelectedTeam = _.find(teamsStatsCopy, 'selected');

  if (currentSelectedTeam) {
    currentSelectedTeam.selected = false;
  }

  const newSelectedTeam = _.find(teamsStatsCopy, { name: targetTeamName });
  let isReset = false;

  if (currentSelectedTeam && currentSelectedTeam === newSelectedTeam) {
    newSelectedTeam.selected = false;
    isReset = true;
  } else {
    newSelectedTeam.selected = true;
  }

  _.map(enemyTeamsNames, (enemyTeamName, index) => {
    state.teamsStats[index].additionStatsScore = null;
    state.teamsStats[index].additionStatsGame1 = null;
    state.teamsStats[index].additionStatsGame2 = null;

    if (enemyTeamName === targetTeamName || isReset) {
      return false;
    }

    const amongTeamsMatches = _.filter(matchesWithTargetTeam, (game) => {
      return _.intersection([game.team1.key, game.team2.key], [enemyTeamName, targetTeamName]).length === 2
    });

    [ teamsStatsCopy[index].additionStatsGame1, teamsStatsCopy[index].additionStatsGame2 ]
      = _.take(amongTeamsMatches.concat(_.times(2, _.constant(null))), 2);


    _.forEach(amongTeamsMatches, (game) => {
      const teamsArray =[ game.team1, game.team2 ];

      const enemyTeam = _.find(teamsArray, { key: enemyTeamName });
      const targetTeam = _.pull(teamsArray, enemyTeam)[0];

      if (targetTeam.score > enemyTeam.score) {
        state.teamsStats[index].additionStatsScore += 3;
        game.result = 'win';
      } else if (targetTeam.score === enemyTeam.score) {
        state.teamsStats[index].additionStatsScore += 1;
        game.result = 'draw';
      } else {
        state.teamsStats[index].additionStatsScore += 0;
        game.result = 'lose';
      }
    });
  });

  return teamsStatsCopy;
}

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
