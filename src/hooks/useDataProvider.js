import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for data fetching with loading state
 * This is completely independent from filtering
 * 
 * @param {Function} fetchFunction - The function to fetch data
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} - Data, loading state, error state, and refresh function
 */
export const useDataProvider = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  // Initial data loading
  useEffect(() => {
    fetchData();
  }, [...dependencies, fetchData]);

  // Function to manually refresh data
  const refresh = () => {
    fetchData();
  };

  return {
    data,
    loading,
    error,
    refresh
  };
};