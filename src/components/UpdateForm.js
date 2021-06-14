import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Modal
          show={true}
          style={{
            color: "#810000",
          }}
        >
          <Modal.Header>
            <Modal.Title>Update Your Data!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updateDigimonData(e)}>
              <Form.Label for="fname">Name</Form.Label>
              <Form.Control
                type="text"
                value={this.props.name}
                onChange={(e) => this.props.onChangeName(e)}
                style={{
                  color: "#1b1717",
                  fontWeight: "bold",
                }}
              />
              <Form.Label for="lname">Image URL</Form.Label>
              <Form.Control
                type="text"
                value={this.props.img}
                onChange={(e) => this.props.onChangeImage(e)}
                style={{
                  color: "#1b1717",
                  fontWeight: "bold",
                }}
              />
              <Form.Label for="lname">Level</Form.Label>
              <Form.Control
                type="text"
                value={this.props.level}
                onChange={(e) => this.props.onChangeLevel(e)}
                style={{
                  color: "#1b1717",
                  fontWeight: "bold",
                }}
              />
              <br></br>
              <br></br>

              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#810000",
                  color: "#eeebdd",
                  fontWeight: "bolder",
                  margin: "0.5em",
                }}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateForm;
