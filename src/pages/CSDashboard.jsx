import React, { useState } from 'react';
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Terminal, Code, BookOpen, Calendar, Github, Cpu, Database, Grid, Clock, Award } from 'lucide-react';

const CSDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Enhanced student data with more details
  const studentData = {
    name: "Alex Chen",
    id: "CS23042",
    program: "Computer Science - AI Track",
    year: 3,
    gpa: 3.8,
    avatar: "/api/placeholder/150/150",
    github: "github.com/alexchen",
    completedCredits: 84,
    totalRequiredCredits: 120
  };
  
  // Enhanced courses data
  const courses = [
    { 
      id: 1, 
      name: 'Advanced Algorithms', 
      code: 'CS401',
      instructor: 'Dr. Sarah Johnson',
      grade: 'A-', 
      progress: 85, 
      deadline: '2025-03-20',
      upcomingAssignments: 2,
      difficulty: 4.2,
      category: 'Core',
      icon: <Grid className="text-indigo-500" size={20} />
    },
    { 
      id: 2, 
      name: 'Distributed Systems', 
      code: 'CS445',
      instructor: 'Prof. Michael Torres',
      grade: 'B+', 
      progress: 72, 
      deadline: '2025-03-25',
      upcomingAssignments: 1,
      difficulty: 4.5,
      category: 'Core',
      icon: <Database className="text-blue-500" size={20} />
    },
    { 
      id: 3, 
      name: 'Full-Stack Development', 
      code: 'CS422',
      instructor: 'Dr. Emily Rodriguez',
      grade: 'A', 
      progress: 94, 
      deadline: '2025-03-15',
      upcomingAssignments: 0,
      difficulty: 3.8,
      category: 'Elective',
      icon: <Code className="text-green-500" size={20} />
    },
    { 
      id: 4, 
      name: 'Machine Learning', 
      code: 'CS480',
      instructor: 'Prof. David Weng',
      grade: 'B', 
      progress: 68, 
      deadline: '2025-04-05',
      upcomingAssignments: 3,
      difficulty: 4.7,
      category: 'Specialization',
      icon: <Cpu className="text-purple-500" size={20} />
    }
  ];

  // Enhanced projects with more details
  const projects = [
    { 
      id: 1, 
      name: 'Neural Code Assistant', 
      description: 'An AI-powered code completion tool using transformer models',
      tech: ['Python', 'PyTorch', 'FastAPI', 'React'], 
      status: 'In Progress', 
      completion: 65,
      lastUpdated: '2025-03-10',
      github: 'github.com/alexchen/neural-code-assistant',
      collaborators: 2,
      priority: 'High'
    },
    { 
      id: 2, 
      name: 'Distributed DB System', 
      description: 'Implementation of a distributed database with sharding capabilities',
      tech: ['Go', 'gRPC', 'Docker', 'Kubernetes'], 
      status: 'Completed', 
      completion: 100,
      lastUpdated: '2025-02-15',
      github: 'github.com/alexchen/distdb',
      collaborators: 0,
      priority: 'Medium'
    },
    { 
      id: 3, 
      name: 'AR Campus Navigator', 
      description: 'Augmented reality app for campus navigation and information',
      tech: ['Swift', 'ARKit', 'Firebase', 'Node.js'], 
      status: 'Planning', 
      completion: 20,
      lastUpdated: '2025-03-08',
      github: 'github.com/alexchen/ar-navigator',
      collaborators: 3,
      priority: 'Medium'
    }
  ];

  // Enhanced skills with categories
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Languages' },
    { name: 'Python', level: 90, category: 'Languages' },
    { name: 'Go', level: 65, category: 'Languages' },
    { name: 'Java', level: 70, category: 'Languages' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Databases' },
    { name: 'MongoDB', level: 65, category: 'Databases' },
    { name: 'Docker', level: 60, category: 'DevOps' },
    { name: 'AWS', level: 55, category: 'DevOps' },
    { name: 'TensorFlow', level: 70, category: 'AI/ML' },
    { name: 'Data Structures', level: 85, category: 'CS Fundamentals' },
    { name: 'Algorithms', level: 80, category: 'CS Fundamentals' },
  ];

  // Enhanced events with more details
  const upcomingEvents = [
    { 
      id: 1, 
      title: 'University Hackathon', 
      date: '2025-03-20', 
      time: '09:00 AM - 09:00 PM',
      location: 'Engineering Building',
      type: 'event',
      description: 'Annual 12-hour coding competition with industry judges',
      priority: 'High' 
    },
    { 
      id: 2, 
      title: 'Advanced Algorithms Assignment', 
      date: '2025-03-15', 
      time: '11:59 PM',
      location: 'Online Submission',
      type: 'assignment',
      description: 'Implementation of distributed consensus algorithms',
      priority: 'High' 
    },
    { 
      id: 3, 
      title: 'Distributed Systems Midterm', 
      date: '2025-03-22', 
      time: '10:00 AM - 12:00 PM',
      location: 'CS Building Room 304',
      type: 'exam',
      description: 'Covers chapters 1-7, focus on consensus algorithms',
      priority: 'Critical' 
    },
    { 
      id: 4, 
      title: 'Tech Career Fair', 
      date: '2025-03-25', 
      time: '1:00 PM - 5:00 PM',
      location: 'Student Union',
      type: 'event',
      description: 'Networking with 30+ tech companies including Google and Microsoft',
      priority: 'Medium' 
    }
  ];

  // Performance data for charts
  const performanceData = [
    { name: 'Fall 2023', gpa: 3.6, credits: 16, courses: 5 },
    { name: 'Winter 2024', gpa: 3.7, credits: 18, courses: 6 },
    { name: 'Spring 2024', gpa: 3.9, credits: 15, courses: 5 },
    { name: 'Fall 2024', gpa: 3.8, credits: 18, courses: 6 },
    { name: 'Winter 2025', gpa: 3.8, credits: 17, courses: 5 },
  ];
  
  // Study time data for charts
  const studyTimeData = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 5.5 },
    { day: 'Thu', hours: 2.8 },
    { day: 'Fri', hours: 3.0 },
    { day: 'Sat', hours: 6.5 },
    { day: 'Sun', hours: 4.0 },
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Components
  const NavItem = ({ icon, label, section }) => (
    <div 
      className={`flex items-center p-3 mb-1 rounded-lg cursor-pointer ${activeSection === section ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}`}
      onClick={() => setActiveSection(section)}
    >
      {icon}
      <span className="ml-3 font-medium">{label}</span>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-center mb-3">
        {course.icon}
        <div className="ml-2">
          <h3 className="font-bold text-lg">{course.name}</h3>
          <div className="flex items-center text-xs text-gray-500">
            <span>{course.code}</span>
            <span className="mx-2">•</span>
            <span>{course.category}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xs text-gray-500">Instructor:</span>
          <span className="ml-1 text-sm">{course.instructor}</span>
        </div>
        <span className={`font-bold text-lg ${
          course.grade.startsWith('A') ? 'text-green-600' : 
          course.grade.startsWith('B') ? 'text-blue-600' : 'text-yellow-600'
        }`}>{course.grade}</span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              course.progress > 80 ? 'bg-green-500' : 
              course.progress > 60 ? 'bg-blue-500' : 'bg-yellow-500'
            }`}
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs mt-2">
        <div className="flex items-center">
          <BookOpen size={14} className="mr-1" />
          <span>{course.upcomingAssignments} tasks due</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>Due: {course.deadline}</span>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{project.name}</h3>
        <div className={`text-xs px-2 py-1 rounded-full font-medium ${
          project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>Completion</span>
          <span>{project.completion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              project.status === 'Completed' ? 'bg-green-500' : 
              project.status === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500'
            }`}
            style={{ width: `${project.completion}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs">
        <div className="flex items-center">
          <Github size={14} className="mr-1" />
          <a href="#" className="text-indigo-600 hover:underline">{project.github.split('/').pop()}</a>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>Updated: {project.lastUpdated}</span>
        </div>
      </div>
    </div>
  );

  const SkillCategory = ({ category, skills }) => (
    <div className="mb-6">
      <h3 className="text-md font-semibold mb-3 text-gray-700">{category}</h3>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">{skill.name}</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                skill.level > 80 ? 'bg-green-500' : 
                skill.level > 60 ? 'bg-blue-500' : 
                skill.level > 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  const EventItem = ({ event }) => (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-3 border-l-4 hover:shadow-md transition-shadow
      ${event.type === 'exam' ? 'border-red-500' : 
      event.type === 'assignment' ? 'border-yellow-500' : 'border-green-500'}">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{event.title}</h4>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Calendar size={12} className="mr-1" />
            <span>{event.date}</span>
            <span className="mx-1">•</span>
            <Clock size={12} className="mr-1" />
            <span>{event.time}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">{event.location}</div>
        </div>
        <div className={`text-xs px-2 py-0.5 rounded-full ${
          event.priority === 'Critical' ? 'bg-red-100 text-red-800' : 
          event.priority === 'High' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
        }`}>
          {event.priority}
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-2">{event.description}</p>
    </div>
  );

  // Render dashboard based on active section
  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Student profile and progress overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md col-span-1 flex items-center">
                <img src={studentData.avatar} alt="Profile" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-bold text-xl">{studentData.name}</h2>
                  <p className="text-gray-500 text-sm">{studentData.program}</p>
                  <p className="text-gray-500 text-sm">ID: {studentData.id}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md col-span-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Current GPA</h3>
                  <span className={`text-2xl font-bold ${
                    studentData.gpa >= 3.5 ? 'text-green-600' : 
                    studentData.gpa >= 3.0 ? 'text-blue-600' : 'text-yellow-600'
                  }`}>{studentData.gpa}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <Award className="text-indigo-500 mr-2" size={16} />
                  <span className="text-sm text-gray-600">Dean's List Eligible</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md col-span-1">
                <h3 className="font-semibold mb-2">Program Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-indigo-600 h-3 rounded-full" 
                    style={{ width: `${(studentData.completedCredits / studentData.totalRequiredCredits) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{studentData.completedCredits} credits completed</span>
                  <span>{Math.round((studentData.completedCredits / studentData.totalRequiredCredits) * 100)}%</span>
                </div>
              </div>
            </div>
            
            {/* Performance charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="font-semibold mb-3">GPA Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[3.0, 4.0]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="gpa" stroke="#6366F1" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="font-semibold mb-3">Weekly Study Hours</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studyTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Recent courses and upcoming events */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-3">Current Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses.slice(0, 2).map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Upcoming Events</h3>
                {upcomingEvents.slice(0, 3).map(event => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'courses':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Courses</h2>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm font-medium">All Courses</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Core</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Electives</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Specialization</div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="bg-white border border-gray-300 rounded-lg text-sm p-1">
                  <option>Deadline</option>
                  <option>Grade</option>
                  <option>Progress</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        );
        
      case 'projects':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Projects</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">+ New Project</button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm font-medium">All Projects</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">In Progress</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Completed</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Planning</div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="bg-white border border-gray-300 rounded-lg text-sm p-1">
                  <option>Last Updated</option>
                  <option>Completion</option>
                  <option>Priority</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
        
      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="bg-white p-4 rounded-xl shadow-md">
                  <SkillCategory category={category} skills={categorySkills} />
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'calendar':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Academic Calendar</h2>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm font-medium">All Events</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Exams</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Assignments</div>
                <div className="bg-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">Events</div>
              </div>
              <div className="flex items-center">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">+ Add Event</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map(event => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          </div>
        );
        
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header bar */}
      <div className="bg-indigo-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Terminal size={24} />
            <h1 className="text-xl font-bold ml-2">CodeTrack</h1>
          </div>
          <div className="flex items-center">
            <div className="bg-indigo-600 rounded-full p-2 mr-3">
              <Bell size={18} />
            </div>
            <img src={studentData.avatar} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow-md p-4 mb-6 md:mb-0 md:mr-6">
            <NavItem icon={<Grid size={20} />} label="Overview" section="overview" />
            <NavItem icon={<BookOpen size={20} />} label="Courses" section="courses" />
            <NavItem icon={<Code size={20} />} label="Projects" section="projects" />
            <NavItem icon={<Cpu size={20} />} label="Skills" section="skills" />
            <NavItem icon={<Calendar size={20} />} label="Calendar" section="calendar" />
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-2">LEARNING STATS</h3>
              <div className="bg-indigo-50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">This Week</span>
                  <span className="text-xs font-medium text-indigo-700">29.5 hrs</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "82%" }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <div className="font-medium">85%</div>
                    <div className="text-gray-500">Attendance</div>
                  </div>
                  <div>
                    <div className="font-medium">12</div>
                    <div className="text-gray-500">Assignments</div>
                  </div>
                  <div>
                    <div className="font-medium">4.2</div>
                    <div className="text-gray-500">GPA Trend</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1">
            {renderSection()}
          </div>

          </div>
      </div>
    </div>
  );
};

// Helper components not defined earlier
const Bell = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export default CSDashboard;