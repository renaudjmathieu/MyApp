import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';
import clsx from 'clsx';
import ElephantSvg from '../../img/elephant.svg';
import GitHubSvg from '../../img/github.svg';
import LightToggleIcon from '../../img/lightToggleIcon.svg';
import DarkToggleIcon from '../../img/darkToggleIcon.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../NavbarItems/Auth';

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <ElephantSvg className={clsx('d-inline-block align-top', styles.brandSvg, 'brandSvg')} alt="Elephant logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={clsx('me-auto', 'navLeft', styles.navLeft)}>
            <NavLink className="nav-link" to="/">
              Renaud Mathieu
            </NavLink>
            <NavLink className="nav-link" to="/hello">
              Hello
            </NavLink>
            <NavLink className="nav-link" to="/pbi">
              PowerBI
            </NavLink>
          </Nav>
          <Nav className={clsx('navRight', styles.navRight)}>
            <Auth />
            <a href="https://github.com/renaudjmathieu/my-website" target="_blank" className={styles.imgLink} rel="noreferrer" aria-label="GitHub repository">
              <GitHubSvg className={clsx(styles.headerSvg, 'headerSvg')} alt="GitHub logo" />
            </a>
            <a href="#" className={styles.imgLink} onClick={() => {
              props.toggleColorMode();
            }}
            >
              <DarkToggleIcon id="darkToggleIcon" className={clsx(styles.headerSvg, 'headerSvg')} />
              <LightToggleIcon id="lightToggleIcon" className={clsx(styles.headerSvg, 'headerSvg')} display="none" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
