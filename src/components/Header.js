import React from 'react';
import logo from './../elephant.png';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>
      Renaud Mathieu
    </h1>
    <a
      className="App-link"
      href="https://www.credly.com/users/renaudmathieu/badges?sort=-state_updated_at&page=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Credly
    </a>
    <a
      className="App-link"
      href="https://credentials.databricks.com/profile/renaudmathieu/wallet"
      target="_blank"
      rel="noopener noreferrer"
    >
      Databricks credentials
    </a>
    <a
      className="App-link"
      href="https://github.com/renaudjmathieu"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      className="App-link"
      href="https://www.kaggle.com/renaudmathieu"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kaggle
    </a>
  </header>
);

export default Header;
