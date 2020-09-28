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
          <div className="col-md-3 ">
            <ArtistCard img="https://place-hold.it/300x300" titulo="lolos" />
          </div>
          <div className="col-md-3 ">
            <ArtistCard img="https://place-hold.it/300x300" titulo="lolos" />
          </div>
          <div className="col-md-3 ">
            <ArtistCard img="https://place-hold.it/300x300" titulo="lolos" />
          </div>
          <div className="col-md-3 ">
            <ArtistCard img="https://place-hold.it/300x300" titulo="lolos" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
