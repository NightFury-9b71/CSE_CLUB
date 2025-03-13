import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventPage from '../pages/EventPage';
import BlogPage from '../pages/BlogPage';
import NoticePage from '../pages/NoticePage';
import MainLayout from '../pages/MainLayout';
import TreasuryPage from '../pages/TreasuryPage';
import StudyMaterialPage from '../pages/StudyMaterialPage';
import VotingPage from '../pages/VotingPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import AlumniDetailsPage from '../pages/AlumniDetailsPage';
import AlumniProfilePage from '../pages/AlumniProfilePage';
import CSClubAuth from '../pages/AuthenticationPage';
import StudentDashboard from '../pages/DashBoard';
import AccountSettingsPage from '../pages/AccountSettingsPage';
import ClubMembersRoleDashboard from '../pages/ClubMembersRoleDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import CSDashboard from '../pages/CSDashboard';

const RouteList = () => {
  return (
    <Routes>
      {/* Wrap all pages under MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />  {/* Index route for homepage */}
        <Route path="events" element={<EventPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="notices" element={<NoticePage />} />
        <Route path="treasury" element={<TreasuryPage />} />
        <Route path="study-materials" element={<StudyMaterialPage />} />
        <Route path="votings" element={<VotingPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="alumni" element={<AlumniDetailsPage />} />
        <Route path="profile" element={<AlumniProfilePage />} />
        <Route path="sign-in" element={<CSClubAuth />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="settings" element={<AccountSettingsPage />} />
        <Route path="commite" element={<ClubMembersRoleDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="student" element={<CSDashboard />} />
      </Route>
    </Routes>
  );
};

export default RouteList;