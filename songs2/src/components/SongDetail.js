import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Please selected a song...</div>;
  }
  return (
    <div>
      <h3>Title: {selectedSong.title}</h3>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapPropsToState = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapPropsToState)(SongDetail);
