import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult} />
          <Route exact path="/artista" component={PageArtist} />
          <Route path="/" component={PageHome} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
