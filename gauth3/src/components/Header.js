import React from "react";
import GoogleAuth from "./GoogleAuth";

export const Header = () => {
  return (
    <div className="ui block header">
      <h2 className="ui center aligned icon header">
        <GoogleAuth />
      </h2>
    </div>
  );
};
