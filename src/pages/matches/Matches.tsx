import React, { Dispatch, SetStateAction, useState } from 'react';
import MatchInfo from '../../components/matchInfo/MatchInfo';
import style from './style.module.css';
import MatchModal from '../../components/matchModal/MatchModal';
import SecureModal from '../../components/secureModal/SecureModal';
import { Match, Player } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const m: Match = { awayGoals: 0, homeGoals: 0, awayPlayer: null, homePlayer: null };

type MatchProps = {
  matches: Match[], switchPage: () => void, allPlayers: Player[], setMatches: Dispatch<SetStateAction<Match[]>>;
};

const Matches = ({ matches, switchPage, allPlayers, setMatches }: MatchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(m);

  const handleMatchSelect = (matchData) => {
    setSelectedMatch(matchData);
    setIsSecureModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(m);
  };

  return (
    <div className={style.container}>
      <button
        className={style.switchButton}
        onClick={switchPage}
      >
        <FontAwesomeIcon icon={faRightLong} />
      </button>
      <div className={style.addButtonWrapper}>
        <button
          className={style.addButton}
          onClick={() => {
            setSelectedMatch(m);
            setIsSecureModalOpen(true);
          }}
        >
          +
        </button>
        add match
      </div>
      {matches.map((matchData, index) => (
        <MatchInfo
          key={index}
          matchData={matchData}
          onClick={() => handleMatchSelect(matchData)}
        />
      ))}
      {isModalOpen && (
        <MatchModal onClose={onCloseModal} matchData={selectedMatch} allPlayers={allPlayers} setMatches={setMatches} />
      )}
      {isSecureModalOpen && (
        <SecureModal onClose={() => setIsSecureModalOpen(false)} onSuccess={() => setIsModalOpen(true)} />
      )}
    </div>
  );
};

export default Matches;
