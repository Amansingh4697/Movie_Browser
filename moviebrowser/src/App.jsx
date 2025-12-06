import { Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  return (
    <div>
      <h1>Movie Browser</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
