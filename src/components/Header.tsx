import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <a href="#home" className="logo">Fandi Mata</a>
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#specials" onClick={() => setIsOpen(false)}>Specials</a>
            <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <>&times;</> : <>&#9776;</>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;