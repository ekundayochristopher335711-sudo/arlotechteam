import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Infrastructure from "./pages/Infrastructure";
import Process from "./pages/Process";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/process" element={<Process />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/work" element={<Work />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
