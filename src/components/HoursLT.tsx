import React from 'react';

const Hours: React.FC = () => {
  return (
    <section className="mb-4 ml-4">
      <div>
        <h3 className="text-lg font-semibold mb-2 decoration-white underline">Lunch</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-base sm:text-sm">Monday</td>
              <td className="text-base sm:text-sm px-4">Closed</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Tuesday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Wednesday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Thursday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Friday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Saturday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Sunday</td>
              <td className="text-base sm:text-sm px-4">12:00 PM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 decoration-white underline">Dinner</h3>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td className="text-base sm:text-sm">Monday</td>
              <td className="text-base sm:text-sm px-4">Closed</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Tuesday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Wednesday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Thursday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Friday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Saturday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base sm:text-sm">Sunday</td>
              <td className="text-base sm:text-sm px-4">5:30 PM - 9:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
