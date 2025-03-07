import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, CheckCircle } from 'lucide-react';
import { fetchEvents } from '../backend/api';

// Reusable Components (Single Responsibility)

const FilterControls = ({ onFilterChange, onSearchChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2 justify-center md:justify-end">
        <FilterButton
          active={activeFilter === 'All'}
          onClick={() => handleFilterClick('All')}
        >
          All
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Faculty'}
          onClick={() => handleFilterClick('Faculty')}
        >
          Faculty
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Senior Students'}
          onClick={() => handleFilterClick('Senior Students')}
        >
          Senior Students
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Clubs'}
          onClick={() => handleFilterClick('Clubs')}
        >
          Clubs
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Upcoming'}
          onClick={() => handleFilterClick('Upcoming')}
        >
          Upcoming
        </FilterButton>
      </div>
    </div>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 font-medium ${
      active
        ? 'bg-blue-600 text-white shadow-md' // Changed to blue for a modern look
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Lighter gray background
    } focus:outline-none focus:ring focus:border-blue-300`}
    onClick={onClick}
  >
    {children}
  </button>
);
const EventGrid = ({ events }) => (
  <div className="event-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
    {events.map((event) => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

const ProgressBar = ({ label, value, total, type }) => (
  <div className="event-progress mb-3">
    <div className="progress-label flex justify-between text-xs mb-1">
      <span>{label}</span>
      <span>{value}/{total}</span>
    </div>
    <div className="progress-bar h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className={`progress-fill h-full rounded-full ${type === 'fundraising' ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${(value / total) * 100}%` }}></div>
    </div>
  </div>
);

function EventCard({ event }) {
  const [isInterested, setIsInterested] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInterested = () => {
    setIsInterested(!isInterested);
  };

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:border-green-500">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wider">
          {event.category}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{event.description}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500 space-x-2">
            <Calendar size={16} />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-500 space-x-2">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Users size={16} />
            <span>{event.registeredCount} Registered</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star size={16} />
            <span>{event.interestedCount} Interested</span>
          </div>
        </div>
        {event.fundraisingGoal && (
          <div className="space-y-2">
            <ProgressBar
              label="Fundraising Goal"
              value={event.currentFunds}
              total={event.fundraisingGoal}
              type="fundraising"
            />
          </div>
        )}
        <div className="space-y-2">
            <ProgressBar
              label="Registrations"
              value={event.registeredCount}
              total={event.registrationCapacity}
              type="registration"
            />
        </div>

        <div className="flex space-x-4 pt-4 border-t border-gray-200">
          <button
            onClick={handleInterested}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
              isInterested
                ? 'bg-green-600 text-white'
                : 'border border-green-600 text-green-600 hover:bg-green-50'
            }`}
          >
            <Star size={16} />
            <span>{isInterested ? 'Interested' : 'Mark Interested'}</span>
          </button>
          <button
            onClick={handleRegister}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
              isRegistered
                ? 'bg-green-600 text-white'
                : 'border border-green-600 text-green-600 hover:bg-green-50'
            }`}
          >
            <CheckCircle size={16} />
            <span>{isRegistered ? 'Registered' : 'Register Now'}</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-2 pt-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


// Main Component (Open/Closed, Liskov)
const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const fetchedEvents = await fetchEvents();
          setEvents(fetchedEvents);
          setFilteredEvents(fetchedEvents); // Initialize filtered events with all events
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      applyFilters();
    }, [activeFilter, searchTerm, events]);
  
    const applyFilters = () => {
      let filtered = [...events];
  
      if (activeFilter !== 'All') {
        filtered = filtered.filter((event) => event.category === activeFilter);
      }
  
      if (searchTerm) {
        filtered = filtered.filter((event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setFilteredEvents(filtered);
    };
  
    const handleFilterChange = (filter) => {
      setActiveFilter(filter);
    };
  
    const handleSearchChange = (term) => {
      setSearchTerm(term);
    };
  
    if (loading) {
      return <div className="text-center py-8">Loading...</div>;
    }
  
    if (error) {
      return <div className="text-center py-8 text-red-500">Error: {error.message || 'Failed to load data.'}</div>;
    }
  
    return (
      <main className="container mx-auto px-4 pt-8">
        <FilterControls
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        <EventGrid events={filteredEvents} />
      </main>
    );
  };
  
  export default EventPage;