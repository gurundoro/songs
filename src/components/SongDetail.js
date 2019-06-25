import React from "react";
import { connect } from "react-redux";

function SongDetail({ song }) {
  if (!song) {
    return <div>Select A Song</div>;
  }
  return (
    <div>
      <h3> Details for:</h3>
      <p> {song.title} </p>
      <p>{song.duration}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
