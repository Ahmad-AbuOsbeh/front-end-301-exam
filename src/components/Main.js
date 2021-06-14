import React, { Component } from "react";
import axios from "axios";
import Digimon from "./Digimon";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
      allDigimons: [],
      showDigimons: false,
    };
  }
  componentDidMount = async () => {
    // https://digimon-api.vercel.app/api/digimon
    let allDigimons = await axios.get(
      `${this.state.REACT_APP_SERVER}/getAllDigimons`
    );
    this.setState({
      allDigimons: allDigimons.data,
      showDigimons: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.showDigimons && (
          <Digimon allDigimons={this.state.allDigimons}></Digimon>
        )}
      </div>
    );
  }
}

export default Main;
