import React from 'react';
import { Outlet } from 'react-router-dom';
// Importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

function Root() {
  return (
    <>
      <Header />
      <div style={{border: '2px solid blue'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
