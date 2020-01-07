import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

// Navbar Component
export default () => (
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href='/'>Movie.Info</Navbar.Brand>
      <Nav>
        <Nav.Link href='/'>Search</Nav.Link>
        <Nav.Link href='/ranking'>Ranking</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
