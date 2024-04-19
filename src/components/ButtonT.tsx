import React from 'react';
import Link from 'next/link';

const ButtonT: React.FC = () => {
  return (
    <section className="flex justify-center w-[20vw]">
      <div className="ml-[2vw]">
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded p-2">
          <Link href="/menu">
            <div className="block cursor-pointer">View Menu</div>
          </Link>
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded">
          <Link href="/menu-photos">
            <div className="block cursor-pointer">Menu w/ photos</div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ButtonT;
