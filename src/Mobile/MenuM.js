import React, { useState } from 'react';

// component
function MenuD() {
  // state to track selected category
  const [selectedCategory, setSelectedCategory] = useState('null');

  // menu data
  const menuData = {
    entree: [
      { name: 'SHIO CABBAGE', price: '6', description: '' },
      { name: 'SMASHED CUCUMBER', price: '6', description: '' },
      { name: 'EDAMAME', price: '5', description: '' },
      { name: 'EDAMAME TRUFFLE', price: '8', description: '' },
      { name: 'SEAWEED SALAD', price: '5', description: '' },
      { name: 'CHICKEN KARAAGE', price: '14', description: 'JAPANESE FRIED CHICKEN' },
      { name: 'TAKO KARAAGE', price: '14', description: 'JAPANESE FRIED OCTOPUS' },
    ],
    main: {
      ramen: [
        { name: 'GARA SHOYU / SHIO GARA', price: '18.5', description: 'Soy / salt based chicken broth with chashu pork belly, bean sprouts, bamboo shoots, shallots, seaweed sheet' },
        { name: 'SHIO CORIANDER', price: '24.5', description: 'Salt based chicken broth with yuzu citrus, chashu pork belly, coriander, nitamago egg, bean sprout, bamboo shoots, shallots, lemon, seaweed sheet' },
        { name: 'TONKOTSU SHOYU / SHIO TONKOTSU', price: '20', description: 'Soy / salt based pork broth with chashu pork belly, cabbage, shallots, seaweed sheet' },
        { name: 'GYOKAI BLACK "KOGASHI"', price: '24.5', description: 'Soy based pork broth with charred garlic and fish flavour, chashu pork belly,bean sprouts, nitamago egg, shallots, seaweed sheet' },
        { name: 'MANPUKU RED', price: '26', description: 'Soy based pork broth with chashu pork belly, cabbage, nitamago egg, shallots, spicy dried onion, bean sprouts, seaweed sheet' },
        { name: 'LONG NAME, SIGNATURE - KONO DEAINI KANSHASHITE AIJOU TO JONETSU KOMENTE ISSHOUKENMEI TSUKUTTA UCHIRANO ICCHAN SUKINA MANPUKU SHIAWASE', price: '22', description: 'Soy based pork & chicken broth with garlic, chili and fish flavour, chashu pork belly, nitamago egg, bean sprout, bamboo shoot, shallots, seaweed sheet' },
      ], 
      'kids ramen': [
        { name: 'GARA', price: '15.5', description: 'Soy based chicken broth' },
        { name: 'TONKOTSU', price: '15.5', description: 'Soy based pork broth, nitamago egg, bean sprouts, shallots, naruto fish cko, corn, seaweed' },
      ],
      'rice dish': [
        { name: 'CHASHU RICE - HALF / FULL', price: '8 / 16', description: 'Chashu pork belly, bean sprouts, shallots, mashed eggs, teriyaki, mayo, seasame seeds' },
        { name: 'KARAAGE RICE - HALF / FULL', price: '9 / 18', description: 'Karaage chicken, bean sprouts, shallots, teriyaki, mayo, seasame seeds' },
      ]
    },
    sides: [
      { name: 'pork', price: '$18.00', description: 'Description for pork' },
      { name: 'egg', price: '$19.00', description: 'Description for egg' },
    ],
    extras: [
      { name: 'NOODLES - HALF / FULL', price: '2 / 4', description: 'Premium thin straight noodle with dry texture or Standard thickness straight noodle with cheqy texture ' },
      { name: 'STEAMED RICE', price: '4', description: '' },
      { name: 'CORN', price: '2', description: '' },
      { name: 'NITAMAGO EGG', price: '4', description: '' },
      { name: 'PORK CHASHU', price: '4.5', description: '' },
      { name: 'CHICKEN CHASHU', price: '4.5', description: '' },
      { name: 'BEAN SPROUTES', price: '2', description: '' },
      { name: 'CABBAGE', price: '2', description: '' },
      { name: 'CORIANDER', price: '2', description: '' },
      { name: 'NARUTO FISH CAKE', price: '2', description: '' },
      { name: 'SEAWEED SHEET', price: '2', description: '' },
      { name: 'SHALLOTS', price: '2', description: '' },
      { name: 'SPICY ONION', price: '3', description: '' },
      { name: 'BLACK GARLIC OIL', price: '3', description: '' },
      { name: 'SPICY RED OIL', price: '3', description: '' },
      { name: 'MENMA BAMBOO SHOOTS', price: '3', description: '' },
    ],
    drinks: [
      { name: 'COKE / ZERO COKE / SPRITE', price: '4', description: '' },
      { name: 'WATER / SPARKLING', price: '4', description: '' },
      { name: 'CALPIS', price: '4', description: '' },
      { name: 'TEA - GREEN / OOLONG', price: '4', description: '' },
      { name: 'RAMUNE', price: '5', description: '' },
    ],
    alcohol: [
      { name: 'ASAHI TAP BEER', price: '12', description: '' },
      { name: 'KIRIN ICHIBAN', price: '8', description: '' },
      { name: 'BYO - Wine only', price: '5', description: '' },
    ]
  };


  // component style
  const containerStyle = {
    width: '100vw',
    height: '75vh',

    margin: 0,
    padding: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',

    overflowY: 'scroll',
  };


  // menu bar style
  const bar = {
    width: '100vw',
    height: '10vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // menu items style

  const display = {
    width: '90vw',
    height: 'auto',
    
    display: 'flex',
    flexDirection: 'column',
    
    marginLeft: '5vw',
    margin: '0 auto',
    marginTop: '2vh',
  };
  

  // item style
  const itemStyle = {
    fontSize: '14px',
  };

  const space = {
    margin: '1vh 0',
  }

  const button= {
    color: 'blue',
    background: 'white',
    border: '1px solid blue',
  }

    // render
    return (
      <div style={containerStyle} className="custom-container">
        <div className="row">
          {/* categories */}
          <div className="d-flex justify-content-center" style={bar}>
            {/* Adjust the button styles */}
            <button style={button} onClick={() => setSelectedCategory('entree')} className={`mx-2 btn btn-primary btn-sm ${selectedCategory === 'entree' ? 'active' : ''}`}>Entree</button>
            <button style={button} onClick={() => setSelectedCategory('main')} className={`mx-2 btn btn-primary btn-sm ${selectedCategory === 'main' ? 'active' : ''}`}>Main</button>
            <button style={button} onClick={() => setSelectedCategory('extras')} className={`mx-2 btn btn-primary btn-sm ${selectedCategory === 'extras' ? 'active' : ''}`}>Extras</button>
            <button style={button} onClick={() => setSelectedCategory('drinks')} className={`mx-2 btn btn-primary btn-sm ${selectedCategory === 'drinks' ? 'active' : ''}`}>Drinks</button>
            <button style={button} onClick={() => setSelectedCategory('alcohol')} className={`mx-2 btn btn-primary btn-sm ${selectedCategory === 'alcohol' ? 'active' : ''}`}>Alcohol</button>
          </div>
  
          {/* menu */}
          <div className="d-flex flex-column" style={display}>
            {Array.isArray(menuData[selectedCategory]) ? (
              menuData[selectedCategory].map((item, index) => (
                <div className="d-flex flex-column" key={index}>
                  <div className="d-flex justify-content-between">
                    <h2 style={itemStyle}>{item.name}</h2>
                    <h2 style={itemStyle}>{item.price}</h2>
                  </div>
                  <div>
                    <p style={{ ...itemStyle, fontSize: '12px' }}>{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              Object.keys(menuData[selectedCategory]).map((subCategory, subIndex) => (
                <div key={subIndex}>
                  <h3>{subCategory}</h3>
                  {menuData[selectedCategory][subCategory].map((item, index) => (
                    <div className="d-flex flex-column" key={index} style={space}>
                      <div className="d-flex justify-content-between">
                        <h2 style={itemStyle}>{item.name}</h2>
                        <h2 style={itemStyle}>{item.price}</h2>
                      </div>
                      <div>
                        <p style={{ ...itemStyle, fontSize: '12px' }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
  
  // export component
  export default MenuD;