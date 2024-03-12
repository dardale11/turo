import React from 'react';
import style from './style.module.css';
import { Match } from '../../types';

type MatchInfoProps = {
  matchData: Match,
  onClick: () => void,
};

const MatchInfo = ({ matchData, onClick }: MatchInfoProps) => {
  return (
    <div className={style.container} onClick={onClick}>
      <div className={style.contentContainer}>
        <div className={style.playerContentContainer}>
          <img src={matchData.homePlayer?.imageUrl} alt=':)' />
          <p>{matchData.homePlayer?.name}</p>
          <p>{matchData.homeGoals}</p>
        </div>
        <div className={style.playerContentContainer}>
          <img src={matchData.awayPlayer?.imageUrl} alt=':)' />
          <p>{matchData.awayPlayer?.name}</p>
          <p>{matchData.awayGoals}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
