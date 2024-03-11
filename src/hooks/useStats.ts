export const useStats = () => {
  const getTableRows = (players) => {
    return players.map((player) => {
      return {
        name: player.name,
        points: player.wins * 3 + player.draws,
        wins: player.wins,
        losses: player.losses,
        draws: player.draws,
        matches: player.matches,
        goalsFor: player.goalsFor,
        goalsAgainst: player.goalsAgainst,
        goalDifference: player.goalsFor - player.goalsAgainst,
      };
    });
  };

  return {
    getTableRows,
  };
};
