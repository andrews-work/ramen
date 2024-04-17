import React from 'react';
import Header from '../components/Header';

const TabletLayout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <h2>Tablet Layout</h2>
      {/* Add tablet-specific content here */}
    </div>
  );
};

export default TabletLayout;