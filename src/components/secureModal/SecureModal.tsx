import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SecureModal = ({ onSuccess, onClose }) => {
  const [ans, setAns] = useState<string>('');
  const pass = 'kansai';
  const inputRef = useRef<HTMLInputElement>(null); // Specify HTMLInputElement type

  useEffect(() => {
    // Focus on the input element when the component mounts
    // if (inputRef.current) {
    inputRef.current!.focus(); // Check if inputRef.current is not null
    // }
  }, []); // Empt


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
          ref={inputRef}
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