import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default function App() {
  const [showJoinButton, setShowJoinButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('waitlist');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setShowJoinButton(rect.bottom <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <Navbar showJoinButton={showJoinButton} />
      <Landing />
      <Home />
    </div>
  );
}
