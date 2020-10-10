import React from "react";
import ArtistCard from "./artist-cards.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margen30">
          <div className="col-md-12">
            <h5> Artista Similar</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          {this.props.results.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                titulo={item.name}
                img={item.image[2]["#text"]}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
