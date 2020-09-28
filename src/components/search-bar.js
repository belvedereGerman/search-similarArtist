import React from "react";
import "./search-bar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
class Searchbar extends React.Component {
  state = {
    busqueda: " ",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Ouch ");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={Logo} alt="logo find rock" className="logo" />
            </Link>
          </div>
          <div className="col-md-4">
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
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Searchbar;
