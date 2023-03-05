import React from "react";
import Update from "./components/Update";
import Create from "./components/Create";
// import Read from './components/Read';
//
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Users from "./components/Users";
import Menubar from "./components/Menubar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Menubar />
      </Container>

      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Users />} />
        <Route exact path="/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
