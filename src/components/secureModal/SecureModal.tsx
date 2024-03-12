import React, { useState } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SecureModal = ({ onSuccess, onClose }) => {
  const [ans, setAns] = useState<string>('');
  const pass = 'kansai';

  const handleCheck = (e) => {
    e.preventDefault();
    if (ans.toLowerCase().includes(pass)) {
      onClose();
      onSuccess();
    } else {
      alert('sorry, you shall no pass!');
    }
  };

  return (
    <div className={style.container}>
      <form className={style.modal} onSubmit={handleCheck}>
        <button type='button' className={style.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <p>new asian restaurant?</p>
        <input
          className={style.formInput}
          type='text'
          value={ans}
          onChange={(e) => setAns(e.target.value)}
        />
        <button className={style.applyButton} type='submit' >
          ok
        </button>
      </form>
    </div>
  );
};

export default SecureModal;