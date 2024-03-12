import { useState } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Player } from '../../types';
import { useAPI } from '../../hooks/useAPI';

const p: Player = {
  draws: 0,
  goalsAgainst: 0,
  goalsFor: 0,
  imageUrl: 'https://mhaifafc.com/assets/images/logo.png',
  losses: 0,
  wins: 0,
  matchesPlayed: 0,
  name: '',
};

const PlayerModal = ({ player = p, onClose }) => {
  const isNew = !player.name.length;
  const [name, setName] = useState(player.name);
  const [imageUrl, setImageUrl] = useState(player.imageUrl);
  const { addPlayer } = useAPI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNew) {
      addPlayer({ ...player, name, imageUrl });
    }
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
          <label className={style.formLabel}>Image</label>
          <input
            className={style.formInput}
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button className={style.formButton} type='submit'>
          Update Player
        </button>
      </form>
    </div>
  );
};

export default PlayerModal;
