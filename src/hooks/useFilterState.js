// useFilter.js - Completely standalone filtering hook
import { useState, useCallback } from 'react';

/**
 * Custom hook for filtering data based on category
 * This hook is completely independent and has no side effects
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.defaultCategory - The default category to start with (default: 'all')
 * @param {string} options.categoryKey - The object property to filter by (default: 'category')
 * @returns {Object} - Filter state and handlers
 */
export const useFilterState = ({ 
  defaultCategory = 'all',
  categoryKey = 'category'
} = {}) => {
  // Track just the active filter state - nothing else
  const [activeFilter, setActiveFilter] = useState(defaultCategory);
  
  // Extract categories from any array of items
  const extractCategories = useCallback((items = []) => {
    if (!items.length) return [defaultCategory];
    
    // Extract unique categories from items
    const uniqueCategories = [...new Set(
      items
        .map(item => item[categoryKey])
        .filter(Boolean) // Remove undefined/null values
    )];
    
    // Add 'all' category if not already included
    return uniqueCategories.includes(defaultCategory) 
      ? uniqueCategories 
      : [defaultCategory, ...uniqueCategories];
  }, [defaultCategory, categoryKey]);
  
  // Function to filter items - returned for external use
  const filterItems = useCallback((items = []) => {
    if (activeFilter === defaultCategory) return items;
    return items.filter(item => item[categoryKey] === activeFilter);
  }, [activeFilter, categoryKey, defaultCategory]);
  
  // Reset to default category
  const resetFilter = useCallback(() => {
    setActiveFilter(defaultCategory);
  }, [defaultCategory]);
  
  return {
    activeFilter,
    setActiveFilter,
    filterItems,
    extractCategories,
    resetFilter
  };
};
