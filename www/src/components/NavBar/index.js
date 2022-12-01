import React, { useState, useEffect } from 'react';
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
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

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
            <NavLink className="nav-link" to="/projects">
                Stuff
              </NavLink>
            {userInfo ? <>
              <NavLink className="nav-link" to="/azurefunctions">
                Azure Functions
              </NavLink>
              <NavLink className="nav-link" to="/reduxpage">
                Redux
              </NavLink>
              <NavLink className="nav-link" to="/kaggle">
                Kaggle
              </NavLink>
              <NavLink className="nav-link" to="/pbi">
                Power BI
              </NavLink></> : <></>}
          </Nav>
          <Nav className={clsx('navRight', styles.navRight)}>
            <Auth />
            <a href="https://github.com/renaudjmathieu" target="_blank" className={styles.imgLink} rel="noreferrer" aria-label="GitHub">
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
