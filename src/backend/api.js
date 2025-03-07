import mockData from './data'

// mock api endpoints

const fetchStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.stats);
    }, 500); // Simulate 500ms delay
  });
};

const fetchGalleryItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.galleryItems);
    }, 750); // Simulate 750ms delay
  });
};

const fetchAlumniCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.alumniCards);
    }, 600);
  });
};

const fetchResearchCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.researchCards);
    }, 800);
  });
};

const fetchTimelineItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.timelineItems);
    }, 700);
  });
};

const fetchFacultyCards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.facultyCards);
    }, 900);
  });
};

export {fetchStats , fetchGalleryItems, fetchAlumniCards, fetchResearchCards, fetchTimelineItems, fetchFacultyCards};