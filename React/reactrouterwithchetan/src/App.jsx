import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

// import Home from "./components/Home";
// import About from "./components/About";

import Team from "./components/Team";
import Career from "./components/Career";
import Login from "./components/Login";
import Footer from "./components/Footer";

// Lazy load the page components

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="container">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
