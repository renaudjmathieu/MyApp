import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactComponent as ElephantSvg } from '../../img/elephant.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <ElephantSvg className={clsx('d-inline-block align-top', styles.myBrand)}
            width="35"
            height="35"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={clsx('me-auto', styles.navLeft)}>
            <NavLink className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-link" to="/hello">
              Hello
            </NavLink>
            <Nav.Link eventKey="disabled" disabled>
              Certifs
            </Nav.Link>
          </Nav>
          <Nav className={styles.navRight}>
            <Button variant="primary">Sign in</Button>{' '}
             <a href="https://github.com/renaudjmathieu/my-website" className={clsx('nav-link', styles.headerGithubLink)} target="_blank" rel="noreferrer" aria-label="GitHub repository">
             </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
