import React from 'react';
import style from './style.module.css';

const MatchInfo = ({ matchData, onClick }) => {
  return (
    <div className={style.container} onClick={onClick}>
      <p className={style.date}> {matchData.date}</p>
      <div className={style.contentContainer}>
        <div className={style.playerContentContainer}>
          <img src={matchData.homePlayer.imageUrl} alt=':)' />
          <p>{matchData.homePlayer.name}</p>
          <p>{matchData.homePlayerGoals}</p>
        </div>
        <div className={style.playerContentContainer}>
          <img src={matchData.awayPlayer.imageUrl} alt=':)' />
          <p>{matchData.awayPlayer.name}</p>
          <p>{matchData.awayPlayerGoals}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
