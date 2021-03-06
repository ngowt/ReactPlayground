import React from "react";
import { Header } from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import { StreamDelete } from "./streams/StreamDelete";
import { StreamEdit } from "./streams/StreamEdit";
import { StreamList } from "./streams/StreamList";
import { StreamShow } from "./streams/StreamShow";

export const App = () => {
  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
