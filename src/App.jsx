import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
