import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SearchResult from "./components/search-result.js";
import Footer from "./components/footer.js";

class PageSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      param: "",
    };
  }

  async componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", "");

    const data = await fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        search +
        "&api_key=cfec20f34bb2d8fc23dcc221a9f4c00b&format=json"
    );

    const result = await data.json();

    this.setState({
      results: result.similarartists.artist,
      param: this.props.history.location.search.substr(1).replace("%20", " "),
    });
  }

  async componentDidUpdate() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", "");

    const data = await fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        search +
        "&api_key=cfec20f34bb2d8fc23dcc221a9f4c00b&format=json"
    );

    const result = await data.json();

    this.setState({
      results: result.similarartists.artist,
      param: this.props.history.location.search.substr(1).replace("%20", " "),
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar history={this.props.history} />
        <SearchResult busqueda={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
