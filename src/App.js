import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home.js";
import { About } from "./pages/about";
import { Policies } from "./pages/policies";
import { Contact } from "./pages/contact";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/category/:id" element={<ShowClothes />} />
        <Route path="/item/:id" element={<ItemDetail />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
