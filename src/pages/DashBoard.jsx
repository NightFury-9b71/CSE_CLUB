import React, { useState, useEffect } from 'react';
import { Bell, Settings, Edit, Eye, User, BookOpen, LogOut } from 'lucide-react';

// SOLID Principles Implementation:
// 1. Single Responsibility Principle: Each component has a single responsibility
// 2. Open/Closed Principle: Components are open for extension but closed for modification
// 3. Liskov Substitution: Child components can be substituted for their parent components
// 4. Interface Segregation: Only necessary props are passed to components
// 5. Dependency Inversion: High-level modules depend on abstractions, not details

// Mock API Service
const ApiService = {
  // Mock data - simulating a database
  _mockData: {
    userData: {
      id: 1,
      name: "Alex Johnson",
      role: "Student",
      department: "Computer Science",
      year: "3rd Year",
      avatar: "/api/placeholder/100/100"
    },
    blogs: [
      { id: 1, title: "Getting Started with React Hooks", date: "Feb 15, 2025", views: 42 },
      { id: 2, title: "My Experience at the Winter Hackathon", date: "Jan 25, 2025", views: 86 }
    ],
    notifications: [
      { id: 1, text: "Your blog post received 5 new comments", time: "2 hours ago", read: false },
      { id: 2, text: "New event: AI Workshop registration open", time: "1 day ago", read: false },
      { id: 3, text: "Treasury report for February is available", time: "3 days ago", read: true }
    ],
    activities: [
      { id: 1, type: "event", action: "registered", title: "Hackathon 2025", date: "March 10, 2025", icon: "✓", bgColor: "bg-green-100", textColor: "text-green-600" },
      { id: 2, type: "blog", action: "published", title: "Getting Started with React Hooks", date: "February 15, 2025", icon: "✎", bgColor: "bg-blue-100", textColor: "text-blue-600" },
      { id: 3, type: "bookmark", action: "bookmarked", title: "Advanced Python Techniques", date: "February 5, 2025", icon: "★", bgColor: "bg-purple-100", textColor: "text-purple-600" }
    ]
  },

  // Simulate API calls with Promise delayed resolution
  getUserData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ApiService._mockData.userData);
      }, 200);
    });
  },

  getBlogs: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ApiService._mockData.blogs);
      }, 300);
    });
  },

  getNotifications: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ApiService._mockData.notifications);
      }, 250);
    });
  },

  getActivities: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ApiService._mockData.activities);
      }, 350);
    });
  },

  markAllNotificationsAsRead: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        ApiService._mockData.notifications = ApiService._mockData.notifications.map(
          notification => ({ ...notification, read: true })
        );
        resolve({ success: true });
      }, 200);
    });
  }
};

// Context for User Data - Following Dependency Inversion
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [userDataRes, blogsRes, notificationsRes, activitiesRes] = await Promise.all([
          ApiService.getUserData(),
          ApiService.getBlogs(),
          ApiService.getNotifications(),
          ApiService.getActivities()
        ]);
        
        setUserData(userDataRes);
        setBlogs(blogsRes);
        setNotifications(notificationsRes);
        setActivities(activitiesRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const markAllNotificationsAsRead = async () => {
    try {
      await ApiService.markAllNotificationsAsRead();
      setNotifications(prevNotifications => 
        prevNotifications.map(notification => ({ ...notification, read: true }))
      );
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  const value = {
    userData,
    blogs,
    notifications,
    activities,
    loading,
    markAllNotificationsAsRead
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// ProfileCard Component - Single Responsibility
const ProfileCard = ({ userData }) => {
  if (!userData) return <div className="h-64 bg-white rounded-lg animate-pulse"></div>;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Profile Header */}
      <div className="bg-blue-800 p-4 text-white">
        <div className="flex items-center space-x-4">
          <img src={userData.avatar} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white" />
          <div>
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-sm text-blue-100">{userData.role} • {userData.department}</p>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="p-4 border-b">
        <div className="flex justify-between mb-1">
          <span className="text-gray-600 text-sm">Year</span>
          <span className="font-medium">{userData.year}</span>
        </div>
      </div>
      
      {/* Profile Menu */}
      <ProfileMenu />
    </div>
  );
};

// ProfileMenu Component - Single Responsibility
const ProfileMenu = () => {
  return (
    <div className="p-4">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">Settings</h3>
      <ul className="space-y-2">
        <li>
          <a href="/profile" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
            <User className="w-5 h-5 mr-3" />
            <span>Edit Profile</span>
          </a>
        </li>
        <li>
          <a href="/settings" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
            <Settings className="w-5 h-5 mr-3" />
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <a href="/bookmarks" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
            <BookOpen className="w-5 h-5 mr-3" />
            <span>Saved Materials</span>
          </a>
        </li>
        <li>
          <a href="/logout" className="flex items-center text-gray-700 hover:text-blue-600 p-2 rounded hover:bg-gray-50">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

// NotificationCenter Component - Single Responsibility
const NotificationCenter = ({ notifications, onMarkAllAsRead }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div className="relative mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">My Dashboard</h2>
        <button 
          onClick={() => setShowNotifications(!showNotifications)} 
          className="p-2 relative rounded-full text-gray-600 hover:bg-gray-200 focus:outline-none"
        >
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs text-center leading-5">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
      
      {/* Notification Panel */}
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-full md:w-80 bg-white rounded-lg shadow-lg border z-10">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Notifications</h3>
              <button 
                onClick={onMarkAllAsRead}
                className="text-sm text-blue-600 hover:underline"
              >
                Mark all as read
              </button>
            </div>
          </div>
          
          <NotificationList notifications={notifications} />
          
          <div className="p-3 text-center">
            <a href="/notifications" className="text-sm text-blue-600 hover:underline">View all notifications</a>
          </div>
        </div>
      )}
    </div>
  );
};

// NotificationList Component - Single Responsibility
const NotificationList = ({ notifications }) => {
  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No notifications
      </div>
    );
  }
  
  return (
    <div className="max-h-80 overflow-y-auto">
      {notifications.map(notification => (
        <div key={notification.id} className={`p-4 border-b ${!notification.read ? 'bg-blue-50' : ''}`}>
          <p className="text-sm text-gray-800">{notification.text}</p>
          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
        </div>
      ))}
    </div>
  );
};

