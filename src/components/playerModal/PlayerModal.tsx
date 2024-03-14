import { useState, Dispatch, SetStateAction } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { House, Player } from '../../types';
import { useAPI } from '../../hooks/useAPI';
import { PacmanLoader } from 'react-spinners';
import useFileUploader from '../../hooks/useFileUploader';

const p: Player = {
  house: 'A',
  draws: 0,
  goalsAgainst: 0,
  goalsFor: 0,
  imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
  losses: 0,
  wins: 0,
  matchesPlayed: 0,
  name: '',
};

type PlayerModalProps = {
  player?: Player,
  onClose: () => void,
  setPlayers: Dispatch<SetStateAction<Player[]>>;
};



const PlayerModal = ({ player = p, onClose, setPlayers }: PlayerModalProps) => {
  const isNew = !player.name.length;
  const [name, setName] = useState(player.name);
  const [house, setHouse] = useState(player.house);
  const [loading, setLoading] = useState(false);
  const { addPlayer } = useAPI();
  const { fileUploaderInput, handleUpload } = useFileUploader();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageUrl = await handleUpload();
    const updatedPlayer: Player = { ...player, name, imageUrl, house };
    if (isNew) {
      addPlayer(updatedPlayer);
      setPlayers((players) => [...players, updatedPlayer]);
    }
    setLoading(false);
    onClose();
  };


  return (
    <div className={style.container}>
      <form className={style.matchForm} onSubmit={handleSubmit}>
        <button className={style.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>Name</label>
          <input
            className={style.formInput}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>House</label>
          <select value={house} onChange={(e) => {
            setHouse(e.target.value as House);
          }}>
            {['A', 'B', 'C', 'D'].map((houseOpt) => (
              <option key={houseOpt} value={houseOpt}>
                {houseOpt}
              </option>
            ))}
          </select>
        </div>

        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>Image</label>
          {fileUploaderInput}
        </div>
        <button className={style.formButton} type='submit'>
          Update Player
        </button>
      </form>
      <PacmanLoader color="#ffffff" size='250px' className={style.loading} loading={loading} />

    </div>
  );
};

export default PlayerModal;
