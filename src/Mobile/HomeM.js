// Mobile - Home

// import libraries
import React from 'react';

// import components
import Header from '../General/Header';
import Navmenu from '../General/Navbar';
import Footer from '../General/Footer';
import MenuM from './MenuM';
import HoursM from './HoursM';


// component
function HomeM() {

    // render
    return (
        <div>
            <Header />
            <Navmenu />
            <HoursM />
            <MenuM />
            <Footer />
        </div>
    );
};

// export component
export default HomeM;
