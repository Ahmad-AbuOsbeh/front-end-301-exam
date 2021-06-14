import React, { Component } from "react";
import { Card, Button, CardColumns } from "react-bootstrap";
import axios from "axios";
import UpdateForm from "./UpdateForm";

class FavDigimon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REACT_APP_SERVER: process.env.REACT_APP_SERVER,
      allFavDigimons: this.props.allFavDigimons,
      showForm: false,
      id: "",
      name: "",
      img: "",
      level: "",
    };
  }

  // deleteDigimon function
  deleteDigimon = async (item) => {
    const id = item._id;
    let dataAfterDeleting = await axios.delete(
      `${this.state.REACT_APP_SERVER}/deleteDigimon/${id}`
    );
    this.setState({
      allFavDigimons: dataAfterDeleting.data,
    });
  };

  // showUpdateForm function
  showUpdateForm = (item) => {
    this.setState({
      id: item._id,
      name: item.name,
      img: item.img,
      level: item.level,
      showForm: true,
    });
  };

  // onChangeName
  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  // onChangeImage
  onChangeImage = (e) => {
    this.setState({
      img: e.target.value,
    });
  };

  // onChangeLevel
  onChangeLevel = (e) => {
    this.setState({
      level: e.target.value,
    });
  };

  //updateDigimonData function
  updateDigimonData = async (event) => {
    event.preventDefault();
    let updateDigimon = {
      name: this.state.name,
      img: this.state.img,
      level: this.state.level,
    };

    let updatedData = await axios.put(
      `${this.state.REACT_APP_SERVER}/updateDigimon/${this.state.id}`,
      updateDigimon
    );

    this.setState({
      allFavDigimons: updatedData.data,
      showForm: false,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1b1717",
        }}
      >
        {this.state.showForm && (
          <UpdateForm
            updateDigimonData={this.updateDigimonData}
            onChangeName={this.onChangeName}
            onChangeImage={this.onChangeImage}
            onChangeLevel={this.onChangeLevel}
            name={this.state.name}
            img={this.state.img}
            level={this.state.level}
          ></UpdateForm>
        )}

        {this.state.allFavDigimons.map((item, idx) => {
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
                    onClick={() => this.deleteDigimon(item)}
                    style={{
                      backgroundColor: "#eeebdd",
                      color: "#1b1717",
                      fontWeight: "bolder",
                      // border: "solid 0.5em #eeebdd ",
                      margin: "0.5em",
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => this.showUpdateForm(item)}
                    style={{
                      backgroundColor: "#eeebdd",
                      color: "#1b1717",
                      fontWeight: "bolder",
                      // border: "solid 0.5em #eeebdd ",
                      margin: "0.5em",
                    }}
                  >
                    Update
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

export default FavDigimon;
