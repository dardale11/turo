import { useEffect, useState } from 'react';
import Matches from '../matches/Matches';
import Rank from '../rank/Rank';
import { useAPI } from '../../hooks/useAPI';
import { Match, Player } from '../../types';

const Container = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [displayPageNum, setDisplayPageNum] = useState(1);

  const { getAllMatches, getAllPlayers } = useAPI();

  useEffect(() => {
    initData();
  }, []);



  const initData = async () => {
    try {
      const [playersData, matchesData] = await Promise.all([
        getAllPlayers(),
        getAllMatches(),
      ]);

      const playersArray = playersData.docs.map((doc) => doc.data());
      const matchesArray = matchesData.docs.map((doc) => doc.data());

      setPlayers(playersArray as Player[]);
      setMatches(matchesArray as Match[]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    < >
      {displayPageNum === 1 && <Matches matches={matches} switchPage={() => setDisplayPageNum(2)} setMatches={setMatches} allPlayers={players} />}
      {displayPageNum === 2 && <Rank players={players} setPlayers={setPlayers} switchPage={() => setDisplayPageNum(1)} />}
    </>
  );
};

export default Container;
