// FooterComponents.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

// MissionStatement Component - Single Responsibility Principle
const MissionStatement = () => {
  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
      <p className="text-gray-400">
        Empowering students through technology, innovation, and collaboration.
        Join our community to enhance your CS skills and build the future.
      </p>
    </div>
  );
};

// FooterNavigation Component - Single Responsibility Principle
const FooterNavigation = () => {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'Events', href: '/events' },
    { title: 'Blog', href: '/blog' },
    { title: 'Study Materials', href: '/study-materials' },
    { title: 'Contact', href: '/contact' },
    { title: 'Hall of Fame', href: '/hall-of-fame' },
    { title: 'Treasury', href: '/treasury' },
  ];
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// TreasuryInfo Component - Single Responsibility Principle
const TreasuryInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Treasury Updates</h3>
      <p className="text-gray-400 mb-2">
        Current Balance: $2,450
      </p>
      <a 
        href="/treasury" 
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Financial Reports
      </a>
    </div>
  );
};

// SocialLinks Component - Single Responsibility Principle
const SocialLinks = () => {
  const socialPlatforms = [
    { icon: <Facebook />, href: 'https://facebook.com/csclub', label: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com/csclub', label: 'Twitter' },
    { icon: <Instagram />, href: 'https://instagram.com/csclub', label: 'Instagram' },
    // { icon: <GitHub />, href: 'https://github.com/csclub', label: 'GitHub' },
    { icon: <Mail />, href: 'mailto:contact@csclub.org', label: 'Email' },
  ];
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
      <div className="flex space-x-4">
        {socialPlatforms.map((platform) => (
          <a 
            key={platform.label}
            href={platform.href}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={platform.label}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

// LegalInfo Component - Single Responsibility Principle
const LegalInfo = () => {
  return (
    <div className="text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Computer Science Club. All rights reserved.</p>
      <div className="mt-1">
        <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
        {' • '}
        <a href="/terms" className="hover:text-gray-400 transition-colors">Terms of Use</a>
      </div>
    </div>
  );
};

// Footer Component - Composition over inheritance, Dependency Inversion
const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MissionStatement />
          <FooterNavigation />
          <TreasuryInfo />
          <div>
            <SocialLinks />
            <div className="mt-8">
              <LegalInfo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { 
  Footer, 
  MissionStatement, 
  FooterNavigation, 
  TreasuryInfo, 
  SocialLinks, 
  LegalInfo 
};