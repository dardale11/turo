import React, { useState } from 'react';
import style from './style.module.css';
import RankTable from '../../components/rankTable/RankTable';
import PlayerModal from '../../components/playerModal/PlayerModal';
import SecureModal from '../../components/secureModal/SecureModal';
import { Player } from '../../types';

const Rank = ({ players, switchPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  const handlePlayerClicked = (player: Player) => {
    setSelectedPlayer(player);
    setIsSecureModalOpen(true);

  };

  return (
    <div className={style.container}>
      <button
        className={style.addButton}
        onClick={() => {
          setSelectedPlayer(undefined);
          setIsSecureModalOpen(true);
        }}
      >
        +
      </button>
      <button
        className={style.switchButton}
        onClick={switchPage}
      >
        {'<-'}
      </button>
      <RankTable players={players} />
      {isModalOpen && (
        // @ts-ignore
        <PlayerModal onClose={() => setIsModalOpen(false)} player={selectedPlayer} onPlayerClick={handlePlayerClicked} />
      )}
      {isSecureModalOpen && (
        <SecureModal onClose={() => setIsSecureModalOpen(false)} onSuccess={() => setIsModalOpen(true)} />
      )}
    </div>
  );
};

export default Rank;
