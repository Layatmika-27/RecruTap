import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Results from "./pages/Results";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/analyze" element={<Analyze />} />

        <Route path="/results" element={<Results />} />

        <Route path="/history" element={<History />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;