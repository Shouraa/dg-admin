import React from 'react';
import AppDrawer from '../components/AppDrawer/AppDrawer';
import AppBarCustom from '../components/Header/AppBarCustom/AppBarCustom';
import AppContent from '../components/AppContent/AppContent';

const DefaultLayout = () => {
  return (
    <div>
      <AppDrawer />
      <div>
        <AppContent />
      </div>
    </div>
  );
};

export default DefaultLayout;
