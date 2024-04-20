import React from 'react';
import Link from 'next/link';

const Button: React.FC = () => {
  return (
    <section className="pb-8 px-4 flex justify-center mr-[6vw]">
      <div className="space-x-4">
      {/* <h2 className="text-2xl md:text-2xl font-bold mb-4">Menu</h2> */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <Link href="/menu">
            <div className="block cursor-pointer">View Menu</div>
          </Link>
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <Link href="/menu-photos">
            <div className="block cursor-pointer">Menu w/ photos</div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Button;
