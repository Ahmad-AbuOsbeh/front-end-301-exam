import React, { Component } from "react";

class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.updateDigimonData(e)}>
          <label for="fname">Name</label>
          <input
            type="text"
            value={this.props.name}
            onChange={(e) => this.props.onChangeName(e)}
          />
          <label for="lname">Image URL</label>
          <input
            type="text"
            value={this.props.img}
            onChange={(e) => this.props.onChangeImage(e)}
          />
          <label for="lname">Level</label>
          <input
            type="text"
            value={this.props.level}
            onChange={(e) => this.props.onChangeLevel(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UpdateForm;
