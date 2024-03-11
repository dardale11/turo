import React, { useState } from 'react';
import Matches from './pages/matches/Matches';
import RankTable from './components/rankTable/RankTable';
import Container from './pages/container/Container';
import style from './app.module.css';
import Rank from './pages/rank/Rank';

const homePlayer = {
  name: 'dar',
  matches: 5,
  imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
  wins: 3,
  ties: 1,
  losses: 1,
  goals: 5,
  goalsIn: 2,
};

const awayPlayer = {
  name: 'dar',
  matches: 5,
  imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
  wins: 3,
  ties: 1,
  losses: 1,
  goals: 5,
  goalsIn: 2,
};

const matchData = {
  date: '23-03-90',
  homePlayer,
  awayPlayer,
  awayPlayerGoals: 1,
  homePlayerGoals: 2,
};

const playersMock = [
  {
    name: 'dar1',
    matches: 5,
    imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
    wins: 3,
    ties: 1,
    losses: 1,
    goals: 5,
    goalsIn: 2,
  },
  {
    name: 'dar2',
    matches: 5,
    imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
    wins: 2,
    ties: 2,
    losses: 1,
    goals: 3,
    goalsIn: 2,
  },
  {
    name: 'dar3',
    matches: 4,
    imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
    wins: 3,
    ties: 1,
    losses: 0,
    goals: 2,
    goalsIn: 2,
  },
  {
    name: 'dar4',
    matches: 5,
    imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
    wins: 3,
    ties: 1,
    losses: 1,
    goals: 5,
    goalsIn: 2,
  },
  {
    name: 'dar5',
    matches: 5,
    imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
    wins: 3,
    ties: 1,
    losses: 1,
    goals: 5,
    goalsIn: 2,
  },
];

const matchesMock = [matchData, matchData, matchData, matchData, matchData];


function App() {
  const [matches, setMatches] = useState(matchesMock);
  const [players, setPlayers] = useState(playersMock);
  const [displayPageNum, setDisplayPageNum] = useState(1);

  return (
    <div className={style.App}>
      {displayPageNum === 1 && <Matches matches={matches} switchPage={() => setDisplayPageNum(2)} />}
      {displayPageNum === 2 && <Rank players={players} switchPage={() => setDisplayPageNum(1)} />}
    </div>
  );
}

export default App;
