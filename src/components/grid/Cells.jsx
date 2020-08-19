import PT from "prop-types";
import React from "react";
import Cell from "./Cell";
import styles from "./Cells.module.css";

const Cells = ({ size, colors, game }) => {
  const cssProperties = { "--size": size };
  const colorsCommon = [];

  for (let i = 0; i < size ** 2 / 2; i++) {
    colorsCommon[colors.red[i]] = "red";
    colorsCommon[colors.blue[i]] = "blue";
  }

  // https://stackoverflow.com/questions/38364400/index-inside-map-function
  return (
    <div className={styles.cells} style={cssProperties}>
      {colorsCommon.map((color, index) => (
        <Cell key={index} index={index} color={color} game={game} />
      ))}
    </div>
  );
};

Cells.propTypes = {
  size: PT.number.isRequired,
  colors: PT.object.isRequired,
  game: PT.object.isRequired,
};

export default Cells;
