import React, { useState } from 'react';
import MatchInfo from '../../components/matchInfo/MatchInfo';
import style from './style.module.css';
import MatchModal from '../../components/matchModal/MatchModal';
import SecureModal from '../../components/secureModal/SecureModal';
import { Match } from '../../types';

const newMatch: Match = { awayGoals: 0, homeGoals: 0, awayPlayer: null, homePlayer: null };

const Matches = ({ matches, switchPage, allPlayers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(newMatch);

  const handleMatchSelect = (matchData) => {
    setSelectedMatch(matchData);
    setIsSecureModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(newMatch);
  };

  return (
    <div className={style.container}>
      <button
        className={style.switchButton}
        onClick={switchPage}
      >
        {'->'}
      </button>
      <button
        className={style.addButton}
        onClick={() => {
          setSelectedMatch(newMatch);
          setIsSecureModalOpen(true);
        }}
      >
        +
      </button>
      {matches.map((matchData, index) => (
        <MatchInfo
          key={index}
          matchData={matchData}
          onClick={() => handleMatchSelect(matchData)}
        />
      ))}
      {isModalOpen && (
        // @ts-ignore
        <MatchModal onClose={onCloseModal} matchData={selectedMatch} allPlayers={allPlayers} />
      )}
      {isSecureModalOpen && (
        <SecureModal onClose={() => setIsSecureModalOpen(false)} onSuccess={() => setIsModalOpen(true)} />
      )}
    </div>
  );
};

export default Matches;
