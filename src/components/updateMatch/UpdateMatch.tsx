import React, { useState } from 'react';
import style from './style.module.css';
// import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import 'react-datepicker/dist/react-datepicker.css';

const md = {
  date: new Date(),
  player1: 'dar',
  player2: 'oren',
  score1: 2,
  score2: 2,
};

const um = () => {
  console.log('update');
};

const ap = ['dar', 'oren', 'david'];

const UpdatedMatch = ({
  matchData = md,
  onUpdateMatch = um,
  allPlayers = ap,
  onClose,
}) => {
  const [date, setDate] = useState(matchData.date);
  const [player1, setPlayer1] = useState(matchData.player1);
  const [player2, setPlayer2] = useState(matchData.player2);
  const [score1, setScore1] = useState(matchData.score1);
  const [score2, setScore2] = useState(matchData.score2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data if needed

    // Update match details
    const updatedMatch = {
      date: date,
      player1: player1,
      player2: player2,
      score1: score1,
      score2: score2,
    };

    // Call the onUpdateMatch function with the updated match data
    onUpdateMatch();
  };

  return (
    <div className={style.container}>
      <form className={style.matchForm} onSubmit={handleSubmit}>
        <button className={style.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>date</label>
          {/* <DatePicker
            className={style.datePicker}
            selected={date}
            onChange={(newDate) => setDate(newDate!)}
          // width='78px'
          /> */}
        </div>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>player #1</label>
          <select value={player1} onChange={(e) => setPlayer1(e.target.value)}>
            {allPlayers.map((player) => (
              <option key={player} value={player}>
                {player}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>goals</label>
          <input
            className={style.formInput}
            type='number'
            value={score1}
            onChange={(e) => setScore1(Number(e.target.value))}
          />
        </div>

        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>player #2:</label>
          <select value={player1} onChange={(e) => setPlayer2(e.target.value)}>
            {allPlayers.map((player) => (
              <option key={player} value={player}>
                {player}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formLabelWrapper}>
          <label className={style.formLabel}>goals</label>
          <input
            className={style.formInput}
            type='number'
            value={score2}
            onChange={(e) => setScore2(Number(e.target.value))}
          />
        </div>
        <button className={style.formButton} type='submit'>
          Update Match
        </button>
      </form>
    </div>
  );
};

export default UpdatedMatch;
