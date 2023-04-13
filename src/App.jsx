import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home"
import Projects from "./component/Projects/Projects"

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = () => {
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ColorModeContext.Provider>
  );
}

export default App;