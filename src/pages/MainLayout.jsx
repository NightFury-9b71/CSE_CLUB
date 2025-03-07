import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow border">
        <Outlet /> {/* Render child routes using Outlet */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;