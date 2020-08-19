import React from "react";
import PT from "prop-types";
import styles from "./Cell.module.css";
import { useDispatch } from "react-redux";
import { setGame } from "../../store/grid-slice";

// https://stackoverflow.com/questions/33262493/how-to-add-a-class-with-react-js
const Cell = ({ index, color, game }) => {
  const dispatch = useDispatch();

  const opened = game.wasClicked.index === index;
  const success = game.successPair.some((defeatIndex) => defeatIndex === index);
  const defeat = game.defeatPair.some((successIndex) => successIndex === index);

  const openedStyle = opened ? `${styles[color]} ${styles.opened}` : null;
  const successStyle = success ? `${styles[color]} ${styles.hide}` : null;
  const defeatStyle = defeat ? styles[color] : null;
  const cellClassList = `${styles.cell} ${openedStyle} ${successStyle} ${defeatStyle}`;

  const handleClick = () => {
    if (!opened && !success && !defeat) {
      dispatch(setGame({ index, color }));
    }
  };

  return (
    <div className={cellClassList} onClick={handleClick}>
      {index + 1}
    </div>
  );
};

Cell.propTypes = {
  index: PT.number.isRequired,
  color: PT.string.isRequired,
  game: PT.object.isRequired,
};

export default Cell;
