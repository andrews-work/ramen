// import libraries
import React from 'react';

// import components
import Header from '../General/Header';
import Navmenu from '../General/Navbar';
import Footer from '../General/Footer';

// component
function AboutM() {

    // styles
    const containerStyle = {
        width: '100vw',
        height: 'auto',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid black',
        background: '--var(1)',
    };

    const paragraph = {
        width: '90vw',
        margin: '5vh',
    };

    // render
    return (
        <div> {/* Wrap everything in a single parent element */}
            <Header />
            <Navmenu />
            <div style={containerStyle} className="custom-container">
                <div className="row" style={paragraph}>
                    <div className="d-flex flex-column justify-content-center">
                        <h1 className="no-indent">
                        Welcome to [Restaurant Name], where the art of ramen reaches new heights. Nestled in the heart of [City], our restaurant is a haven for ramen enthusiasts seeking an authentic and soul-satisfying experience. Our journey begins with the careful selection of premium ingredients sourced from local farmers and purveyors who share our commitment to quality.

                        At [Restaurant Name], we take pride in crafting each bowl of ramen with meticulous attention to detail, blending traditional Japanese flavors with innovative culinary techniques. Our rich and savory broths, simmered to perfection for hours, create the foundation for a symphony of tastes that dance on your palate. From the tender slices of chashu pork to the perfectly cooked noodles, every element is a testament to our dedication to excellence.

                        Step into our cozy and inviting space, where the aroma of simmering broth and the warmth of genuine hospitality welcome you. Whether you're a ramen aficionado or a newcomer to this culinary art, our diverse menu offers a variety of options to suit every palate. Our goal is to transport you to the vibrant streets of Tokyo, where each bowl tells a story of tradition, passion, and culinary mastery.

                        At [Restaurant Name], ramen isn't just a dish; it's an experience. Join us on a culinary journey that celebrates the soulful simplicity and complex depth of flavors that define authentic ramen. We invite you to savor the warmth, comfort, and umami goodness that is uniquely [Restaurant Name].
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// export component
export default AboutM;
