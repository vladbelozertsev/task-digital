import React from "react";
import PT from "prop-types";
import { useDispatch } from "react-redux";
import { reset } from "../../store/grid-slice";
import styles from "./Score.module.css";

const Score = ({ game, size }) => {
  const dispatch = useDispatch();
  const { successPair, defeatPair } = game;
  const gameOver = successPair.length + defeatPair.length === size ** 2;
  const score = Math.floor(successPair.length);
  const result = score > size ** 2 / 2 ? "ПОБЕДИЛИ" : "ПРОИГРАЛИ";

  const handleClick = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h2>Количество набранных баллов: {score}</h2>
      {gameOver ? (
        <div>
          <h2 className={styles.result}>
            ВЫ {result}, <button onClick={handleClick}>Начать заново</button>
          </h2>
        </div>
      ) : null}
    </div>
  );
};

Score.propTypes = {
  game: PT.object.isRequired,
  size: PT.number.isRequired,
};

export default Score;
