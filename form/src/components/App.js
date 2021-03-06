import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import { StreamDelete } from "./streams/StreamDelete";
import { StreamEdit } from "./streams/StreamEdit";
import { StreamList } from "./streams/StreamList";
import { StreamShow } from "./streams/StreamShow";

export const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new/" component={StreamCreate} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
