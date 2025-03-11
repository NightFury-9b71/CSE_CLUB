import mockData from './data'

// mock api endpoints

const fetchStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.stats);
    }, 100); // Simulate 500ms delay
  });
};

const fetchGalleryItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.galleryItems);
    }, 10); // Simulate 750ms delay
  });
};

const fetchAlumniCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.alumniCards);
    }, 10);
  });
};

const fetchResearchCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.researchCards);
    }, 10);
  });
};

const fetchTimelineItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.timelineItems);
    }, 10);
  });
};

const fetchFacultyCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.facultyCards);
    }, 10);
  });
};

const fetchEvents = (filter, search) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredEvents = mockData.events;

      // Apply filter
      if (filter && filter !== 'All') {
        filteredEvents = filteredEvents.filter((event) => event.category === filter);
      }

      // Apply search
      if (search) {
        filteredEvents = filteredEvents.filter((event) =>
          event.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      resolve(filteredEvents);
    }, 100); // Simulate 100ms delay
  });
};

const fetchPosts = (filter = 'All', search = '') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredPosts = mockData.posts;

      if (filter !== 'All') {
        filteredPosts = filteredPosts.filter(
          (post) => post.author.role === filter
        );
      }

      if (search) {
        filteredPosts = filteredPosts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      resolve(filteredPosts);
    }, 10); // Simulate network delay
  });
};

export {
  fetchStats , 
  fetchGalleryItems, 
  fetchAlumniCards, 
  fetchResearchCards, 
  fetchTimelineItems, 
  fetchFacultyCards,
  fetchEvents,
  fetchPosts,
};