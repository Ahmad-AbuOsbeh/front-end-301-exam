import React, { Component } from "react";
import axios from "axios";
import FavDigimon from "./FavDigimon";

class FavoriteFavDigimons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
      allFavDigimons: [],
      showFavDigimons: false,
    };
  }
  componentDidMount = async () => {
    let allFavDigimons = await axios.get(
      `${this.state.REACT_APP_SERVER}/getAllFavDigimons`
    );
    this.setState({
      allFavDigimons: allFavDigimons.data,
      showFavDigimons: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.showFavDigimons && (
          <FavDigimon allFavDigimons={this.state.allFavDigimons}></FavDigimon>
        )}
      </div>
    );
  }
}

export default FavoriteFavDigimons;
