import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: null,
  colors: {},
  game: {
    wasClicked: { index: null, color: null }, // nowClicked
    successPair: [],
    defeatPair: [],
  },
};

const randColors = (size) => {
  const cellsSumm = size ** 2;
  const colors = {
    red: [],
    blue: [],
  };

  // https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  while (colors.red.length < cellsSumm / 2) {
    const r = Math.floor(Math.random() * cellsSumm);
    const notExist = colors.red.indexOf(r) === -1;
    if (notExist) {
      colors.red.push(r);
    }
  }

  while (colors.blue.length < cellsSumm / 2) {
    const r = Math.floor(Math.random() * cellsSumm);
    const notExist = colors.red.indexOf(r) === -1 && colors.blue.indexOf(r) === -1;
    if (notExist) {
      colors.blue.push(r);
    }
  }

  return colors;
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
      state.colors = randColors(action.payload);
    },
    setGame: (state, action) => {
      const { index, color } = action.payload;
      if (state.game.wasClicked.index !== null) {
        state.game.wasClicked.color === color
          ? state.game.successPair.push(state.game.wasClicked.index, index)
          : state.game.defeatPair.push(state.game.wasClicked.index, index);
        state.game.wasClicked = initialState.game.wasClicked;
      } else {
        state.game.wasClicked = action.payload;
      }
    },
    // https://stackoverflow.com/questions/59424523/reset-state-to-initial-with-redux-toolkit
    reset: () => initialState,
  },
});

export const { setSize, setGame, reset } = gridSlice.actions;
export const getGrid = (state) => state.grid;
export default gridSlice.reducer;
