import React from "react";
import "./components/page-home.css";
import logo from "./logo.svg";
import Footer from "./components/footer.js";

import Searchbar from "./components/search-bar";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.parsebusqueda);
  };

  onChange = (e) => {
    const busqueda = e.target.value;
    this.setState({
      parsebusqueda: busqueda.replace(" ", ""),
      busqueda: busqueda,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Searchbar history={this.props.history} />
        <div className="actions">
          <button className="btng" type="submit">
            Buscar artista similar
          </button>
          <button className="btng">Escuela Devrock </button>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default PageHome;
