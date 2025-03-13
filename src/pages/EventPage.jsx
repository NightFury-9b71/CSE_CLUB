import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, CheckCircle, Filter, Search, ChevronRight, Heart, Clock, Sliders } from 'lucide-react';
import { useFilteredData } from '../hooks/useFilteredData';
import { fetchEvents } from '../backend/api';

// Enhanced event card with improved visuals
function EventCard({ event }) {
  const [isInterested, setIsInterested] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInterested = () => setIsInterested(!isInterested);
  const handleRegister = () => setIsRegistered(!isRegistered);

  // Calculate percentage for progress bars
  const registrationPercentage = Math.min(100, (event.registeredCount / event.registrationCapacity) * 100);
  const fundingPercentage = event.fundraisingGoal 
    ? Math.min(100, (event.currentFunds / event.fundraisingGoal) * 100) 
    : null;

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Floating action button */}
        <button 
          onClick={handleInterested}
          className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200 ${
            isInterested 
              ? 'bg-rose-500 text-white transform rotate-12 scale-110' 
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
          }`}
        >
          <Heart size={20} className={isInterested ? 'fill-white' : ''} />
        </button>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wider shadow-lg">
            {event.category}
          </span>
        </div>
        
        {/* Date badge */}
        <div className="absolute left-4 bottom-4 flex space-x-3 text-white">
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-emerald-300" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-emerald-300" />
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
        
        {/* Progress bars with modern styling */}
        <div className="space-y-3 pt-2">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-gray-700">Registration</span>
              <span className="text-gray-500">{event.registeredCount}/{event.registrationCapacity}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  registrationPercentage > 80 ? 'bg-amber-500' : 'bg-emerald-500'
                }`} 
                style={{ width: `${registrationPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {event.fundraisingGoal && (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-gray-700">Fundraising</span>
                <span className="text-gray-500">${event.currentFunds}/${event.fundraisingGoal}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-violet-500" 
                  style={{ width: `${fundingPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Participant counts */}
        <div className="flex justify-between text-xs text-gray-500 pt-2">
          <div className="flex items-center space-x-1">
            <Users size={14} className="text-gray-400" />
            <span>{event.registeredCount} attending</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-gray-400" />
            <span>{event.interestedCount} interested</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="pt-4 grid grid-cols-2 gap-3">
          <button
            onClick={handleInterested}
            className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
              isInterested
                ? 'bg-rose-100 text-rose-600 border border-rose-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart size={16} className={isInterested ? 'fill-rose-500' : ''} />
            <span>{isInterested ? 'Interested' : 'Interest'}</span>
          </button>
          <button
            onClick={handleRegister}
            className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${
              isRegistered
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
            }`}
          >
            {isRegistered ? <CheckCircle size={16} /> : <ChevronRight size={16} />}
            <span>{isRegistered ? 'Registered' : 'Register'}</span>
          </button>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {event.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {event.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{event.tags.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced filter component with search
function EnhancedFilterComponent({ categories, activeFilter, onFilterChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Upper row with search and filter toggle */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="relative flex-grow max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-indigo-500" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-11 pr-4 py-3 w-full bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all"
            />
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg transition-colors"
          >
            <Sliders size={18} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
        
        {/* Categories row */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}`}>
          <div className="py-2 flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === category 
                    ? 'bg-indigo-600 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
            
            {/* Advanced filters - for visual completion */}
            <div className="hidden md:flex ml-auto items-center gap-3">
              <div className="text-sm text-gray-500">More filters:</div>
              <select className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2">
                <option>Date: Upcoming</option>
                <option>Date: This Week</option>
                <option>Date: This Month</option>
              </select>
              <select className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2">
                <option>Location: Any</option>
                <option>Location: Online</option>
                <option>Location: In-Person</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Active filters display */}
        {activeFilter !== 'all' && (
          <div className="flex gap-2 items-center mt-3 pt-3 border-t border-gray-100">
            <span className="text-sm text-gray-500">Active filters:</span>
            <div className="flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">
              {activeFilter}
              <button 
                onClick={() => onFilterChange('all')}
                className="ml-1 text-indigo-500 hover:text-indigo-700"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Loading indicator with animation
function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-emerald-200 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-500 font-medium">Loading amazing events...</p>
    </div>
  );
}

// Error display with retry option
function ErrorDisplay({ message, onRetry }) {
  return (
    <div className="text-center py-16 max-w-md mx-auto">
      <div className="bg-red-50 p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-red-700 mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <button 
          onClick={onRetry} 
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Event grid with improved layout
const EventGrid = ({ events }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">
    {events.map((event) => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

// Empty state when no events match filters
const EmptyState = ({ activeFilter }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="bg-gray-100 p-6 rounded-full mb-4">
      <Calendar size={40} className="text-gray-400" />
    </div>
    <h3 className="text-xl font-bold text-gray-700 mb-2">No events found</h3>
    <p className="text-gray-500 max-w-md">
      {activeFilter !== 'all' 
        ? `There are no events in the "${activeFilter}" category right now.` 
        : "We couldn't find any events matching your search criteria."}
    </p>
  </div>
);

// Main Event Page Component
function EventPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const {
    displayedItems,
    categories,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    resetFilter,
    refresh
  } = useFilteredData(fetchEvents, { 
    defaultCategory: 'all', 
    categoryKey: 'category'
  });
  
  // Filter events by search term
  const filteredEvents = displayedItems.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} onRetry={refresh} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        {/* <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-b-3xl px-6 py-12 md:py-16 mb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Discover Amazing Events</h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Find and join community events that match your interests and make a difference.
            </p>
          </div>
        </div> */}
      
        {/* Filter and search */}
        <EnhancedFilterComponent 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSearch={setSearchTerm}
        />
      
        {/* Main content */}
        <div className="p-6">
          {filteredEvents.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {activeFilter === 'all' ? 'All Events' : `${activeFilter} Events`}
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'})
                  </span>
                </h2>
                <div className="flex gap-2">
                  <select className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600">
                    <option>Sort by: Date</option>
                    <option>Sort by: Popularity</option>
                    <option>Sort by: Registrations</option>
                  </select>
                </div>
              </div>
              <EventGrid events={filteredEvents} />
            </>
          ) : (
            <EmptyState activeFilter={activeFilter} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;