import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import Navbar  from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="light" expand="lg" >
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
          <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
          <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
          <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
          <SignOutButton />
        </Nav>
      </Navbar.Collapse>
  </Navbar >
);
 
export default Navigation;