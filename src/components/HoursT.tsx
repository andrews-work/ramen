import React from 'react';

const HoursT: React.FC = () => {
  return (
    <section className="px-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-blue">Opening Hours</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2 decoration-white underline">Lunch</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-sm md:text-md">Monday</td>
              <td className="text-sm md:text-md px-4">Closed</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Tuesday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Wednesday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Thursday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Friday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Saturday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Sunday</td>
              <td className="text-sm md:text-md px-4">12:00 PM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 decoration-white underline">Dinner</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-sm md:text-md">Monday</td>
              <td className="text-sm md:text-md px-4">Closed</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Tuesday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Wednesday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Thursday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Friday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Saturday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-sm md:text-md">Sunday</td>
              <td className="text-sm md:text-md px-4">5:30 PM - 9:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HoursT;
