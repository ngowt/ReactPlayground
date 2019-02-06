import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "BBIBBI",
      duration: "3:29"
    },
    {
      title: "Palette",
      duration: "3:39"
    },
    {
      title: "Twenty-three",
      duration: "3:55"
    },
    {
      title: "YOU&I",
      duration: "4:04"
    }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});
