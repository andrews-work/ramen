import React from 'react';

const Hours: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Hours</h2>

      <div>
        <h3 className="text-xl font-semibold mb-2">Lunch</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-base md:text-md mr-4">Monday</td>
              <td className="text-base md:text-md">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Tuesday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Wednesday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Thursday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Friday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Saturday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Sunday</td>
              <td className="text-base md:text-md">12:00 PM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Dinner</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-base md:text-md mr-4">Monday</td>
              <td className="text-base md:text-md">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Tuesday</td>
              <td className="text-base md:text-md">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Wednesday</td>
              <td className="text-base md:text-md">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Thursday</td>
              <td className="text-base md:text-md">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Friday</td>
              <td className="text-base md:text-md">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Saturday</td>
              <td className="text-base md:text-md">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md mr-4">Sunday</td>
              <td className="text-base md:text-md">5:30 PM - 9:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
