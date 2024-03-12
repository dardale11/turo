import { useState } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Match, Player } from '../../types';
import { useAPI } from '../../hooks/useAPI';

type MatchModalProps = {
  matchData: Match,
  allPlayers: Player[],
  onClose: () => void,
};

const MatchModal = ({
  matchData,
  allPlayers,
  onClose,
}: MatchModalProps) => {
  const [homePlayer, setHomePlayer] = useState<Player | null>(matchData.homePlayer);
  const [awayPlayer, setAwayPlayer] = useState<Player | null>(matchData.awayPlayer);
  const [homeGoals, setHomeGoals] = useState(matchData.homeGoals);
  const [awayGoals, setAwayGoals] = useState(matchData.awayGoals);
  const { addMatch, updatePlayerStats } = useAPI();

  const onUpdateMatch = async () => {
    const match: Match = { awayGoals, homeGoals, awayPlayer, homePlayer };
    await Promise.all([
      addMatch(match),
      updatePlayerStats(homePlayer, homeGoals, awayGoals),
      updatePlayerStats(awayPlayer, awayGoals, homeGoals),
    ]);

    // add match locally
  };

  const validate = () => {
    if (!homePlayer || !awayPlayer) {
      alert("choose players");
      return false;
    }
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onUpdateMatch();
      onClose();
    }
  };

  return (
    <div className={style.container}>
      <form className={style.matchForm} onSubmit={handleSubmit}>
        <button className={style.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>player #1</label>
          <select value={homePlayer?.name} onChange={(e) => {
            const homePlayer = allPlayers.find(player => player.name === e.target.value);
            setHomePlayer(homePlayer ?? null);
          }}>
            <option value=''>Select Player</option>
            {allPlayers.map((player) => (
              <option key={player.name} value={player.name}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>goals</label>
          <input
            className={style.formInput}
            type='number'
            value={homeGoals}
            onChange={(e) => setHomeGoals(Number(e.target.value))}
          />
        </div>

        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>player #2</label>
          <select value={awayPlayer?.name} onChange={(e) => {
            const awayPlayer = allPlayers.find(player => player.name === e.target.value);
            setAwayPlayer(awayPlayer ?? null);
          }}>
            <option value=''>Select Player</option>
            {allPlayers.map((player) => (
              <option key={player.name} value={player.name}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>goals</label>
          <input
            className={style.formInput}
            type='number'
            value={awayGoals}
            onChange={(e) => setAwayGoals(Number(e.target.value))}
          />
        </div>
        <button className={style.formButton} type='submit'>
          Update Match
        </button>
      </form>
    </div>
  );
};

export default MatchModal;
