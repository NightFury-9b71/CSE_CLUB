// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import EventPage from '../pages/EventPage';

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/events" element={<EventPage />} />
    </Routes>
  );
};

export default RouteList;
