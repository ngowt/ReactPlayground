import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song...</div>;
  }
  return (
    <div>
      <h4>Title: {selectedSong.title}</h4>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
