import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Player } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

type PlayerChooserProps = {
  players: Player[];
  selectedPlayer?: Player;
  setSelectedPlayer: Dispatch<SetStateAction<Player>>;
  editMode?: boolean;
};

const PlayerChooser = ({
  players,
  selectedPlayer,
  setSelectedPlayer,
  editMode = false,
}: PlayerChooserProps) => {
  const [PlayerIndex, setPlayerIndex] = useState(0);

  useEffect(() => {
    const index = players.findIndex((p) => p.name === selectedPlayer?.name);
    setPlayerIndex(index);
  }, [selectedPlayer]);

  const handleUp = () => {
    const nextPlayer = players[(PlayerIndex + 1) % players.length];
    setSelectedPlayer(nextPlayer);
  };
  const handleDown = () => {
    const nextPlayer = players[(PlayerIndex - 1) % players.length];
    setSelectedPlayer(nextPlayer);
  };
  const tempPlayerImg =
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg";
  return (
    <div className={style.container}>
      {editMode && (
        <button onClick={handleUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <img src={selectedPlayer?.imageUrl ?? tempPlayerImg} alt="" />
      {editMode && (
        <button onClick={handleDown}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      )}
    </div>
  );
};

export default PlayerChooser;
