import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
