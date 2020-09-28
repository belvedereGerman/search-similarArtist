import React from "react";
import "./components/page-home.css";
import logo from "./logo.svg";
import Footer from "./components/footer.js";

class PageHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row  centrado">
            <div className="col-md-6 centrar">
              <img src={logo} alt="" id="logo" />
              <form
                className="form-inline"
                name="Form"
                onSubmit={this.handleSubmit}
              >
                <div className="busqueda">
                  <input
                    value={this.props.busqueda}
                    id="buscar"
                    name="imput"
                    type="text"
                    placeholder="Busca una banda"
                    onChange={this.props.onChange}
                  />
                </div>
              </form>
            </div>
            <div className="actions">
              <button className="btng"> Buscar artista similar</button>
              <button className="btng">Escuela Devrock </button>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PageHome;
