import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SearchResult from "./components/search-result.js";
import Footer from "./components/footer.js";

class PageSearchResult extends Component {
  state = {
    busqueda: " ",
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
