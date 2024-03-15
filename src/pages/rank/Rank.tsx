import { Dispatch, SetStateAction, useState } from 'react';
import style from './style.module.css';
import RankTable from '../../components/rankTable/RankTable';
import PlayerModal from '../../components/playerModal/PlayerModal';
import SecureModal from '../../components/secureModal/SecureModal';
import { House, Player } from '../../types';

type RankProps = {
  players: Player[];
  switchPage: () => void;
  setPlayers: Dispatch<SetStateAction<Player[]>>;
};
const Rank = ({ players, switchPage, setPlayers }: RankProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();
  const [toggle, setToggle] = useState(false);

  // const handlePlayerClicked = (player: Player) => {
  //   setSelectedPlayer(player)
  //   setIsSecureModalOpen(true)
  // }

  return (
    <div className={style.container}>
      <div className={style.addButtonWrapper}>
        <button
          className={style.addButton}
          onClick={() => {
            setSelectedPlayer(undefined);
            setIsSecureModalOpen(true);
          }}
        >
          +
        </button>
        add player
      </div>
      <button className={style.switchButton} onClick={switchPage}>
        {'<-'}
      </button>
      <button
        className={style.toggleButton}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle ? 'View Houses' : 'View All'}
      </button>
      {toggle && (
        <>
          <div className={style.tableTitle}>All</div>
          <RankTable players={players} />
        </>
      )}
      {!toggle &&
        ['A', 'B', 'C', 'D'].map((house) => (
          <div style={{ margin: '0 8px' }}>
            <div className={style.tableTitle}>House {house}</div>
            <RankTable
              players={players.filter(
                (player) => player.house === (house as House),
              )}
            />
          </div>
        ))}

      {isModalOpen && (
        <PlayerModal
          onClose={() => setIsModalOpen(false)}
          player={selectedPlayer}
          setPlayers={setPlayers}
        // onPlayerClick={handlePlayerClicked}
        />
      )}
      {isSecureModalOpen && (
        <SecureModal
          onClose={() => setIsSecureModalOpen(false)}
          onSuccess={() => setIsModalOpen(true)}
        />
      )}
    </div>
  );
};

export default Rank;
