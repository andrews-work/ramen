import React from 'react';

// component
function HoursM() {
    // styles
    const component = {
        width: '100vw',
        height: 'auto',

        margin: 0,
        padding: 0,

        display: 'flex',
        justifyContent: 'center',

        borderBottom: '1px solid black',
    };

    const container = {
        width: '80vw',
        height: 'auto',

        margin: '3vh 0',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the content horizontally

    };

    const dayStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '5px', // Adjust the spacing between each day
    };

    // render
    return (
        <div style={component}>
            <div className="d-flex flex-column" style={container}>
                <div style={dayStyle}>
                    <h1>Monday</h1>
                    <p>Closed</p>
                </div>
                <div style={dayStyle}>
                    <h1>Tuesday</h1>
                    <p>11am - 9pm</p>
                </div>
                <div style={dayStyle}>
                    <h1>Wednesday</h1>
                    <p>11am - 9pm</p>
                </div>
                <div style={dayStyle}>
                    <h1>Thursday</h1>
                    <p>11am - midnight</p>
                </div>
                <div style={dayStyle}>
                    <h1>Friday</h1>
                    <p>11am - midnight</p>
                </div>
                <div style={dayStyle}>
                    <h1>Saturday</h1>
                    <p>11am - midnight</p>
                </div>
                <div style={dayStyle}>
                    <h1>Sunday</h1>
                    <p>11am - 9pm</p>
                </div>
            </div>
        </div>
    );
}

// export component
export default HoursM;
