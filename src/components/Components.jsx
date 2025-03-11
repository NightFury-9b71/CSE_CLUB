import React from 'react';
import { FaSearch } from 'react-icons/fa';

// Filter Component
const Filter = ({ filterOptions = ['All', 'Faculty', 'Teachers'], selectedFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 md:mb-0 items-center">
      <span className="font-semibold">Filter by:</span>
      {filterOptions.map((option, index) => (
        <button
          key={index}
          className={`py-2 px-4 rounded-md whitespace-nowrap ${
            selectedFilter === option ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onFilterChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// Search Component
const Search = ({ search, handleSearchChange }) => (
  <div className="flex items-center bg-white rounded-md p-2 shadow-sm w-full md:w-auto">
    <FaSearch className="text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Search posts..."
      className="border-none outline-none w-full"
      value={search}
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  </div>
);

const FilterControls = ({ filterOptions, activeFilter, search, onFilterChange, onSearchChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 border-b border-gray-200">
      <Filter selectedFilter={activeFilter} onFilterChange={onFilterChange} filterOptions={filterOptions} />
      <Search search={search} handleSearchChange={onSearchChange} />
    </div>
  );
};


// import React from 'react';
import PropTypes from 'prop-types';

/**
 * Purely presentational filter component with no data dependencies
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const FilterComponent = ({
  categories = [],
  activeFilter = 'all',
  onFilterChange,
  className = '',
  buttonClassName = '',
  activeButtonClassName = '',
  inactiveButtonClassName = ''
}) => {
  // Format category text for display
  const formatCategoryText = (category) => {
    if (typeof category !== 'string') return category;
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className={`filter-container flex flex-wrap justify-center gap-2 ${className}`}>
      {categories.map((category) => {
        const isActive = activeFilter === category;
        
        return (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`
              ${buttonClassName}
              ${isActive ? activeButtonClassName : inactiveButtonClassName}
              px-4 py-2 rounded-full transition-colors duration-300
              ${isActive 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}
            `}
            aria-current={isActive ? 'true' : 'false'}
          >
            {formatCategoryText(category)}
          </button>
        );
      })}
    </div>
  );
};

FilterComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  activeButtonClassName: PropTypes.string,
  inactiveButtonClassName: PropTypes.string
};

export default FilterComponent;

export { Filter, Search, FilterControls, FilterComponent };
