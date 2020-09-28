import React, { Component } from "react";
import ArtistCard from "./artist-cards.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=cfec20f34bb2d8fc23dcc221a9f4c00b&format=json"
    );
    const result = await data.json();
    this.setState({
      results: result.similarartists.artist,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.results.map((item, i) => {
              return <ArtistCard img={item.image} titulo={item.name} key={i} />;
            })}
          </div>
          <h1> {this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
