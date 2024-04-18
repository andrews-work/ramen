import React from 'react';

const Hours: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Hours</h2>

      <div>
        <h3 className="text-lg md:textlg font-semibold mb-2">Lunch</h3>
        <table className="w-full text-left">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="text-base md:text-md lg:text-lg">Monday</td>
              <td className="text-base md:text-md md:textlg">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:textlg">Tuesday</td>
              <td className="text-base md:text-md md:textlg">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:textlg">Wednesday</td>
              <td className="text-base md:text-md md:textlg">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:textlg">Thursday</td>
              <td className="text-base md:text-md md:textlg">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:textlg">Friday</td>
              <td className="text-base md:text-md md:textlg">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-md md:textlg">Saturday</td>
              <td className="text-base md:text-md md:textlg">12:00 PM - 3:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Sunday</td>
              <td className="text-base md:text-lg lg:textlg">12:00 PM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-lg md:textlg font-semibold mb-2">Dinner</h3>
        <table className="w-full text-left">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Monday</td>
              <td className="text-base md:text-lg lg:textlg">Closed</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Tuesday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Wednesday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Thursday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 9:00 PM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Friday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Saturday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 12:00 AM</td>
            </tr>
            <tr>
              <td className="text-base md:text-lg lg:textlg">Sunday</td>
              <td className="text-base md:text-lg lg:textlg">5:30 PM - 9:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Hours;
