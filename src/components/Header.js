import React from 'react';
import { FaCloudSun } from 'react-icons/fa'; // Weather-related icon

function Header() {
  return (
    <header className="text-white text-center py-3">
      <h1>
        <FaCloudSun className="me-2" /> Saif Weather Reoprts
      </h1>
      <p className="text-accent">Your go-to source for current weather updates</p>
    </header>
  );
}

export default Header;