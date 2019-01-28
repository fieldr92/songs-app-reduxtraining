import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Living La Vida Loca', duration: '4:05' },
    { title: 'No scrubs', duration: '2:30' },
    { title: 'All star', duration: '2:55' },
    { title: 'I Want It That Way', duration: '4:22' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
