// import libraries
import React from 'react';

// component
function Footer() {

    // styles
    const containerStyle = {
        width: '100vw',
        height: '12vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        background: 'black',
    };

    // render
    return (
        <div style={containerStyle} className="custom-container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1 className="h5">(02) 8041 0938</h1> {/* Using Bootstrap's h5 class for smaller font size */}
                    <h1 className="h5">197 Military Road, Shop 3, Neutral Bay</h1>
                </div>
            </div>
        </div>
    );
};

// export component
export default Footer;
