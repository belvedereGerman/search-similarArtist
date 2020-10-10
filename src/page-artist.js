import React, { Component } from "react";
import SimilarArtist from "./components/similar-artist.js";
import SearchBar from "./components/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";
import InfoArtist from "./components/info-artist";

import "./App.css";
import Footer from "./components/footer.js";

class PageArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
      param: "",
    };
  }

  async componentDidUpdate() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", "");

    const data = await fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
        search +
        "&api_key=cfec20f34bb2d8fc23dcc221a9f4c00b&format=json"
    );

    const result = await data.json();
    console.log(result);

    this.setState({
      results: result.artist,
      param: this.props.history.location.search.substr(1).replace("%20", " "),
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.history.push("/busqueda?" + this.state.busqueda);
    console.log(this.state.busqueda);
  }

  async componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", "");

    const data = await fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
        search +
        "&api_key=cfec20f34bb2d8fc23dcc221a9f4c00b&format=json"
    );

    const result = await data.json();
    console.log(result);

    this.setState({
      results: result.artist,
      param: this.props.history.location.search.substr(1).replace("%20", " "),
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar history={this.props.history} />
        <InfoArtist
          nombre={this.state.results.name}
          img={this.state.results.image[2]["#text"]}
          bio={this.state.results.bio.summary}
        />
        ;
        <SimilarArtist results={this.state.results.similar.artist} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default PageArtist;
