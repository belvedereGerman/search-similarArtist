import React from "react";
import "./search-bar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
    };
  }

  handleChange(e) {
    this.setState({ busqueda: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.history.push("/busqueda?" + this.state.busqueda);
    console.log(this.state.busqueda);
  }

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
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div className="busqueda">
                <input
                  value={this.props.busqueda}
                  id="buscar"
                  name="imput"
                  type="text"
                  placeholder="Busca una banda"
                  onChange={(e) => this.handleChange(e)}
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
