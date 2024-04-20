import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-1000 py-4 px-8 text-white">
      <div className="flex justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Manpuku</h1>
      </div>
    </header>
  );
};

export default Header;
