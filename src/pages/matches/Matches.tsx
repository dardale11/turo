import React, { useState } from 'react';
import MatchInfo from '../../components/matchInfo/MatchInfo';
import style from './style.module.css';
import UpdatedMatch from '../../components/updateMatch/UpdateMatch';

const Matches = ({ matches, switchPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState();

  const handleMatchSelect = (matchData) => {
    setSelectedMatch(matchData);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(undefined);
  };

  return (
    <div className={style.container}>
      <button onClick={switchPage}>switch</button>
      <button
        className={style.addButton}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        +
      </button>
      {matches.map((matchData) => (
        <MatchInfo
          matchData={matchData}
          onClick={() => handleMatchSelect(matchData)}
        />
      ))}
      {isModalOpen && (
        // @ts-ignore
        <UpdatedMatch onClose={onCloseModal} match={selectedMatch} />
      )}
    </div>
  );
};

export default Matches;
