import React from 'react';
import Link from 'next/link';

const ButtonT: React.FC = () => {
  return (
    <section className="flex flex-row justify-center w-[30vw] mt-3">
      <div className="ml-[2vw] space-x-3">
        <Link href="/menu">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded p-1">
            View Menu
          </button>
        </Link>
        <Link href="/menu-photos">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded p-1">
            Menu w/ photos
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ButtonT;
