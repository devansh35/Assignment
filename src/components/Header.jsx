import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-center py-4">
      <img src="./img.png" alt="Logo" className="mr-4 mt-40" />
      <h1 className="text-white text-3xl mt-40">
        <span>Barracuda</span>
        <span className="font-normal mx-2">|</span>
        <span className="font-semibold">Web Application Firewall</span>
      </h1>
    </header>
  );
};

export default Header;
