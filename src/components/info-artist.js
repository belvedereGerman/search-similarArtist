import React from "react";
import "./artist-cards.css";

class InfoArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-6 centrar ">
              <img src={this.props.img} alt="" className="pic-artist" />
              <h1>{this.props.nombre} </h1>
              <p>{this.props.bio}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoArtist;
