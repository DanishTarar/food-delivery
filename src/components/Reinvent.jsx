import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import buntop from '../Food_Assets/assets/Reinvent/buntop.png';
import bottom from '../Food_Assets/assets/Reinvent/bottom.png';
import tomato from '../Food_Assets/assets/Reinvent/tomato.png';
import cheese from '../Food_Assets/assets/Reinvent/cheese.png';
import patty from '../Food_Assets/assets/Reinvent/patty.png';
import cabbage from '../Food_Assets/assets/Reinvent/cabbage.png';

function Reinvent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasVisited, setHasVisited] = useState(false); // Add a state to track if the user has visited the component before
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolling(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      if (scrollPosition > 100 && !isAnimating) {
        setIsAnimating(true);
      }
    } else {
      setIsAnimating(false);
    }
    // Add a condition to check if the user is active on the component
    if (document.activeElement === containerRef.current) {
      setIsAnimating(false); // End the animation if the user is active on the component
    }
  }, [scrollPosition, isAnimating, isScrolling, containerRef]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [isScrolling]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsAnimating(false);
      }
    }, { threshold: 1.0 });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    if (hasVisited) {
      setIsAnimating(false); // Reset the animation when the user revisits the component
    }
    setHasVisited(true); // Set the hasVisited state to true
  }, []);

  const bunTopStyle = {
    transform: isAnimating ? 'translateY(152px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  const cabbageStyle = {
    transform: isAnimating ? 'translateY(125px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  const pattyStyle = {
    transform: isAnimating ? 'translateY(80px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  const tomatoStyle = {
    transform: isAnimating ? 'translateY(-5px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  const cheeseStyle = {
    transform: isAnimating ? 'translateY(-150px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  const bunBottomStyle = {
    transform: isAnimating ? 'translateY(-220px)' : 'translateY(0)',
    transition: 'transform 1.9s ease-in-out',
  };

  return (
    <>
    <div ref={containerRef} className="burger-container">
      <div className="burger-part bun-top" style={bunTopStyle}>
        <img src={buntop} alt="Bun Top" width="15%" />
      </div>

      <div className="burger-part cabbage" style={cabbageStyle}>
        <img src={cabbage} alt="Cabbage" width="15%" />
      </div>

      <div className="burger-part patty" style={pattyStyle}>
        <img src={patty} alt="Patty" width="15%" />
      </div>

      <div className="burger-part tomato" style={tomatoStyle}>
        <img src={tomato} alt="Tomato" width="15%" />
      </div>

      <div className="burger-part cheese" style={cheeseStyle}>
        <img src={cheese} alt="Cheese" width="15%" />
      </div>

      <div
        className="burger-part bun-bottom"
        style={bunBottomStyle}
      >
        <img src={bottom} alt="Bun Bottom" width="15%" />
      </div>

      
    </div>
   
    </>
  );
};

export default Reinvent; 