import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

class Digimon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
    };
  }

  // addToFavourite function
  addToFavourite = async (item) => {
    const favDigimon = item;
    await axios.post(
      `${this.state.REACT_APP_SERVER}/addFavDigimon`,
      favDigimon
    );
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1b1717",
        }}
      >
        {this.props.allDigimons.map((item, idx) => {
          return (
            <>
              <Card
                key={idx}
                style={{
                  width: "18rem",
                  display: "inline-block",
                  margin: "1em",
                  backgroundColor: "#810000",
                  color: "#eeebdd",
                  border: "solid 0.5em #810000 ",
                }}
              >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.level}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.addToFavourite(item)}
                    style={{
                      backgroundColor: "#eeebdd",
                      color: "#1b1717",
                      fontWeight: "bolder",
                      // border: "solid 0.5em #eeebdd ",
                    }}
                  >
                    ADD To FAV
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    );
  }
}

export default Digimon;
