import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <NavLink className="nav-link" to="/">
          Home
          <span className="sr-only">(current)</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" to="/hello">
          Hello
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Certifs
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
