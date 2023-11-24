import React, { useState, useEffect } from 'react';
import Navmenu from './General/Navbar';
import Desktop from './Desktop/HomeD';
import Mobile from './Mobile/HomeM';

function ScreenSize() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      {isDesktop ? <Desktop /> : <Mobile />}
    </div>
  );
}

export default ScreenSize;
