import React, { useState, useEffect } from 'react';
import Header from './Header'; // Import the Header component
import burger from '../Food_Assets/assets/hero/burger.png';
import yellow from '../Food_Assets/assets/hero/yellow.png';
import '../index.css';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header /> {/* Use the Header component here */}
      <div className="home-container">
        <img src={burger} alt="Home" className="home-image" style={{ position: 'absolute' }} />
        <p style={{ position: 'absolute' }}>
          Warning: Our burgers might make you dance <br />with joy! Juicy patties and our
          <br />secret sauce create a flavor explosion that’s<br /> irresistible. Get ready for happy
          <br />cravings and maybe a napkin for those joyful<br /> tears. Dive in and savor the deliciousness!
        </p>
        <div className="yellow-container">
          <img src={yellow} alt="Yellow" className="yellow" />
          <div className="overlay-text" >
            50% OFF
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
