import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSiteData } from "./hooks/useSiteData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileCTABar } from "./components/MobileCTABar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import "./App.css";

// Reset scroll position on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { data, loading, error } = useSiteData();

  return (
    <div className="app">
      <ScrollToTop />
      <Header business={data.business} />

      {error && (
        <div className="api-notice container" role="alert">
          <p>
            Live backend not connected — showing the saved site content. Start
            the Django server at <code>http://127.0.0.1:8000</code> for live
            data.
          </p>
        </div>
      )}

      {loading ? (
        <div className="loading-screen">
          <p>Loading…</p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/products" element={<Products data={data} />} />
          <Route path="/gallery" element={<Gallery data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}

      <Footer business={data.business} />
      <MobileCTABar business={data.business} />
    </div>
  );
}

export default App;
