import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Mangonono", duration: "2:30" },
    { title: "Disappeat", duration: "3:00" },
    { title: "No Under 18", duration: "4:37" },
    { title: "Fuck Up Some Commas", duration: "3:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
