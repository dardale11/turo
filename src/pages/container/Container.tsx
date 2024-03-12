import { useEffect, useState } from 'react';
import { matchesMock, playersMock } from '../../mockData';
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
    console.log('CA::I???ng API');
  }, []);



  const initData = async () => {
    try {
      const [playersData, matchesData] = await Promise.all([
        getAllPlayers(),
        getAllMatches(),
      ]);

      const playersArray = playersData.docs.map((doc) => doc.data());
      const matchesArray = matchesData.docs.map((doc) => doc.data());

      console.log(playersArray);
      console.log(matchesArray);

      // @ts-ignore
      setPlayers(playersArray);
      // @ts-ignore
      setMatches(matchesArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    < >
      {displayPageNum === 1 && <Matches matches={matches} switchPage={() => setDisplayPageNum(2)} allPlayers={players} />}
      {displayPageNum === 2 && <Rank players={players} switchPage={() => setDisplayPageNum(1)} />}
    </>
  );
};

export default Container;
