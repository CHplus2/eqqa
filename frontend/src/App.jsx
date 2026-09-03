import { Routes, Route } from "react-router-dom";
import { useSiteData } from "./hooks/useSiteData";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  const { data, loading, error } = useSiteData();

  return (
    <div className="app">
      <Header business={data.business} />

      {error && (
        <div className="api-notice container" role="alert">
          <p>
            Could not connect to the backend. Showing placeholder content.
            Start the Django server at <code>http://127.0.0.1:8000</code> to
            see live data.
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
        </Routes>
      )}

      <Footer business={data.business} />
    </div>
  );
}

export default App;
