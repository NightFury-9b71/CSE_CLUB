import { useDataProvider } from "./useDataProvider";
import { useFilterState } from './useFilterState'

export const useFilteredData = (fetchFunction, filterOptions) => {
    // Get data independently of filtering
    const { data: items, loading, error } = useDataProvider(fetchFunction, []);
    
    // Set up filtering independently of data fetching
    const {
      activeFilter,
      setActiveFilter,
      filterItems,
      extractCategories,
      resetFilter
    } = useFilterState({
      defaultCategory: filterOptions.defaultCategory || 'all',
      categoryKey: filterOptions.categoryKey || 'category'
    });
    
    const categories = extractCategories(items);
    const displayedItems = filterItems(items);
    
    return {
      items,            // original data
      displayedItems,   // filtered data
      categories,       // available filter categories
      loading,
      error,
      activeFilter,
      setActiveFilter,
      resetFilter
    };
  }

  