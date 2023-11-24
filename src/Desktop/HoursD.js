import React from 'react';

// component
function HoursD() {
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
        width: '50vw',
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
        <div className="container mt-4">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Monday</h1>
                    <p className="lead">Closed</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Tuesday</h1>
                    <p className="lead">11am - 9pm</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Wednesday</h1>
                    <p className="lead">11am - 9pm</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Thursday</h1>
                    <p className="lead">11am - midnight</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Friday</h1>
                    <p className="lead">11am - midnight</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Saturday</h1>
                    <p className="lead">11am - midnight</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h1 className="h4">Sunday</h1>
                    <p className="lead">11am - 9pm</p>
                </div>
            </div>
        </div>
    );
}

// export component
export default HoursD;
