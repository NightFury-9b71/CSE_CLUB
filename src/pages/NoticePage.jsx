// File: NoticePage.jsx
import React, { useState, useEffect } from 'react';
import { LoadingIndicator, ErrorDisplay } from '../components/Components';

// Define types for notice data
const DEFAULT_NOTICE = {
  id: '',
  title: '',
  content: '',
  date: '',
  category: '',
  important: false,
  attachments: []
};

// NoticeService - Responsible for data fetching (Single Responsibility)
const NoticeService = {
  async getNotices() {
    try {
      // In a real app, this would fetch from an API
      // Mocking API response for demonstration
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: '1',
              title: 'Annual Alumni Meet 2025',
              content: 'The Computer Science Club is organizing the Annual Alumni Meet on April 15, 2025. All alumni are cordially invited to attend and share their experiences with current students.',
              date: '2025-03-01',
              category: 'Event',
              important: true,
              attachments: [
                {
                  id: 'att1',
                  name: 'Alumni_Meet_Details.pdf',
                  url: 'src/assets/অনার্স_২য়_সেমি_কোর্স_রেজি_বিজ্ঞপ্তি.pdf',
                  size: '1.2 MB',
                  type: 'application/pdf'
                }
              ]
            },
            {
              id: '2',
              title: 'Workshop on React and Modern Frontend Development',
              content: 'A three-day workshop on React and modern frontend development practices will be conducted from March 20-22, 2025. The workshop will cover fundamental concepts, advanced state management, and best practices.',
              date: '2025-02-28',
              category: 'Workshop',
              important: true,
              attachments: [
                {
                  id: 'att2',
                  name: 'Workshop_Schedule.pdf',
                  url: '/documents/Workshop_Schedule.pdf',
                  size: '850 KB',
                  type: 'application/pdf'
                },
                {
                  id: 'att3',
                  name: 'Prerequisites.pdf',
                  url: '/documents/Prerequisites.pdf',
                  size: '420 KB',
                  type: 'application/pdf'
                }
              ]
            },
            {
              id: '3',
              title: 'Membership Renewal 2025',
              content: 'All members are requested to renew their club membership for the year 2025. The deadline for renewal is March 31, 2025.',
              date: '2025-02-15',
              category: 'Administrative',
              important: false,
              attachments: [
                {
                  id: 'att4',
                  name: 'Membership_Form.pdf',
                  url: '/documents/Membership_Form.pdf',
                  size: '320 KB',
                  type: 'application/pdf'
                }
              ]
            }
          ]);
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching notices:', error);
      throw error;
    }
  }
};

// NoticeFilter Component (Single Responsibility)
const NoticeFilter = ({ categories, onFilterChange, activeFilters }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Filter by Category:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1 rounded-full text-sm ${
            activeFilters === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilters === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// NoticeSearch Component (Single Responsibility)
const NoticeSearch = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search notices..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute left-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
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
      </div>
    </div>
  );
};

// PDF Attachment Component (Single Responsibility)
const PDFAttachment = ({ attachment }) => {
  return (
    <div className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 mb-2">
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium">{attachment.name}</p>
        <p className="text-xs text-gray-500">{attachment.size}</p>
      </div>
      <a
        href={attachment.url}
        download={attachment.name}
        className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="Download PDF"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>
    </div>
  );
};

// NoticeCard Component (Single Responsibility)
const NoticeCard = ({ notice }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden mb-6 border-l-4 ${notice.important ? 'border-red-500' : 'border-blue-500'}`}>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-1">{notice.title}</h3>
            <div className="flex items-center mb-3">
              <span className="text-sm text-gray-600 mr-3">{formatDate(notice.date)}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {notice.category}
              </span>
              {notice.important && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full ml-2">
                  Important
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'max-h-96' : 'max-h-20'}`}>
          <p className="text-gray-700 mb-4">{notice.content}</p>
          
          {notice.attachments.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Attachments:</h4>
              {notice.attachments.map((attachment) => (
                <PDFAttachment key={attachment.id} attachment={attachment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main NoticePage Component (Compositional)
const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories from notices
  const categories = [...new Set(notices.map((notice) => notice.category))];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const data = await NoticeService.getNotices();
        setNotices(data);
        setFilteredNotices(data);
        setError(null);
      } catch (err) {
        setError('Failed to load notices. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // Filter notices based on category and search query
  useEffect(() => {
    let result = notices;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter((notice) => notice.category === activeFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (notice) =>
          notice.title.toLowerCase().includes(query) ||
          notice.content.toLowerCase().includes(query)
      );
    }
    
    setFilteredNotices(result);
  }, [activeFilter, searchQuery, notices]);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <header className="bg-blue-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl mt-2">Notices & Announcements</p>
        </div>
      </header> */}

      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <NoticeSearch onSearch={handleSearch} />
          
          <NoticeFilter
            categories={categories}
            activeFilters={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        {filteredNotices.length === 0 ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  No notices found. Try changing your filters or search query.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        )}
      </main>

      {/* <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Computer Science Department</p>
        </div>
      </footer> */}
      
    </div>
  );
};

export default NoticePage;