// BlogSection Component - Single Responsibility
const BlogSection = ({ blogs }) => {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-medium">My Blogs</h3>
        <a href="/blogs/create" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Write New Blog</a>
      </div>
      
      {blogs.length > 0 ? (
        <div className="divide-y">
          {blogs.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <EmptyBlogState />
      )}
      
      {blogs.length > 0 && (
        <div className="p-4 border-t text-center">
          <a href="/blogs/my-blogs" className="text-blue-600 hover:underline">View all my blogs</a>
        </div>
      )}
    </div>
  );
};

// BlogItem Component - Single Responsibility
const BlogItem = ({ blog }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-800">{blog.title}</h4>
          <p className="text-sm text-gray-500">{blog.date} • {blog.views} views</p>
        </div>
        <div className="flex space-x-2">
          <a href={`/blogs/${blog.id}/edit`} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded">
            <Edit className="w-5 h-5" />
          </a>
          <a href={`/blogs/${blog.id}`} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded">
            <Eye className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// EmptyBlogState Component - Single Responsibility
const EmptyBlogState = () => {
  return (
    <div className="p-6 text-center">
      <p className="text-gray-500 mb-4">You haven't written any blogs yet</p>
      <a href="/blogs/create" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start Writing</a>
    </div>
  );
};

// ActivitySection Component - Single Responsibility
const ActivitySection = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Recent Activity</h3>
      </div>
      <div className="p-4 space-y-4">
        {activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
      <div className="p-4 border-t text-center">
        <a href="/activity" className="text-blue-600 hover:underline">View all activity</a>
      </div>
    </div>
  );
};

// ActivityItem Component - Single Responsibility
const ActivityItem = ({ activity }) => {
  return (
    <div className="flex items-start">
      <div className={`h-8 w-8 rounded-full ${activity.bgColor} flex items-center justify-center mr-3 flex-shrink-0`}>
        <span className={`${activity.textColor} text-sm`}>{activity.icon}</span>
      </div>
      <div>
        <p className="text-sm">
          You {activity.action} <a href="#" className="text-blue-600 hover:underline">{activity.title}</a>
        </p>
        <p className="text-xs text-gray-500">{activity.date}</p>
      </div>
    </div>
  );
};

// Loading Component - Single Responsibility
const LoadingState = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
    </div>
  );
};

// Main Dashboard Component - Composition of smaller components
const StudentDashboard = () => {
  const {
    userData,
    blogs,
    notifications,
    activities,
    loading,
    markAllNotificationsAsRead
  } = React.useContext(UserContext);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column - Profile Summary */}
          <div className="md:col-span-1">
            <ProfileCard userData={userData} />
          </div>
          
          {/* Middle and Right Columns */}
          <div className="md:col-span-2">
            {/* Notification Center */}
            <NotificationCenter 
              notifications={notifications} 
              onMarkAllAsRead={markAllNotificationsAsRead} 
            />
            
            {/* My Blogs Section */}
            <BlogSection blogs={blogs} />
            
            {/* Activity Summary */}
            <ActivitySection activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
};




export default StudentDashboard;