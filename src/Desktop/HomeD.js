// Home desktop

// import libraries
import React from 'react';

// import components
import Header from '../General/Header';
import Navmenu from '../General/Navbar';
import Footer from '../General/Footer';
import MenuD from './MenuD';
import HoursD from '../Desktop/HoursD';

// component
function HomeD() {

    // render
    return (
        <div>
            <Header />
            <Navmenu />
            <HoursD />
            <MenuD />
            <Footer />
        </div>
    );
};

// export component
export default HomeD;
