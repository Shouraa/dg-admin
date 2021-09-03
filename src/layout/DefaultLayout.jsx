import React from 'react';
import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';

const DefaultLayout = () => {
  return (
    <div>
      <AppDrawer />
      <div>
        <AppBarCustom />
        <div>
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
