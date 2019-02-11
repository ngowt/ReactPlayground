import React from "react";
import GAuth from "./GAuth";

export const Header = () => {
  return (
    <div className="ui block header">
      <h2 className="ui center aligned icon header">
        <GAuth />
      </h2>
    </div>
  );
};
