import React from 'react';
import Link from 'next/link';

const ButtonLT: React.FC = () => {
  return (
    <section className="pb-2 px-2 flex-col justify-center text-sm">
      <div className="space-x-2">
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded">
          <Link href="/menu">
            <div className="block cursor-pointer">View Menu</div>
          </Link>
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded">
          <Link href="/menu-photos">
            <div className="block cursor-pointer">Menu w/ photos</div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ButtonLT;
