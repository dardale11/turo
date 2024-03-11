import React from 'react';
import style from './style.module.css';
import RankTable from '../../components/rankTable/RankTable';

const Rank = ({ players, switchPage }) => {
  return (
    <div className={style.container}>
      <button onClick={switchPage}>switch</button>
      <RankTable players={players} />
    </div>
  );
};

export default Rank;
