import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home
} from "./pages";
import {
  NavBar,
  Footer,
} from "./components";
import AzureFunctions from './pages/AzureFunctions';
import ReduxPage from './pages/ReduxPage';
import Kaggle from './pages/Kaggle';
import PowerBI from './pages/PowerBI';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [mode, setMode] = React.useState(storedDarkMode ?? "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  React.useEffect(() => {
    localStorage.setItem("DARK_MODE", mode);
  }, [mode]);

  React.useEffect(() => {
    switch (mode) {
      case "light":
        document.getElementById("lightToggleIcon").style.display = "initial";
        document.getElementById("darkToggleIcon").style.display = "none";
        document.querySelectorAll('body').forEach((el) => {
          el.classList.add('theme-light');
          el.classList.remove('theme-dark');
        });
        break;

      case "dark":
      default:
        document.getElementById("lightToggleIcon").style.display = "none";
        document.getElementById("darkToggleIcon").style.display = "initial";
        document.querySelectorAll('body').forEach((el) => {
          el.classList.remove('theme-light');
          el.classList.add('theme-dark');
        });
        break;
    }
  },
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Router>
        <NavBar
          dark={mode === "light" ? "dark" : "light"}
          toggleColorMode={colorMode.toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/azurefunctions" element={<AzureFunctions />} />
          <Route path="/reduxpage" element={<ReduxPage />} />
          <Route path="/kaggle" element={<Kaggle />} />
          <Route path="/pbi" element={<PowerBI />} />
        </Routes>
      </Router>
      <Footer />
    </ColorModeContext.Provider>
  );
}

export default App;
