import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chemistry from "./pages/Chemistry";
import Procedure from "./pages/Procedure";
import Diagrams from "./pages/Diagrams";
import Video from "./pages/Video";
import Applications from "./pages/Applications";
import Quiz from "./pages/Quiz";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chemistry" element={<Chemistry />} />
            <Route path="/procedure" element={<Procedure />} />
            <Route path="/diagrams" element={<Diagrams />} />
            <Route path="/video" element={<Video />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

