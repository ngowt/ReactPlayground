import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

export const App = () => {
  return (
    <div className="ui grid">
      <div className="four wide column">
        <SongList />
      </div>
      <div className="four wide column">
        <SongDetail />
      </div>
    </div>
  );
};
