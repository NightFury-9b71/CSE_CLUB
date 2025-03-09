import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../backend/api'; // Ensure this import points to your API file
import { FaHeart, FaComment, FaSearch } from 'react-icons/fa';

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

// Filter Component
const Filter = ({ filter, handleFilterChange }) => (
  <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
    <span className="font-semibold">Filter by:</span>
    {['All', 'Teacher', 'Alumni', 'Senior'].map((f) => (
      <button
        key={f}
        onClick={() => handleFilterChange(f)}
        className={`py-2 px-4 rounded-md ${
          filter === f
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {f}
      </button>
    ))}
  </div>
);

// Search Component
const Search = ({ search, handleSearchChange }) => (
  <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
    <FaSearch className="text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Search posts..."
      className="border-none outline-none"
      value={search}
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  </div>
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
const PostList = ({ posts, openPost }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {posts.map((post) => (
      <Post key={post.id} post={post} openPost={openPost} />
    ))}
  </div>
);

// BlogPage Component (Container)
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts(filter, search).then(setPosts);
  }, [filter, search]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 border-b border-gray-200">
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <Search search={search} handleSearchChange={handleSearchChange} />
        </div>
        <PostList posts={posts} openPost={openPost} />
      </main>
    </div>
  );
};

export default BlogPage;