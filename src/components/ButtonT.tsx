import React from 'react';
import Link from 'next/link';

const ButtonT: React.FC = () => {
  return (
    <section className="flex justify-center w-[20vw] mt-2">
      <div className="ml-[2vw] space-x-2">
        <Link href="/menu">
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded p-2">
            View Menu
          </button>
        </Link>
        <Link href="/menu-photos">
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded p-2">
            Menu w/ photos
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ButtonT;
