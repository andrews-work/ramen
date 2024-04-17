// ramen/src/pages/menu.tsx
import React from 'react';
import Menu from '../components/Menu';

const MenuPage: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <Menu />
    </div>
  );
};

export default MenuPage;
