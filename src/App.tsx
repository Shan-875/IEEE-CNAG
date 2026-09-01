import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";
import { About } from "./pages/About";
import { Consultants } from "./pages/Consultants";
import { Events } from "./pages/Events";
import { Execom } from "./pages/Execom";
import { Home } from "./pages/Home";
import { Join } from "./pages/Join";
import { Resources } from "./pages/Resources";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <Preloader onDone={done} />}
      <div className={`app ${ready ? "is-ready" : ""}`}>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/execom" element={<Execom />} />
          <Route path="/events" element={<Events />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
