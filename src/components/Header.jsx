import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

// Logo Component
const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="src/assets/Club_Logo.jpg" 
        alt="CS Club Logo" 
        className="h-10 w-10 mr-2"
      />
      <span className="font-bold text-xl">CSE Club</span>
    </div>
  );
};

// NavLink Component (Updated to use react-router-dom's NavLink)
const NavLinkComponent = ({ to, children, isMobile = false }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `${isMobile ? 'block py-2' : 'px-3 py-2 rounded-md'} ${isActive ? 'text-blue-500' : 'hover:text-blue-500'} transition-colors`
      }
    >
      {children}
    </NavLink>
  );
};

// Dropdown Component - Open/Closed Principle (extendable)
const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group">
      <button 
        className="flex items-center px-3 py-2 rounded-md hover:text-blue-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="flex flex-col items-center bg-[#2c3e50] absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10">
          {children}
        </div>
      )}
    </div>
  );
};

// AuthButton Component
const AuthButton = () => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
      <User className="mr-2 h-4 w-4" />
      Login / Join
    </button>
  );
};

// MobileMenuButton Component
const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className="md:hidden p-2 rounded-md cursor-pointer"
      onClick={toggleMenu}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

// Navigation Component
const Navigation = ({ isMobile = false }) => {
  // Primary links
  const primaryLinks = [
    { title: 'Home', to: '/' },
    { title: 'Events', to: '/events' },
    { title: 'Blogs', to: '/blogs' },
    { title: 'Notices', to: '/notices' },
    { title: 'Treasury', to: '/treasury' },
  ];
  
  // Secondary links for dropdown
  const secondaryLinks = [
    { title: 'Study Materials', to: '/study-materials' },
    { title: 'Votings', to: '/votings' },
    { title: 'Contact', to: '/contacts' },
  ];
  
  if (isMobile) {
    return (
      <nav className="px-2 pt-2 pb-4">
        <div className="space-y-1">
          {primaryLinks.map((link) => (
            <NavLinkComponent key={link.to} to={link.to} isMobile={true}>
              {link.title}
            </NavLinkComponent>
          ))}
          <div className="py-2 font-semibold text-gray-500 text-sm">MORE</div>
          {secondaryLinks.map((link) => (
            <NavLinkComponent key={link.to} to={link.to} isMobile={true}>
              {link.title}
            </NavLinkComponent>
          ))}
        </div>
      </nav>
    );
  }
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {primaryLinks.map((link) => (
        <NavLinkComponent key={link.to} to={link.to}>
          {link.title}
        </NavLinkComponent>
      ))}
      <Dropdown title="More">
        {secondaryLinks.map((link) => (
          <NavLinkComponent key={link.to} to={link.to} isMobile={true}>
            {link.title}
          </NavLinkComponent>
        ))}
      </Dropdown>
    </nav>
  );
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-100 bg-[#2c3e50] text-white font-bold shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Navigation />
            <AuthButton />
          </div>
          
          <MobileMenuButton 
            isOpen={mobileMenuOpen} 
            toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)} 
          />
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <Navigation isMobile={true} />
          <div className="px-4 py-3">
            <AuthButton />
          </div>
        </div>
      )}
    </header>
  );
};

export { Header, Logo, Navigation, NavLinkComponent, Dropdown, AuthButton };
