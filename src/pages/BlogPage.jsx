import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../backend/api'; // Ensure this import points to your API file
import { FaHeart, FaComment, FaSearch } from 'react-icons/fa';
import FilterComponent from '../components/Components';
import { useFilteredData } from '../hooks/useFilteredData';

// Header Component
const Header = () => (
  <section className="text-center py-12 px-4 bg-[#2c3e50] text-white mb-8">
    <h1 className="text-4xl font-bold mb-4">CSE Club Blog</h1>
    <p className="text-lg max-w-2xl mx-auto mb-6">
      Insights, tutorials, and experiences from our teachers, alumni, and senior students.
    </p>
    <a
      href="#"
      className="inline-block bg-white text-[#2c3e50] py-3 px-6 rounded-md font-semibold transition-all hover:shadow-md hover:translate-y-[-2px]"
    >
      Start Contributing
    </a>
  </section>
);

// Post Component
const Post = ({ post, openPost }) => (
  <div
    key={post.id}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => openPost(post)}
  >
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center mb-2">
        <img src={post.author.imageUrl} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
        <div>
          <span className="text-sm">
            {post.author.name} • {post.author.role}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-gray-600 py-1 px-2 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaHeart className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaComment className="h-4 w-4" />
            <span>{post.comments}</span>
          </div>
        </div>
        <span className="text-gray-600 text-sm">{post.date}</span>
      </div>
    </div>
  </div>
);

// PostList Component
const PostList = ({ posts, openPost='' }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {posts.map((post) => (
      <Post key={post.id} post={post} openPost={openPost} />
    ))}
  </div>
);

// BlogPage Component (Container)
// const BlogPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [filter, setFilter] = useState('All');
//   const [search, setSearch] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);

//   useEffect(() => {
//     fetchPosts(filter, search).then(setPosts);
//   }, [filter, search]);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const openPost = (post) => {
//     setSelectedPost(post);
//   };

//   const closePost = () => {
//     setSelectedPost(null);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="container mx-auto px-4">
//         <FilterControls
//           onFilterChange={handleFilterChange}
//           onSearchChange={handleSearchChange}
//           search = {search}
//         />
//         <PostList posts={posts} openPost={openPost} />
//       </main>
//     </div>
//   );
// };


const BlogPage = () => {
    
  const {
    displayedItems,
    categories,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    resetFilter
  } = useFilteredData(fetchPosts, { 
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
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className="container mx-auto px-4">
      <FilterComponent
                categories={categories}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                className="my-6"
                activeButtonClassName="font-medium"
           />
      <PostList posts={displayedItems} />
    </main>
  </div>
);
 }

export default BlogPage;