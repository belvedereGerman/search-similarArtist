import React, { Component } from "react";
import SimilarArtist from "./components/similar-artist.js";
import SearchBar from "./components/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./components/footer.js";

class PageArtist extends Component {
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
        <div className="container">
          <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-6 centrar ">
              <img
                src="https://a.wattpad.com/useravatar/abrilcerati3.256.707804.jpg "
                alt=""
                className="pic-artist"
              />
              <h2>Gustavo Cerati </h2>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014)3​4​5​ fue un músico,
                cantautor, compositor y productor discográfico argentino. Obtuvo
                reconocimiento internacional por haber sido el cantante,
                guitarrista y compositor principal de la banda de rock Soda
                Stereo. Es considerado uno de los músicos más importantes,
                populares e influyentes del rock latinoamericano
              </p>
            </div>
          </div>

          <SimilarArtist />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
