import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import logo from "../../assets/images/baccusLogo.jpg";
import './style.css';

const Navigation = (props) => {
const [isOpen, setIsOpen] = useState(false);
const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
const toggle = () => setIsOpen(!isOpen);
const logoutWithRedirect = () =>
  logout({
    returnTo: window.location.origin
  });

return (
<div className="nav-container">

<Navbar color="light" light expand="md">
  <Container>
    <NavbarBrand className="logo" />
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
          <img className="logoB" src={logo}/>
        <NavItem className='bname'>
          <NavLink
            className='bname-container'
            tag={RouterNavLink}
            to="/"
            exact
            activeClassName="router-link-exact-active"
          >
            acchus
          </NavLink>
        </NavItem>
      </Nav>
​

​
  <Nav className="mr-auto" className= "justify-content-end" navbar>
    <NavItem>
      <NavLink
        tag={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Search
      </NavLink>
    </NavItem>
  </Nav> 
​
  <Nav className="mr-auto" className= "justify-content-end" navbar>
    <NavItem>
      <NavLink
        tag={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Articles
      </NavLink>
    </NavItem>
  </Nav>
​
  <Nav className="mr-auto" className= "justify-content-end" navbar>
    <NavItem>
      <NavLink
        tag={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
      >
        Events
      </NavLink>
    </NavItem>
  </Nav>
​
​
  <Nav className="d-none d-md-block" navbar>
    {!isAuthenticated && (
      <NavItem>
        <Button
          id="qsLoginBtn"
          color="warning"
          className="btn-margin"
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      </NavItem>
    )}
    {isAuthenticated && (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret id="profileDropDown">
          <img
            src={user.picture}
            alt="Profile"
            className="nav-user-profile rounded-circle"
            width="50"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{user.name}</DropdownItem>
          <DropdownItem
            tag={RouterNavLink}
            to="/profile"
            className="dropdown-profile"
            activeClassName="router-link-exact-active"
          >
            <FontAwesomeIcon icon="user" className="mr-3" /> Profile
          </DropdownItem>
          <DropdownItem
            id="qsLogoutBtn"
            onClick={() => logoutWithRedirect()}
          >
            <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
            out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )}
  </Nav>
  {!isAuthenticated && (
    <Nav className="d-md-none" navbar>
      <NavItem>
        <Button
          id="qsLoginBtn"
          color="warning"
          block
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      </NavItem>
    </Nav>
  )}
  {isAuthenticated && (
    <Nav
      className="d-md-none justify-content-between"
      navbar
      style={{ minHeight: 170 }}
    >
      <NavItem>
        <span className="user-info">
          <img
            src={user.picture}
            alt="Profile"
            className="nav-user-profile d-inline-block rounded-circle mr-3"
            width="50"
          />
          <h6 className="d-inline-block">{user.name}</h6>
        </span>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon="user" className="mr-3" />
        <RouterNavLink
          to="/profile"
          activeClassName="router-link-exact-active"
        >
          Profile
        </RouterNavLink>
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon="power-off" className="mr-3" />
        <RouterNavLink
          to="#"
          id="qsLogoutBtn"
          onClick={() => logoutWithRedirect()}
        >
          Log out
        </RouterNavLink>
      </NavItem>
    </Nav>
      )}
    </Collapse>
  </Container>
</Navbar>
  
</div>);
  
}

export default Navigation;

