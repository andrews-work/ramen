// import libraries
import React from 'react';

// component
function Header() {

    // styles
    const containerStyle = {
        width: '100vw',
        height: '10vh',

        margin: 0,
        padding: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderBottom: '1px solid black',
        background: '--var(1)',
    };

    // render
    return (
        <div style={containerStyle} className="custom-container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center">
                    <h1 className="no-indent">Manpuku</h1>
                </div>
            </div>
        </div>
    );
};

// export component
export default Header;
