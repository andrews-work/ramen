import React from 'react';

const Hours: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Hours</h2>

      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">Lunch</h3>
        <table className="w-full text-left">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="text-base md:text-md lg:text-lg">Monday</td>
              <td className="text-base md:text-md md:text-xl">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:text-xl">Tuesday</td>
              <td className="text-base md:text-md md:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:text-xl">Wednesday</td>
              <td className="text-base md:text-md md:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:text-xl">Thursday</td>
              <td className="text-base md:text-md md:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:text-xl">Friday</td>
              <td className="text-base md:text-md md:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:text-xl">Saturday</td>
              <td className="text-base md:text-md md:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Sunday</td>
              <td className="text-base md:text-lg lg:text-xl">12:00 PM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Dinner</h3>
        <table className="w-full text-left">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Monday</td>
              <td className="text-base md:text-lg lg:text-xl">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Tuesday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Wednesday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Thursday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Friday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Saturday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:text-xl">Sunday</td>
              <td className="text-base md:text-lg lg:text-xl">5:30 PM - 9:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
