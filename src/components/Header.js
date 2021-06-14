import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Digimons APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">FavoriteDigimons</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
