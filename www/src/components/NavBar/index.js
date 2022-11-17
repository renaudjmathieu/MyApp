import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';
import clsx from 'clsx';
import ElephantSvg from '../../img/elephant.svg';
import GitHubSvg from '../../img/github.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext, themes } from '../../theme/ThemeContext';
import ToggleDark from '../NavbarItems/toggleDark.js';
import Auth from '../NavbarItems/Auth';

function Navigation() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <ElephantSvg className={clsx('d-inline-block align-top', styles.brandSvg)} alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={clsx('me-auto', styles.navLeft)}>
            <NavLink className="nav-link" to="/">
              Renaud Mathieu
            </NavLink>
            <NavLink className="nav-link" to="/hello">
              Hello
            </NavLink>
          </Nav>
          <Nav className={styles.navRight}>
            <Auth />
            <a href="https://github.com/renaudjmathieu/my-website" target="_blank" className={styles.imgLink}  rel="noreferrer" aria-label="GitHub repository">
              <GitHubSvg className={clsx(styles.headerSvg, 'headerSvg')} alt="GitHub logo" />
            </a>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <ToggleDark
                  toggleDark={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                />
              )}
            </ThemeContext.Consumer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
