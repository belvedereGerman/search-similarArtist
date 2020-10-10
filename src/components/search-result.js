import React, { Component } from "react";
import ArtistCard from "./artist-cards.js";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class SearchResult extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <div className="row">
              {this.props.busqueda.map((item, i) => {
                return (
                  <ArtistCard
                    titulo={item.name}
                    img={item.image[2]["#text"]}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
