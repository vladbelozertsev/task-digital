import React from "react";
import { useSelector } from "react-redux";
import { getGrid } from "../../store/grid-slice";
import Cells from "./Cells";
import styles from "./Grid.module.css";
import Rules from "./Rules";
import Score from "./Score";
import Size from "./Size";

const Grid = () => {
  const grid = useSelector(getGrid);
  return (
    <div className={styles.grid}>
      <Rules />
      {grid.size ? (
        <>
          <Score size={grid.size} game={grid.game}/>
          <Cells {...grid} />
        </>
      ) : (
        <Size />
      )}
    </div>
  );
};

export default Grid;
