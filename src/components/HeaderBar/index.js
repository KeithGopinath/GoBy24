import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderBar = () => (
  <div className="header-bar">
    <Navbar className="nava-bar" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="./images/main-logo.png"
          className="logo"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features" className="nav-link"> <FontAwesomeIcon icon={faSearch} className="nav-search" />Find a ride</Nav.Link>
          <Nav.Link href="#features"className="nav-link"><FontAwesomeIcon icon={faGift} className="nav-search" />Tourist Package</Nav.Link>
          <Nav.Link href="#pricing"className="nav-link"><FontAwesomeIcon icon={faPlusCircle} className="nav-search" />Offer a ride</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown
            title={
              <span className="nav-user"><FontAwesomeIcon icon={faUserCircle} /></span>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">coming Soon..</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">coming Soon..</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">coming Soon..</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">coming Soon..</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default HeaderBar;
