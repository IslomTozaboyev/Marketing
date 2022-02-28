import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Containers";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
