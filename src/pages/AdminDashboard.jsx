import React, { useState } from 'react';
import { BarChart, Calendar, ChevronDown, CircleDollarSign, FileText, Home, LayoutDashboard, LogOut, Menu, MessageSquare, PieChart, Settings, TrendingUp, Users, X, BookOpen, Bell } from 'lucide-react';

const AdminDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeYear, setActiveYear] = useState(1);
  const [activeSemester, setActiveSemester] = useState(1);
  
  // Sample data
  const years = [1, 2, 3, 4];
  const semesters = [1, 2];
  
  const studentsByYear = {
    1: {
      1: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Student ${i + 1}`,
        roll: `CS-Y1-${(i + 1).toString().padStart(2, '0')}`,
        email: `student${i + 1}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      })),
      2: Array.from({ length: 50 }, (_, i) => ({
        id: i + 51,
        name: `Student ${i + 51}`,
        roll: `CS-Y1-${(i + 51).toString().padStart(2, '0')}`,
        email: `student${i + 51}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      }))
    },
    2: {
      1: Array.from({ length: 50 }, (_, i) => ({
        id: i + 101,
        name: `Student ${i + 101}`,
        roll: `CS-Y2-${(i + 1).toString().padStart(2, '0')}`,
        email: `student${i + 101}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      })),
      2: Array.from({ length: 50 }, (_, i) => ({
        id: i + 151,
        name: `Student ${i + 151}`,
        roll: `CS-Y2-${(i + 51).toString().padStart(2, '0')}`,
        email: `student${i + 151}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      }))
    },
    3: {
      1: Array.from({ length: 50 }, (_, i) => ({
        id: i + 201,
        name: `Student ${i + 201}`,
        roll: `CS-Y3-${(i + 1).toString().padStart(2, '0')}`,
        email: `student${i + 201}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      })),
      2: Array.from({ length: 50 }, (_, i) => ({
        id: i + 251,
        name: `Student ${i + 251}`,
        roll: `CS-Y3-${(i + 51).toString().padStart(2, '0')}`,
        email: `student${i + 251}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      }))
    },
    4: {
      1: Array.from({ length: 50 }, (_, i) => ({
        id: i + 301,
        name: `Student ${i + 301}`,
        roll: `CS-Y4-${(i + 1).toString().padStart(2, '0')}`,
        email: `student${i + 301}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      })),
      2: Array.from({ length: 50 }, (_, i) => ({
        id: i + 351,
        name: `Student ${i + 351}`,
        roll: `CS-Y4-${(i + 51).toString().padStart(2, '0')}`,
        email: `student${i + 351}@university.edu`,
        attendance: Math.floor(Math.random() * 30) + 70,
        gpa: (Math.random() * 2 + 2).toFixed(2),
        role: i === 0 ? 'CR' : i === 1 ? 'ACR' : 'Student',
        dues: Math.floor(Math.random() * 1000) + 1000
      }))
    }
  };
  
  const treasuryData = {
    balance: 185750,
    totalIncome: 246500,
    totalExpense: 60750,
    incomeBreakdown: [
      { category: 'Student Fees', amount: 150000 },
      { category: 'Event Sponsorships', amount: 65000 },
      { category: 'Department Funding', amount: 25000 },
      { category: 'Workshop Registration', amount: 6500 }
    ],
    expenseBreakdown: [
      { category: 'Events & Competitions', amount: 32500 },
      { category: 'Equipment', amount: 15000 },
      { category: 'Educational Materials', amount: 8250 },
      { category: 'Miscellaneous', amount: 5000 }
    ],
    recentTransactions: [
      { id: 1, date: '2025-03-10', description: 'Hackathon Sponsorship', type: 'income', amount: 15000 },
      { id: 2, date: '2025-03-08', description: 'New Lab Equipment', type: 'expense', amount: 8500 },
      { id: 3, date: '2025-03-05', description: 'Student Fees Collection', type: 'income', amount: 22500 },
      { id: 4, date: '2025-03-03', description: 'Guest Speaker Honorarium', type: 'expense', amount: 2000 },
      { id: 5, date: '2025-02-28', description: 'Workshop Materials', type: 'expense', amount: 1200 }
    ]
  };
  
  const courses = {
    1: {
      1: [
        { code: 'CS101', name: 'Introduction to Programming', credits: 3 },
        { code: 'CS102', name: 'Discrete Mathematics', credits: 3 },
        { code: 'ENG101', name: 'Technical Communication', credits: 2 },
        { code: 'MATH101', name: 'Calculus I', credits: 3 },
        { code: 'PHY101', name: 'Physics for Computing', credits: 3 }
      ],
      2: [
        { code: 'CS103', name: 'Object-Oriented Programming', credits: 3 },
        { code: 'CS104', name: 'Data Structures', credits: 4 },
        { code: 'CS105', name: 'Digital Logic Design', credits: 3 },
        { code: 'MATH102', name: 'Calculus II', credits: 3 },
        { code: 'ENG102', name: 'Professional Communication', credits: 2 }
      ]
    },
    2: {
      1: [
        { code: 'CS201', name: 'Algorithms', credits: 4 },
        { code: 'CS202', name: 'Database Systems', credits: 3 },
        { code: 'CS203', name: 'Computer Architecture', credits: 3 },
        { code: 'MATH201', name: 'Linear Algebra', credits: 3 },
        { code: 'STAT201', name: 'Probability & Statistics', credits: 3 }
      ],
      2: [
        { code: 'CS204', name: 'Operating Systems', credits: 4 },
        { code: 'CS205', name: 'Software Engineering', credits: 3 },
        { code: 'CS206', name: 'Computer Networks', credits: 3 },
        { code: 'CS207', name: 'Web Development', credits: 3 },
        { code: 'BUS201', name: 'Tech Entrepreneurship', credits: 2 }
      ]
    },
    3: {
      1: [
        { code: 'CS301', name: 'Artificial Intelligence', credits: 3 },
        { code: 'CS302', name: 'Machine Learning', credits: 4 },
        { code: 'CS303', name: 'Computer Graphics', credits: 3 },
        { code: 'CS304', name: 'Mobile App Development', credits: 3 },
        { code: 'CS305', name: 'Cybersecurity Fundamentals', credits: 3 }
      ],
      2: [
        { code: 'CS306', name: 'Cloud Computing', credits: 3 },
        { code: 'CS307', name: 'Big Data Analytics', credits: 4 },
        { code: 'CS308', name: 'Human-Computer Interaction', credits: 3 },
        { code: 'CS309', name: 'IoT Systems', credits: 3 },
        { code: 'CS310', name: 'Advanced Databases', credits: 3 }
      ]
    },
    4: {
      1: [
        { code: 'CS401', name: 'Deep Learning', credits: 4 },
        { code: 'CS402', name: 'Advanced Computer Networks', credits: 3 },
        { code: 'CS403', name: 'Distributed Systems', credits: 3 },
        { code: 'CS404', name: 'Software Project Management', credits: 3 },
        { code: 'CS405', name: 'Elective I', credits: 3 }
      ],
      2: [
        { code: 'CS406', name: 'Capstone Project', credits: 6 },
        { code: 'CS407', name: 'Professional Ethics', credits: 2 },
        { code: 'CS408', name: 'Elective II', credits: 3 },
        { code: 'CS409', name: 'Elective III', credits: 3 }
      ]
    }
  };
  
  const getActiveStudents = () => {
    return studentsByYear[activeYear][activeSemester];
  };
  
  const getActiveCourses = () => {
    return courses[activeYear][activeSemester];
  };
  
  const updateStudentRole = (studentId, newRole) => {
    const updatedStudents = {...studentsByYear};
    updatedStudents[activeYear][activeSemester] = updatedStudents[activeYear][activeSemester].map(student => 
      student.id === studentId ? { ...student, role: newRole } : student
    );
    // In a real app, you would update the state: setStudentsByYear(updatedStudents)
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Total Students</p>
                    <h3 className="text-3xl font-bold">400</h3>
                  </div>
                  <Users size={40} className="opacity-80" />
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-blue-200 bg-opacity-30 rounded-full">
                    <div className="h-2 bg-white rounded-full w-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Treasury Balance</p>
                    <h3 className="text-3xl font-bold">${treasuryData.balance.toLocaleString()}</h3>
                  </div>
                  <CircleDollarSign size={40} className="opacity-80" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm">
                    <span className="flex items-center">
                      <TrendingUp size={16} className="mr-1" />
                      Income: ${treasuryData.totalIncome.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Courses</p>
                    <h3 className="text-3xl font-bold">38</h3>
                  </div>
                  <BookOpen size={40} className="opacity-80" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm">
                    <span>Across 4 years, 2 semesters each</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Upcoming Events</p>
                    <h3 className="text-3xl font-bold">5</h3>
                  </div>
                  <Calendar size={40} className="opacity-80" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm">
                    <span>Next: Hackathon (3 days)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Treasury Overview</h2>
                  <select className="border rounded-md p-2 text-sm">
                    <option value="year">This Year</option>
                    <option value="semester">This Semester</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Income</p>
                    <p className="text-2xl font-bold text-gray-800">${treasuryData.totalIncome.toLocaleString()}</p>
                    <div className="flex items-center mt-2 text-green-600 text-sm">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+12.5% from last period</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Expenses</p>
                    <p className="text-2xl font-bold text-gray-800">${treasuryData.totalExpense.toLocaleString()}</p>
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+8.2% from last period</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Recent Transactions</h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {treasuryData.recentTransactions.slice(0, 4).map(transaction => (
                          <tr key={transaction.id}>
                            <td className="px-4 py-3 text-sm text-gray-500">{transaction.date}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{transaction.description}</td>
                            <td className={`px-4 py-3 text-sm font-medium text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-right">
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All Transactions →</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Department Activity</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Bell size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">New Announcement: Hackathon Registration Open</h3>
                      <p className="text-sm text-gray-600">Posted 2 hours ago by Dr. Sarah Chen</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg flex items-center">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Calendar size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Schedule Update: AI Workshop moved to Room 302</h3>
                      <p className="text-sm text-gray-600">Posted 1 day ago by Prof. Michael Wong</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <BookOpen size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">New Course Materials: Advanced Algorithms</h3>
                      <p className="text-sm text-gray-600">Posted 2 days ago by Dr. Robert Martinez</p>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg flex items-center">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <CircleDollarSign size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Treasury Update: Industry Sponsorship Received</h3>
                      <p className="text-sm text-gray-600">Posted 3 days ago by Department Head</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All Activity →</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'students':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800">Student Management</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="year" className="text-sm font-medium text-gray-700">Year:</label>
                    <select 
                      id="year"
                      value={activeYear}
                      onChange={(e) => setActiveYear(Number(e.target.value))}
                      className="border border-gray-300 rounded-md p-2 text-sm"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>Year {year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <label htmlFor="semester" className="text-sm font-medium text-gray-700">Semester:</label>
                    <select 
                      id="semester"
                      value={activeSemester}
                      onChange={(e) => setActiveSemester(Number(e.target.value))}
                      className="border border-gray-300 rounded-md p-2 text-sm"
                    >
                      {semesters.map(semester => (
                        <option key={semester} value={semester}>Semester {semester}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition duration-150 shadow-md">
                    Add New Student
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Year {activeYear}, Semester {activeSemester}</h3>
                    <p className="text-sm text-gray-600">Total Students: {getActiveStudents().length}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-6">
                    <p className="text-sm text-gray-600">CR: {getActiveStudents().find(s => s.role === 'CR')?.name}</p>
                    <p className="text-sm text-gray-600">ACR: {getActiveStudents().find(s => s.role === 'ACR')?.name}</p>
                  </div>
                  <button className="bg-white text-blue-600 border border-blue-300 px-3 py-1 rounded text-sm hover:bg-blue-600 hover:text-white transition duration-150">
                    Export List
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dues</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getActiveStudents().slice(0, 10).map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.roll}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-medium">{student.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select 
                            value={student.role}
                            onChange={(e) => updateStudentRole(student.id, e.target.value)}
                            className={`text-sm py-1 px-2 rounded ${
                              student.role === 'CR' ? 'bg-green-100 text-green-800 border-green-200' : 
                              student.role === 'ACR' ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                              'bg-gray-100 text-gray-800 border-gray-200'
                            } border`}
                          >
                            <option value="Student">Student</option>
                            <option value="CR">CR</option>
                            <option value="ACR">ACR</option>
                            <option value="Treasurer">Treasurer</option>
                            <option value="Secretary">Secretary</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            parseFloat(student.gpa) >= 3.5 ? 'bg-green-100 text-green-800' :
                            parseFloat(student.gpa) >= 3.0 ? 'bg-blue-100 text-blue-800' :
                            parseFloat(student.gpa) >= 2.5 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {student.gpa}
                          </span>
                          </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                student.attendance >= 90 ? 'bg-green-500' :
                                student.attendance >= 75 ? 'bg-blue-500' :
                                student.attendance >= 60 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${student.attendance}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{student.attendance}%</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.dues.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings size={18} />
                            </button>
                            <button className="text-gray-600 hover:text-gray-800">
                              <FileText size={18} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <X size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing 10 of {getActiveStudents().length} students
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded text-sm text-gray-600">Previous</button>
                  <button className="px-3 py-1 bg-blue-50 border border-blue-200 rounded text-sm text-blue-600">1</button>
                  <button className="px-3 py-1 border rounded text-sm text-gray-600">2</button>
                  <button className="px-3 py-1 border rounded text-sm text-gray-600">3</button>
                  <button className="px-3 py-1 border rounded text-sm text-gray-600">Next</button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'courses':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800">Course Management</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="year-courses" className="text-sm font-medium text-gray-700">Year:</label>
                    <select 
                      id="year-courses"
                      value={activeYear}
                      onChange={(e) => setActiveYear(Number(e.target.value))}
                      className="border border-gray-300 rounded-md p-2 text-sm"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>Year {year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <label htmlFor="semester-courses" className="text-sm font-medium text-gray-700">Semester:</label>
                    <select 
                      id="semester-courses"
                      value={activeSemester}
                      onChange={(e) => setActiveSemester(Number(e.target.value))}
                      className="border border-gray-300 rounded-md p-2 text-sm"
                    >
                      {semesters.map(semester => (
                        <option key={semester} value={semester}>Semester {semester}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getActiveCourses().map((course) => (
                  <div key={course.code} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                      <h3 className="text-lg font-bold">{course.code}</h3>
                      <p className="text-sm opacity-90">{course.name}</p>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Credits</span>
                        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.credits}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Students</span>
                        <span className="text-sm font-medium">{50}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-3 rounded text-sm transition duration-150">
                          View Details
                        </button>
                        <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 py-2 px-3 rounded text-sm transition duration-150">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'treasury':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CircleDollarSign size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <h3 className="text-2xl font-bold text-gray-800">${treasuryData.balance.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Income</p>
                    <h3 className="text-2xl font-bold text-gray-800">${treasuryData.totalIncome.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <TrendingUp size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Expenses</p>
                    <h3 className="text-2xl font-bold text-gray-800">${treasuryData.totalExpense.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Income Breakdown</h2>
                <div className="space-y-4">
                  {treasuryData.incomeBreakdown.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{item.category}</span>
                        <span className="text-green-600 font-medium">${item.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(item.amount / treasuryData.totalIncome) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-500">{((item.amount / treasuryData.totalIncome) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Expense Breakdown</h2>
                <div className="space-y-4">
                  {treasuryData.expenseBreakdown.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{item.category}</span>
                        <span className="text-red-600 font-medium">${item.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${(item.amount / treasuryData.totalExpense) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-500">{((item.amount / treasuryData.totalExpense) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition duration-150 shadow-md">
                  Add Transaction
                </button>
              </div>
              
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {treasuryData.recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.type === 'income' ? 'Income' : 'Expense'}
                          </span>
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Settings size={18} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <X size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
            <h1 className="text-xl font-bold">CS Society</h1>
          </div>
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="text-gray-400 hover:text-white"
          >
            {isSidebarCollapsed ? <Menu size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className="mt-4">
          <div 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <LayoutDashboard size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Dashboard</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('students')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'students' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <Users size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Students</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('courses')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'courses' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <BookOpen size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Courses</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('treasury')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'treasury' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <CircleDollarSign size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Treasury</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('events')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'events' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <Calendar size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Events</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('messages')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'messages' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <MessageSquare size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Messages</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('reports')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'reports' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <BarChart size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Reports</span>}
          </div>
          
          <div 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
          >
            <Settings size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Settings</span>}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-800 transition-colors duration-150">
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="ml-3">Logout</span>}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold text-gray-800">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-1 text-gray-500 hover:text-gray-700">
                <Bell size={20} />
                <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">A</span>
                </div>
                <span className="text-sm font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;




///////////////////

// import React, { useState } from 'react';
// import { 
//   Users, Calendar, FileText, BookOpen, Bell, DollarSign, 
//   BarChart2, Settings, LogOut, Menu, X, User, Home,
//   PenTool, BookmarkIcon, Clock, Award, CreditCard, Briefcase,
//   List, CheckSquare, MessageSquare, Archive, Upload, Search,
//   ChevronDown, Plus, Filter, Edit2, Trash2
// } from 'lucide-react';

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentSection, setCurrentSection] = useState('dashboard');
//   const [currentSubsection, setCurrentSubsection] = useState(null);

//   // Mock data for the dashboard
//   const stats = [
//     { title: 'Total Members', value: '378', icon: <Users size={20} />, change: '+12%', color: 'bg-blue-500' },
//     { title: 'Active Projects', value: '24', icon: <Briefcase size={20} />, change: '+5%', color: 'bg-green-500' },
//     { title: 'Upcoming Events', value: '9', icon: <Calendar size={20} />, change: '+3%', color: 'bg-purple-500' },
//     { title: 'Treasury Balance', value: '$2,450', icon: <DollarSign size={20} />, change: '+8%', color: 'bg-amber-500' }
//   ];

//   const recentEvents = [
//     { id: 1, title: 'Hackathon 2025', date: '2025-04-15', attendees: 87, status: 'Upcoming' },
//     { id: 2, title: 'AI Workshop Series', date: '2025-03-28', attendees: 42, status: 'Upcoming' },
//     { id: 3, title: 'Career Fair', date: '2025-03-10', attendees: 156, status: 'Completed' },
//     { id: 4, title: 'Code Sprint Competition', date: '2025-02-20', attendees: 65, status: 'Completed' }
//   ];

//   const recentBlogs = [
//     { id: 1, title: 'Introduction to Quantum Computing', author: 'Dr. Alan Chen', date: '2025-03-10', views: 1245 },
//     { id: 2, title: 'The Future of AI Ethics', author: 'Maria Rodriguez', date: '2025-03-05', views: 985 },
//     { id: 3, title: 'Building Scalable Web Applications', author: 'James Wilson', date: '2025-02-28', views: 756 }
//   ];

//   const clubMembers = [
//     { id: 1, name: 'Emily Johnson', role: 'President', department: 'CS', year: 'Senior', joined: '2023-08-15' },
//     { id: 2, name: 'David Lee', role: 'Vice President', department: 'CS', year: 'Junior', joined: '2023-08-15' },
//     { id: 3, name: 'Sophie Wilson', role: 'Treasurer', department: 'CS', year: 'Junior', joined: '2023-09-10' },
//     { id: 4, name: 'Michael Chen', role: 'Secretary', department: 'CS', year: 'Sophomore', joined: '2024-01-05' },
//     { id: 5, name: 'Olivia Davis', role: 'Event Coordinator', department: 'CS', year: 'Senior', joined: '2023-08-15' }
//   ];
  
//   const classReps = [
//     { id: 1, name: 'Ryan Murphy', class: 'CS 101', year: 'Freshman', role: 'CR', email: 'r.murphy@university.edu' },
//     { id: 2, name: 'Emma Thompson', class: 'CS 101', year: 'Freshman', role: 'ACR', email: 'e.thompson@university.edu' },
//     { id: 3, name: 'Nathan Lee', class: 'CS 201', year: 'Sophomore', role: 'CR', email: 'n.lee@university.edu' },
//     { id: 4, name: 'Isabella Garcia', class: 'CS 201', year: 'Sophomore', role: 'ACR', email: 'i.garcia@university.edu' }
//   ];

//   const recentTransactions = [
//     { id: 1, description: 'Hackathon Sponsorship - TechCorp', amount: '+$1500.00', date: '2025-03-07', type: 'Income' },
//     { id: 2, description: 'Workshop Materials Purchase', amount: '-$350.25', date: '2025-03-05', type: 'Expense' },
//     { id: 3, description: 'Membership Fees - March', amount: '+$450.00', date: '2025-03-01', type: 'Income' },
//     { id: 4, description: 'Pizza for Club Meeting', amount: '-$85.50', date: '2025-02-28', type: 'Expense' }
//   ];
  
//   const studyMaterials = [
//     { id: 1, title: 'Data Structures & Algorithms Handbook', course: 'CS 301', uploaded: '2025-03-01', downloads: 87 },
//     { id: 2, title: 'Database Systems Complete Notes', course: 'CS 405', uploaded: '2025-02-15', downloads: 65 },
//     { id: 3, title: 'Web Development Frameworks Guide', course: 'CS 422', uploaded: '2025-02-10', downloads: 112 }
//   ];

//   const notifications = [
//     { id: 1, title: 'New event registration open', time: '2 hours ago', read: false },
//     { id: 2, title: 'Treasury report ready for review', time: '1 day ago', read: false },
//     { id: 3, title: 'New blog submission requires approval', time: '2 days ago', read: true }
//   ];

//   // Get unread notification count
//   const unreadCount = notifications.filter(n => !n.read).length;

//   // Navigation items 
//   const navigationItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
//     { id: 'members', label: 'Members', icon: <Users size={20} />, 
//       subItems: ['all-members', 'class-reps', 'roles'] },
//     { id: 'events', label: 'Events', icon: <Calendar size={20} />,
//       subItems: ['upcoming', 'past-events', 'attendance'] },
//     { id: 'blogs', label: 'Blogs', icon: <PenTool size={20} />,
//       subItems: ['all-posts', 'drafts', 'categories'] },
//     { id: 'academics', label: 'Academics', icon: <BookOpen size={20} />,
//       subItems: ['study-materials', 'syllabus', 'classrooms'] },
//     { id: 'notices', label: 'Notices', icon: <Bell size={20} /> },
//     { id: 'treasury', label: 'Treasury', icon: <DollarSign size={20} />,
//       subItems: ['transactions', 'budgets', 'reports'] },
//     { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} /> },
//     { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
//   ];

//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Function to set the current section and subsection
//   const navigate = (section, subsection = null) => {
//     setCurrentSection(section);
//     setCurrentSubsection(subsection);
//   };

//   // Helper component for navigation item
//   const NavItem = ({ item }) => {
//     const isActive = currentSection === item.id;
//     const [expanded, setExpanded] = useState(isActive);
    
//     return (
//       <div className="mb-1">
//         <div 
//           className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
//                     ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
//           onClick={() => {
//             navigate(item.id);
//             if (item.subItems) setExpanded(!expanded);
//           }}
//         >
//           <div className="flex items-center">
//             <div className="mr-3 text-gray-500">{item.icon}</div>
//             <span className={`${isActive ? 'font-medium' : ''}`}>{item.label}</span>
//           </div>
//           {item.subItems && (
//             <ChevronDown 
//               size={16} 
//               className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
//             />
//           )}
//         </div>
        
//         {item.subItems && expanded && (
//           <div className="pl-8 mt-1 space-y-1">
//             {item.subItems.map(subItem => (
//               <div 
//                 key={subItem}
//                 className={`text-sm py-1.5 px-3 rounded-lg cursor-pointer
//                           ${currentSubsection === subItem ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
//                 onClick={() => navigate(item.id, subItem)}
//               >
//                 {subItem.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   // Component for stat card
//   const StatCard = ({ stat }) => (
//     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//       <div className="flex justify-between">
//         <div>
//           <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
//           <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
//         </div>
//         <div className={`${stat.color} p-3 rounded-full text-white`}>
//           {stat.icon}
//         </div>
//       </div>
//       <div className="mt-2 text-xs font-medium text-green-600">
//         {stat.change} from last month
//       </div>
//     </div>
//   );

//   // Render the content based on the current section
//   const renderContent = () => {
//     switch (currentSection) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {stats.map((stat, index) => (
//                 <StatCard key={index} stat={stat} />
//               ))}
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Recent Events */}
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Recent Events</h2>
//                   <button className="text-sm text-blue-600 hover:underline">View All</button>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         <th className="px-4 py-2">Event</th>
//                         <th className="px-4 py-2">Date</th>
//                         <th className="px-4 py-2">Attendees</th>
//                         <th className="px-4 py-2">Status</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {recentEvents.map(event => (
//                         <tr key={event.id} className="hover:bg-gray-50">
//                           <td className="px-4 py-3">{event.title}</td>
//                           <td className="px-4 py-3 text-sm">{event.date}</td>
//                           <td className="px-4 py-3 text-sm">{event.attendees}</td>
//                           <td className="px-4 py-3">
//                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
//                                           ${event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
//                               {event.status}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
              
//               {/* Recent Blogs */}
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Recent Blog Posts</h2>
//                   <button className="text-sm text-blue-600 hover:underline">View All</button>
//                 </div>
//                 <div className="space-y-3">
//                   {recentBlogs.map(blog => (
//                     <div key={blog.id} className="p-3 hover:bg-gray-50 rounded-lg border border-gray-100">
//                       <h3 className="font-medium">{blog.title}</h3>
//                       <div className="flex justify-between mt-1 text-sm text-gray-500">
//                         <span>By {blog.author}</span>
//                         <span>{blog.views} views</span>
//                       </div>
//                       <div className="text-xs text-gray-400 mt-1">{blog.date}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Club Members */}
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 lg:col-span-2">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Club Leadership</h2>
//                   <button className="text-sm text-blue-600 hover:underline">Manage Members</button>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         <th className="px-4 py-2">Name</th>
//                         <th className="px-4 py-2">Role</th>
//                         <th className="px-4 py-2">Department</th>
//                         <th className="px-4 py-2">Year</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {clubMembers.map(member => (
//                         <tr key={member.id} className="hover:bg-gray-50">
//                           <td className="px-4 py-3 font-medium">{member.name}</td>
//                           <td className="px-4 py-3 text-sm">{member.role}</td>
//                           <td className="px-4 py-3 text-sm">{member.department}</td>
//                           <td className="px-4 py-3 text-sm">{member.year}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
              
//               {/* Recent Transactions */}
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Treasury Activity</h2>
//                   <button className="text-sm text-blue-600 hover:underline">View All</button>
//                 </div>
//                 <div className="space-y-2">
//                   {recentTransactions.map(transaction => (
//                     <div key={transaction.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
//                       <div className="flex items-center">
//                         <div className={`p-2 rounded-full mr-3 
//                                       ${transaction.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
//                           {transaction.type === 'Income' ? <DollarSign size={16} /> : <CreditCard size={16} />}
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium">{transaction.description}</p>
//                           <p className="text-xs text-gray-500">{transaction.date}</p>
//                         </div>
//                       </div>
//                       <span className={`font-medium ${transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
//                         {transaction.amount}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'members':
//         switch (currentSubsection) {
//           case 'class-reps':
//             return (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-2xl font-bold">Class Representatives</h1>
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                     <Plus size={16} className="mr-1" /> Assign New CR/ACR
//                   </button>
//                 </div>
                
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//                   <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//                     <div className="flex items-center">
//                       <div className="relative">
//                         <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
//                         <input 
//                           type="text" 
//                           placeholder="Search representatives..." 
//                           className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="ml-4">
//                         <button className="flex items-center text-gray-600 px-3 py-2 border border-gray-300 rounded-lg text-sm">
//                           <Filter size={16} className="mr-1" /> Filters
//                         </button>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         <th className="px-6 py-3">Name</th>
//                         <th className="px-6 py-3">Class</th>
//                         <th className="px-6 py-3">Year</th>
//                         <th className="px-6 py-3">Role</th>
//                         <th className="px-6 py-3">Email</th>
//                         <th className="px-6 py-3">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {classReps.map(rep => (
//                         <tr key={rep.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="font-medium">{rep.name}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">{rep.class}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">{rep.year}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
//                                           ${rep.role === 'CR' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
//                               {rep.role}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm">{rep.email}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             <div className="flex space-x-2">
//                               <button className="p-1 rounded-md hover:bg-gray-100">
//                                 <Edit2 size={16} className="text-gray-500" />
//                               </button>
//                               <button className="p-1 rounded-md hover:bg-gray-100">
//                                 <Trash2 size={16} className="text-gray-500" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
                  
//                   <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
//                     <div className="text-sm text-gray-500">
//                       Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> representatives
//                     </div>
//                     <div className="flex space-x-2">
//                       <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white disabled:opacity-50">
//                         Previous
//                       </button>
//                       <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white disabled:opacity-50">
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
            
//           default:
//             return (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-2xl font-bold">Club Members</h1>
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                     <Plus size={16} className="mr-1" /> Add New Member
//                   </button>
//                 </div>
                
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-3 md:space-y-0">
//                     <div className="flex flex-wrap gap-2">
//                       <div className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm">All Members (378)</div>
//                       <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Executive Board (12)</div>
//                       <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Committee Heads (24)</div>
//                       <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Regular Members (342)</div>
//                     </div>
                    
//                     <div className="relative">
//                       <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
//                       <input 
//                         type="text" 
//                         placeholder="Search members..." 
//                         className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
                  
//                   {/* Members table would go here - similar structure to the class reps table */}
//                   <div className="text-center py-8 text-gray-500">
//                     This section would display a paginated table of all club members with filtering capabilities
//                   </div>
//                 </div>
//               </div>
//             );
//         }
        
//       case 'events':
//         return (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold">Event Management</h1>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                 <Plus size={16} className="mr-1" /> Create Event
//               </button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center">
//                 <div className="rounded-full bg-blue-100 p-3 mr-4">
//                   <Calendar size={20} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Upcoming Events</p>
//                   <h3 className="text-2xl font-bold">9</h3>
//                 </div>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center">
//                 <div className="rounded-full bg-green-100 p-3 mr-4">
//                   <CheckSquare size={20} className="text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Past Events</p>
//                   <h3 className="text-2xl font-bold">24</h3>
//                 </div>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center">
//                 <div className="rounded-full bg-purple-100 p-3 mr-4">
//                   <Users size={20} className="text-purple-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Average Attendance</p>
//                   <h3 className="text-2xl font-bold">68</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Events calendar or list would go here */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//               <div className="mb-4 border-b border-gray-200 pb-4">
//                 <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
//                 {/* Event cards or calendar view */}
//                 <div className="space-y-3">
//                   {recentEvents.filter(e => e.status === 'Upcoming').map(event => (
//                     <div key={event.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
//                       <div className="flex justify-between">
//                         <h3 className="font-medium">{event.title}</h3>
//                         <div className="flex space-x-2">
//                           <button className="p-1 rounded-md hover:bg-gray-100">
//                             <Edit2 size={16} className="text-gray-500" />
//                           </button>
//                           <button className="p-1 rounded-md hover:bg-gray-100">
//                             <Trash2 size={16} className="text-gray-500" />
//                           </button>
//                         </div>
//                       </div>
//                       <div className="flex mt-2 text-sm text-gray-500">
//                         <div className="flex items-center mr-4">
//                           <Calendar size={14} className="mr-1" />
//                           <span>{event.date}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Users size={14} className="mr-1" />
//                           <span>{event.attendees} registered</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h2 className="text-lg font-semibold mb-4">Past Events</h2>
//                 {/* Past event list with attendance metrics */}
//                 <div className="space-y-3">
//                   {recentEvents.filter(e => e.status === 'Completed').map(event => (
//                     <div key={event.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
//                       <div className="flex justify-between">
//                         <h3 className="font-medium">{event.title}</h3>
//                         <span className="text-sm text-gray-500">{event.date}</span>
//                       </div>
//                       <div className="flex justify-between mt-2">
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Users size={14} className="mr-1" />
//                           <span>{event.attendees} attendees</span>
//                         </div>
//                         <button className="text-xs text-blue-600 hover:underline">View Report</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'blogs':
//         return (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold">Blog Management</h1>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                 <Plus size={16} className="mr-1" /> Create New Post
//               </button>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//               <div className="flex justify-between items-center mb-4">
//                 {/* <div className="flex flex */}


// <div className="flex justify-between items-center mb-4">
//                   <div className="flex flex-wrap gap-2">
//                     <div className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm">All Posts (42)</div>
//                     <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Published (32)</div>
//                     <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Drafts (7)</div>
//                     <div className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md text-sm hover:bg-gray-200 cursor-pointer">Under Review (3)</div>
//                   </div>
                  
//                   <div className="relative">
//                     <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
//                     <input 
//                       type="text" 
//                       placeholder="Search blog posts..." 
//                       className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         <th className="px-6 py-3">Title</th>
//                         <th className="px-6 py-3">Author</th>
//                         <th className="px-6 py-3">Date</th>
//                         <th className="px-6 py-3">Views</th>
//                         <th className="px-6 py-3">Status</th>
//                         <th className="px-6 py-3">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {recentBlogs.map(blog => (
//                         <tr key={blog.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4">
//                             <div className="font-medium">{blog.title}</div>
//                           </td>
//                           <td className="px-6 py-4">{blog.author}</td>
//                           <td className="px-6 py-4 text-sm text-gray-500">{blog.date}</td>
//                           <td className="px-6 py-4 text-sm">{blog.views}</td>
//                           <td className="px-6 py-4">
//                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                               Published
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 text-sm text-gray-500">
//                             <div className="flex space-x-2">
//                               <button className="p-1 rounded-md hover:bg-gray-100">
//                                 <Edit2 size={16} className="text-gray-500" />
//                               </button>
//                               <button className="p-1 rounded-md hover:bg-gray-100">
//                                 <Trash2 size={16} className="text-gray-500" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'academics':
//         switch (currentSubsection) {
//           case 'study-materials':
//             return (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-2xl font-bold">Study Materials</h1>
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                     <Upload size={16} className="mr-1" /> Upload Material
//                   </button>
//                 </div>
                
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//                   <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//                     <div className="flex items-center">
//                       <div className="relative">
//                         <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
//                         <input 
//                           type="text" 
//                           placeholder="Search materials..." 
//                           className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="ml-4">
//                         <button className="flex items-center text-gray-600 px-3 py-2 border border-gray-300 rounded-lg text-sm">
//                           <Filter size={16} className="mr-1" /> Filters
//                         </button>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         <th className="px-6 py-3">Title</th>
//                         <th className="px-6 py-3">Course</th>
//                         <th className="px-6 py-3">Upload Date</th>
//                         <th className="px-6 py-3">Downloads</th>
//                         <th className="px-6 py-3">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {studyMaterials.map(material => (
//                         <tr key={material.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4">
//                             <div className="flex items-center">
//                               <FileText size={16} className="text-gray-400 mr-2" />
//                               <span className="font-medium">{material.title}</span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4">{material.course}</td>
//                           <td className="px-6 py-4 text-sm text-gray-500">{material.uploaded}</td>
//                           <td className="px-6 py-4 text-sm">{material.downloads}</td>
//                           <td className="px-6 py-4 text-sm text-gray-500">
//                             <div className="flex space-x-2">
//                               <button className="text-blue-600 hover:underline">Download</button>
//                               <button className="text-gray-500 hover:underline">Delete</button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             );
            
//           default:
//             return (
//               <div className="space-y-6">
//                 <h1 className="text-2xl font-bold">Academic Resources</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div onClick={() => navigate('academics', 'study-materials')} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer">
//                     <div className="rounded-full bg-blue-100 p-3 inline-block mb-3">
//                       <FileText size={20} className="text-blue-600" />
//                     </div>
//                     <h3 className="text-lg font-medium mb-1">Study Materials</h3>
//                     <p className="text-sm text-gray-500">Access course notes, guides, and resources</p>
//                   </div>
                  
//                   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer">
//                     <div className="rounded-full bg-purple-100 p-3 inline-block mb-3">
//                       <BookOpen size={20} className="text-purple-600" />
//                     </div>
//                     <h3 className="text-lg font-medium mb-1">Course Syllabi</h3>
//                     <p className="text-sm text-gray-500">View curriculum and course requirements</p>
//                   </div>
                  
//                   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer">
//                     <div className="rounded-full bg-green-100 p-3 inline-block mb-3">
//                       <BookmarkIcon size={20} className="text-green-600" />
//                     </div>
//                     <h3 className="text-lg font-medium mb-1">Past Papers</h3>
//                     <p className="text-sm text-gray-500">Practice with previous exam papers</p>
//                   </div>
//                 </div>
//               </div>
//             );
//         }
      
//       case 'treasury':
//         return (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold">Treasury Management</h1>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                 <Plus size={16} className="mr-1" /> Record Transaction
//               </button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500">Current Balance</p>
//                 <h3 className="text-2xl font-bold mt-1 text-blue-600">$2,450.00</h3>
//                 <div className="mt-2 text-xs font-medium text-green-600">
//                   +$450 this month
//                 </div>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500">Income (March)</p>
//                 <h3 className="text-2xl font-bold mt-1 text-green-600">$1,950.00</h3>
//                 <div className="mt-2 text-xs font-medium">
//                   2 transactions
//                 </div>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500">Expenses (March)</p>
//                 <h3 className="text-2xl font-bold mt-1 text-red-600">$435.75</h3>
//                 <div className="mt-2 text-xs font-medium">
//                   2 transactions
//                 </div>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500">Budget Utilization</p>
//                 <h3 className="text-2xl font-bold mt-1">35%</h3>
//                 <div className="mt-2 text-xs font-medium text-gray-500">
//                   $1,564.25 remaining
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold">Recent Transactions</h2>
//                 <div className="flex space-x-2">
//                   <button className="text-gray-600 px-3 py-1 border border-gray-300 rounded-md text-sm">
//                     Export
//                   </button>
//                   <button className="text-blue-600 hover:underline text-sm">
//                     View All
//                   </button>
//                 </div>
//               </div>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       <th className="px-6 py-3">Description</th>
//                       <th className="px-6 py-3">Date</th>
//                       <th className="px-6 py-3">Type</th>
//                       <th className="px-6 py-3 text-right">Amount</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {recentTransactions.map(transaction => (
//                       <tr key={transaction.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 font-medium">{transaction.description}</td>
//                         <td className="px-6 py-4 text-sm">{transaction.date}</td>
//                         <td className="px-6 py-4">
//                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
//                                         ${transaction.type === 'Income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                             {transaction.type}
//                           </span>
//                         </td>
//                         <td className={`px-6 py-4 text-right font-medium ${transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
//                           {transaction.amount}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'notices':
//         return (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold">Notice Board</h1>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
//                 <Plus size={16} className="mr-1" /> Post Notice
//               </button>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-semibold">Active Notices</h2>
//                 <div className="flex space-x-2">
//                   <button className="text-blue-600 hover:underline text-sm">
//                     View Archive
//                   </button>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                   <div className="flex justify-between">
//                     <h3 className="font-medium">Registration for Hackathon 2025 Now Open</h3>
//                     <span className="text-sm text-gray-500">Posted 1 day ago</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     All members are invited to register for our annual hackathon. Registration closes on April 1, 2025.
//                   </p>
//                   <div className="mt-3 flex justify-between items-center">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 text-sm hover:underline">Edit</button>
//                       <button className="text-red-600 text-sm hover:underline">Delete</button>
//                     </div>
//                     <span className="text-xs text-gray-500">Valid until: April 1, 2025</span>
//                   </div>
//                 </div>
                
//                 <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                   <div className="flex justify-between">
//                     <h3 className="font-medium">Important: CS Department Meeting</h3>
//                     <span className="text-sm text-gray-500">Posted 2 days ago</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     The CS Department is hosting a meeting on March 20, 2025. All class representatives are required to attend.
//                   </p>
//                   <div className="mt-3 flex justify-between items-center">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 text-sm hover:underline">Edit</button>
//                       <button className="text-red-600 text-sm hover:underline">Delete</button>
//                     </div>
//                     <span className="text-xs text-gray-500">Valid until: March 20, 2025</span>
//                   </div>
//                 </div>
                
//                 <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
//                   <div className="flex justify-between">
//                     <h3 className="font-medium">New Study Materials Available</h3>
//                     <span className="text-sm text-gray-500">Posted 5 days ago</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     New study materials for CS 301 and CS 405 have been uploaded to the Academic Resources section.
//                   </p>
//                   <div className="mt-3 flex justify-between items-center">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 text-sm hover:underline">Edit</button>
//                       <button className="text-red-600 text-sm hover:underline">Delete</button>
//                     </div>
//                     <span className="text-xs text-gray-500">Valid until: April 15, 2025</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'analytics':
//         return (
//           <div className="space-y-6">
//             <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//               <h2 className="text-lg font-semibold mb-4">Club Growth Metrics</h2>
//               <div className="h-64 flex items-center justify-center text-gray-400">
//                 [Membership Growth Chart Would Display Here]
//               </div>
//               <div className="flex justify-between mt-4 text-sm text-gray-500">
//                 <div>
//                   <span className="font-medium">Total Growth:</span> +42% year over year
//                 </div>
//                 <div>
//                   <span className="font-medium">Retention Rate:</span> 86%
//                 </div>
//                 <div>
//                   <span className="font-medium">Active Members:</span> 312 (82%)
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//                 <h2 className="text-lg font-semibold mb-4">Event Participation</h2>
//                 <div className="h-64 flex items-center justify-center text-gray-400">
//                   [Event Attendance Chart Would Display Here]
//                 </div>
//               </div>
              
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//                 <h2 className="text-lg font-semibold mb-4">Resource Utilization</h2>
//                 <div className="h-64 flex items-center justify-center text-gray-400">
//                   [Resource Usage Chart Would Display Here]
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'settings':
//         return (
//           <div className="space-y-6">
//             <h1 className="text-2xl font-bold">Account Settings</h1>
            
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 lg:col-span-2">
//                 <div className="p-4 border-b border-gray-200">
//                   <h2 className="text-lg font-semibold">Profile Information</h2>
//                 </div>
//                 <div className="p-4">
//                   <div className="grid grid-cols-1 gap-4">
//                     <div className="flex items-center space-x-4">
//                       <div className="bg-gray-200 rounded-full p-8 relative">
//                         <User size={32} className="text-gray-500" />
//                         <div className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full text-white">
//                           <Plus size={16} />
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="font-medium">Emily Johnson</h3>
//                         <p className="text-sm text-gray-500">CS Club President</p>
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                         <input 
//                           type="text" 
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           defaultValue="Emily Johnson"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                         <input 
//                           type="email" 
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           defaultValue="emily.johnson@university.edu"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                         <input 
//                           type="text" 
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           defaultValue="Computer Science"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
//                         <input 
//                           type="text" 
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           defaultValue="CS123456"
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-end">
//                       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
//                         Save Changes
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//                   <div className="p-4 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold">Security</h2>
//                   </div>
//                   <div className="p-4">
//                     <button className="w-full text-left px-4 py-2 border border-gray-300 rounded-md text-sm mb-3">
//                       Change Password
//                     </button>
//                     <button className="w-full text-left px-4 py-2 border border-gray-300 rounded-md text-sm">
//                       Two-Factor Authentication
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//                   <div className="p-4 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold">Notifications</h2>
//                   </div>
//                   <div className="p-4">
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-sm">Email Notifications</span>
//                       <div className="relative inline-block w-10 mr-2 align-middle select-none">
//                         <input type="checkbox" name="toggle" id="toggle1" className="sr-only" defaultChecked />
//                         <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
//                         <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out"></div>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm">In-App Notifications</span>
//                       <div className="relative inline-block w-10 mr-2 align-middle select-none">
//                         <input type="checkbox" name="toggle" id="toggle2" className="sr-only" defaultChecked />
//                         <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
//                         <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
        
//       default:
//         return (
//           <div className="flex items-center justify-center h-64 text-gray-500">
//             Select a section from the sidebar
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Mobile sidebar toggle */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md"
//         onClick={toggleSidebar}
//       >
//         {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
//       </button>
      
//       {/* Sidebar */}
//       <div 
//         className={`fixed inset-y-0 left-0 transform ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-white border-r border-gray-200 md:static md:h-screen overflow-y-auto`}
//       >
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex items-center space-x-2">
//             <div className="bg-blue-600 text-white p-1.5 rounded">
//               <BookOpen size={20} />
//             </div>
//             <div>
//               <h1 className="font-bold text-lg">CS Club</h1>
//               <p className="text-xs text-gray-500">Admin Dashboard</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="py-4 px-3">
//           {navigationItems.map(item => (
//             <NavItem key={item.id} item={item} />
//           ))}
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//           <div className="flex items-center space-x-2 mb-4">
//             <div className="relative">
//               <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
//                 EJ
//               </div>
//               <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
//             </div>
//             <div>
//               <h3 className="font-medium text-sm">Emily Johnson</h3>
//               <p className="text-xs text-gray-500">CS Club President</p>
//             </div>
//           </div>
//           <button 
//             className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm w-full"
//           >
//             <LogOut size={18} />
//             <span>Log Out</span>
//           </button>
//         </div>
//       </div>
      
//       {/* Main content */}
//       <div className="flex-1 overflow-auto p-4 md:p-6">
//         <div className="mb-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">Welcome, Emily!</h1>
//             <p className="text-sm text-gray-500">Here's what's happening with the CS Club today.</p>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <button className="p-2 text-gray-500 hover:text-gray-700 relative">
//                 <Bell size={20} />
//                 {unreadCount > 0 && (
//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
//                     {unreadCount}
//                   </span>
//                 )}
//               </button>
//               {/* Notification dropdown would go here */}
//             </div>
            
//             <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
//               EJ
//             </div>
//           </div>
//         </div>
        
//         {/* Page content */}
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;