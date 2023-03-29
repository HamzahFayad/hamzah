import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Creation from "./pages/Creation";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("green");

  const handleTheme = () => {
    if (theme === "green") {
      setTheme("blue");
    } else if (theme === "blue") {
      setTheme("pink");
    } else {
      setTheme("green");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  /*useEffect(() => {
    document.addEventListener("scroll", (e) => {
      document.querySelector(".App-header").classList.remove("fixed");
      if (window.scrollY >= 50) {
        document.querySelector(".App-header").classList.add("fixed");
      }
    });
  });*/

  return (
    <div className={`App App-theme-${theme}`}>
      <Router>
        <header className="App-header Intro">
          <ul className="Grid-width-wide">
            <Navbar />
            <h2 className="Nav-name Monospace">
              I'm Hamzah, nice to meet you. 👨🏻‍💻
            </h2>
            <div onClick={handleTheme} className="Dark-light Monospace">
              <span>
                Mode Switch
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                </svg>
              </span>
            </div>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="about" element={<About />}>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="creation" element={<Creation />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
