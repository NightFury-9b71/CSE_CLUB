// GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { fetchGalleryItems } from '../backend/api';

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const galleryData = await fetchGalleryItems();
        setGalleryItems(galleryData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredItems = filterCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filterCategory);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

//   Filter categories based on available data
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];

  return (
    <div className="gallery-page max-w-[1500px] mx-auto p-4 my-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Event Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our past events and activities captured through memorable moments</p>
      </div>

      {/* Filter Buttons */}
      {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              filterCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div> */}

      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-8">
          <p>Error loading gallery images. Please try again later.</p>
        </div>
      )}

      {!loading && !error && filteredItems.length === 0 && (
        <div className="text-center text-gray-600 py-8">
          <p>No gallery images found in this category.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <GalleryItem
            key={index}
            item={item}
            onClick={() => handleImageClick(item)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-6xl max-h-full" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[80vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-700 mt-2">{selectedImage.description}</p>
                {selectedImage.date && (
                  <p className="text-gray-500 text-sm mt-2">{selectedImage.date}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryItem = ({ item, onClick }) => {
  const { imageUrl, title, description, date } = item;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-lg h-[280px] transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
        {date && <p className="text-xs text-gray-300 mt-1">{date}</p>}
      </div>
    </div>
  );
};

export default GalleryPage;