import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-1000 py-4 px-8 text-white">
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Manpuku</h1>
      </div>
      <nav className="flex justify-center space-x-4 text-white">
        <a className="text-base sm:text-lg md:text-xl lg:text-xl" href="#location">Contact</a>
        <a className="text-base sm:text-lg md:text-xl lg:text-xl" href="#location">Location</a>
        <a className="text-base sm:text-lg md:text-xl lg:text-xl" href="#hours">Hours</a>
        <a className="text-base sm:text-lg md:text-xl lg:text-xl" href="#about">About</a>
        <Link href="/menu">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl">Menu</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
