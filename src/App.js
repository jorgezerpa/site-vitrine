import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Accueil, Connection, Faq, Propos } from './layout';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="conextion" element={<Connection />} />
            <Route path="faq" element={<Faq />} />
            <Route path="propos" element={<Propos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
