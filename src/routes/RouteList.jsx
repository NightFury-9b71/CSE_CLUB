import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import EventPage from '../pages/EventPage';
import MainLayout from '../pages/MainLayout';

const RouteList = () => {
  return (
    <Routes>
      {/* Wrap all pages under MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />  {/* Index route for homepage */}
        <Route path="blogs" element={<BlogPage />} />
        <Route path="events" element={<EventPage />} />
      </Route>
    </Routes>
  );
};

export default RouteList;