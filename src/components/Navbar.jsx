import React from 'react';
import { text } from '../Text';

const Navbar = ({ onLanguageChange }) => {
  return (
    <nav className="h-8 bg-blue-900 flex items-center">
      <div className="flex justify-end w-full pr-4">
        <div className="bg-blue-800 rounded-l-md">
          <select 
            className="bg-white py-0.5 px-2 rounded-md text-sm h-6 focus:outline-none"
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            {Object.keys(text).map((lang) => (
              <option key={lang} value={lang} selected={lang === 'en'}>
                {text[lang].languageName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
