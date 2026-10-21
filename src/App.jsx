import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Routes, Route, useLocation } from 'react-router-dom';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Terms from './pages/Terms';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]); // Re-initialize or scroll up on route change if needed

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Persistent Navbar */}
      <Navbar />

      {/* The HTML overlay Content */}
      <main className="relative z-10 flex flex-col w-full pointer-events-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy" element={<Terms />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
