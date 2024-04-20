import React from 'react';
import Link from 'next/link';

const ButtonLT: React.FC = () => {
  return (
    <section className="pb-2 px-2 flex-col ml-4 justify-center text-xs"> {/* Change text size here */}
      <div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-1 rounded"> {/* Change padding here */}
          <Link href="/menu">
            <div className="block cursor-pointer">View Menu</div>
          </Link>
        </button>
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-1 rounded"> {/* Change padding here */}
          <Link href="/menu-photos">
            <div className="block cursor-pointer">Menu w/ photos</div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ButtonLT;
