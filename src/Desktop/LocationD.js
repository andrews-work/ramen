// import libraries
import React from 'react';

// import components
import Header from '../General/Header';
import Navmenu from '../General/Navbar';
import Footer from '../General/Footer';

import map from '../Images/map.png'

// component
function LocationD() {

    // styles
    const containerStyle = {
        width: '100vw',
        height: 'auto',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const img ={
        width: '30vw',
        height: 'auto',

        margin: '5vh 0',
    }

    // render
    return (
        <div> {/* Wrap everything in a single parent element */}
            <Header />
            <Navmenu />
            <div style={containerStyle} className="custom-container d-flex flex-column">
            <h1 className="text-center mt-3">We are in Neutral Bay!</h1>
                <img src={map} alt="map" className="img-fluid" style={img}/>

            </div>
            <Footer />
        </div>
    );
}

// export component
export default LocationD;
