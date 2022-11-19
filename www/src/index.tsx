import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import App from './App';
import { pokemonApi } from './services/pokemon'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </StrictMode>
);
