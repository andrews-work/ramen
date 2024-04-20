import React from 'react';

const Location: React.FC = () => {
  const handleViewMapClick = () => {
    window.open('https://maps.app.goo.gl/P6fsvGJd4P1VYfFJA', '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+61280410938');
  };

  return (
    <section className="py-10 px-4 mr-[7vw]">
      <h2 className="text-2xl font-bold mb-4">Location / Contact</h2>
      <div className="flex items-center mb-2">
        <a href="tel:+61280410938" className="text-orange hover:text-blue-600" onClick={handlePhoneCall}>
          (02) 8041 0938 
        </a>
      </div>
      <p>197 Military Road,</p>
      <p>Neutral Bay, 2089</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleViewMapClick}>
        View in Map
      </button>
    </section>
  );
};

export default Location;
