import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Calendar, Users, Star, CheckCircle } from 'lucide-react';
import FilterComponent from '../components/Components';
import { useFilteredData } from '../hooks/useFilteredData';
import { fetchEvents } from '../backend/api';

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

const EventGrid = ({ events }) => (
  <div className="px-8 py-8 event-grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  xxl:grid-cols-4 gap-5 mb-8">
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

// Main Component (Open/Closed, Liskov)
function EventPage() {
  
  const {
    displayedItems,
    categories,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    resetFilter
  } = useFilteredData(fetchEvents, { 
    defaultCategory: 'all', 
    categoryKey: 'category' 
  });

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message || 'Failed to load data.'}
      </div>
    );
  }

  return (
    <div>
      <FilterComponent
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="my-6"
          activeButtonClassName="font-medium"
     />
      <EventGrid events={displayedItems} />
    </div>
  );
}

export default EventPage;


// const EventPage = () => {
//   const [filteringEnabled, setFilteringEnabled] = useState(true);
  
//   // Get data independently of filtering
//   const { 
//     data: galleryItems, 
//     loading, 
//     error 
//   } = useDataProvider(fetchEvents, []);
  
//   // Set up filtering independently of data fetching
//   const {
//     activeFilter,
//     setActiveFilter,
//     filterItems,
//     extractCategories,
//     resetFilter
//   } = useFilter({ 
//     defaultCategory: 'all', 
//     categoryKey: 'category' 
//   });
  
//   // Get categories from the data when available
//   const categories = extractCategories(galleryItems);
  
//   // Display either filtered or all items based on filtering toggle
//   const displayedItems = filteringEnabled 
//     ? filterItems(galleryItems) 
//     : galleryItems;

//   return (
//     <div className="gallery-page max-w-[1500px] mx-auto p-4 my-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">Event Gallery</h1>
      
//       {/* Toggle for enabling/disabling filtering */}
//       <div className="flex justify-center mb-4">
//         <label className="flex items-center cursor-pointer">
//           <input 
//             type="checkbox" 
//             checked={filteringEnabled}
//             onChange={() => {
//               setFilteringEnabled(!filteringEnabled);
//               if (!filteringEnabled) {
//                 // Reset to default filter when re-enabling
//                 resetFilter();
//               }
//             }}
//             className="sr-only"
//           />
//           <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${filteringEnabled ? 'bg-blue-600' : 'bg-gray-300'} mr-2`}>
//             <div className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${filteringEnabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
//           </div>
//           <span>Enable Filtering</span>
//         </label>
//       </div>
      
//       {/* Only show filter if filtering is enabled */}
//       {filteringEnabled && (
//         <FilterComponent
//           categories={categories}
//           activeFilter={activeFilter}
//           onFilterChange={setActiveFilter}
//           className="my-6"
//           activeButtonClassName="font-medium"
//         />
//       )}
      
//       {/* Display items section */}
//       {loading ? (
//         <div className="text-center py-12">
//           <div className="animate-spin mx-auto h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
//           <p className="mt-4">Loading gallery items...</p>
//         </div>
//       ) : error ? (
//         <div className="text-center py-12 text-red-500">
//           <p>Error: {error}</p>
//           <button 
//             onClick={() => refresh()} 
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Try Again
//           </button>
//         </div>
//       ) : displayedItems.length === 0 ? (
//         <div className="text-center py-12 text-gray-500">
//           <p>No items found {filteringEnabled ? 'for this category' : ''}.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {displayedItems.map((item, index) => (
//             <div key={index} className="gallery-item bg-white rounded-lg shadow-lg overflow-hidden">
//               <img 
//                 src={item.imageUrl} 
//                 alt={item.title} 
//                 className="w-full h-48 object-cover" 
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg">{item.title}</h3>
//                 <p className="text-gray-600 text-sm mt-1">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };



