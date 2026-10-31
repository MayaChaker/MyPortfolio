import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Spotlight from "@components/Spotlight";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomePage from "@components/HomePage";

const CaseStudy = lazy(() => import("@components/CaseStudy"));

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Spotlight />
      <div className="page">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div className="page-loading" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<CaseStudy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
