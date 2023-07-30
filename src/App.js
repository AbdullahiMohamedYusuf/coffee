import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <Routes> {/* Use Routes as the parent */}
        <Route path="/" element={<Home />} /> {/* Specify the element prop */}
      </Routes>
    </Router>
  );
}

export default App;
