// Mock API Data

import reactImage from '../assets/react-image.jpg';
import fastapiImage from '../assets/fastapi-image.jpg';
import nodejsImage from '../assets/nodejs-image.jpg';
import authorImage1 from '../assets/author1.jpg';
import authorImage2 from '../assets/author2.jpg';
import authorImage3 from '../assets/author3.jpg';
import hackathonImage from '../assets/hackathon-image.jpg';
import datathonImage from '../assets/datathon-image.jpg';
import lfrImage from '../assets/lfr-image.jpg';
import aiBlogImage from '../assets/ai-blog.jpg';
import cloudBlogImage from '../assets/cloud-blog.jpg';
import securityBlogImage from '../assets/security-blog.jpg';
import conferenceImage from '../assets/conference-image.jpg';
import workshopImage from '../assets/workshop-image.jpg';
import releaseImage from '../assets/release-image.jpg';
import updateImage from '../assets/update-image.jpg';

const mockData = {
  stats: [
    { number: '50+', label: 'Awards Won' },
    { number: '120', label: 'Research Papers' },
    { number: '1200+', label: 'Successful Graduates' },
    { number: '25', label: 'Years of Excellence' },
  ],
  galleryItems: [
    { imageUrl: 'https://set.jainuniversity.ac.in/academics/computer-science-engineering/images/top-university-of-india3.jpg', title: 'Annual Symposium 2024', description: 'Our department\'s flagship event showcasing student research' },
    { imageUrl: 'https://www.cst.cam.ac.uk/sites/default/files/openday1500crop.jpg', title: 'Innovation Hackathon', description: '72-hour challenge resulting in revolutionary solutions' },
    { imageUrl: 'https://ssl.du.ac.bd/fontView/images/activity/1737866176CSEDUKUET.jpg', title: 'Excellence Awards Ceremony', description: 'Celebrating outstanding achievements in academics and research' },
    { imageUrl: 'https://www.ritrjpm.ac.in/images/computer-science/2022-2023/workshop-rpa_1.jpg', title: 'Distinguished Speaker Series', description: 'World-class experts sharing insights with our students' },
    { imageUrl: 'https://www.cse.ruet.ac.bd/public/storage/events/ruet-shines-at-46th-icpc-heartfelt-congratulations-to-ruet-aftermath-1.jpg', title: 'National Competition Winners', description: 'Our team bringing home the gold' },
    { imageUrl: 'https://bauet.ac.bd/ce/wp-content/uploads/sites/7/2022/03/DSC03895-1024x768.jpg', title: 'Industry Field Trip', description: 'Students gaining real-world exposure' },
  ],
  alumniCards: [
    { imageUrl: 'https://static.just.edu.bd/images/public/teacher/1672469742691_-1.jpeg', name: 'Dr. Sarah Johnson', year: 'Class of 2015', description: 'Lead Researcher at InnovaTech, pioneering work in artificial intelligence' },
    { imageUrl: 'https://static.just.edu.bd/images/public/teacher/1674976532125_-1.jpeg', name: 'Michael Chen', year: 'Class of 2010', description: 'Founder & CEO of FutureSystems, Forbes 30 Under 30' },
    { imageUrl: 'https://cdn.daily-sun.com/public/news_images/2018/05/03/daily-sun-2018-05-03-1.jpg', name: 'Dr. Emily Rodriguez', year: 'Class of 2008', description: 'Award-winning professor at Stanford University' },
    { imageUrl: '/api/placeholder/400/320', name: 'James Wilson', year: 'Class of 2012', description: 'CTO at GlobalTech, patent holder for breakthrough technology' },
    { imageUrl: '/api/placeholder/400/320', name: 'Aisha Patel', year: 'Class of 2018', description: 'Founder of EduTech Solutions, revolutionizing education technology' },
  ],
  researchCards: [
    { title: 'Quantum Computing Applications in Modern Healthcare', authors: 'Dr. Alan Smith, Sarah Johnson, Michael Lee', date: 'Published: October 2024', description: 'Groundbreaking research on applying quantum algorithms to medical diagnosis, cited over 150 times.' },
    { title: 'Sustainable Energy Solutions for Urban Environments', authors: 'Dr. Lisa Wang, James Wilson', date: 'Published: July 2023', description: 'Award-winning research presenting novel approaches to urban renewable energy implementation.' },
    { title: 'Machine Learning in Predictive Maintenance Systems', authors: 'Dr. Robert Johnson, Emily Chen', date: 'Published: March 2024', description: 'Research that led to industry partnerships and implementation in manufacturing sectors.' },
    { title: 'Advances in Biodegradable Materials for Consumer Products', authors: 'Dr. Carlos Rodriguez, Aisha Patel', date: 'Published: September 2023', description: 'Patent-pending research creating eco-friendly alternatives to common plastics.' },
  ],
  timelineItems: [
    { date: '2020', title: 'Undergraduate Research Program', description: 'Launched program enabling undergraduates to participate in cutting-edge research with faculty mentors.', isLeft: true },
    { date: '2021', title: 'Industry Partnership Initiative', description: 'Established collaborations with leading companies providing internships and funding.', isLeft: false },
    { date: '2022', title: 'Global Exchange Program', description: 'Created opportunities for students to study abroad at partner universities.', isLeft: true },
    { date: '2023', title: 'Innovation Lab', description: 'Opened state-of-the-art facility for student projects and entrepreneurial ventures.', isLeft: false },
    { date: '2024', title: 'Diversity in STEM Initiative', description: 'Established scholarships and mentorship programs to increase representation.', isLeft: true },
    { date: '2025 (Planned)', title: 'Center for Interdisciplinary Studies', description: 'Upcoming research center focusing on cross-disciplinary collaboration.', isLeft: false },
  ],
  facultyCards: [
    { imageUrl: '/api/placeholder/400/320', name: 'Prof. David Anderson', position: 'Department Chair', description: 'Pioneering research in quantum physics with over 200 publications' },
    { imageUrl: '/api/placeholder/400/320', name: 'Dr. Maria Gonzalez', position: 'Research Director', description: 'Leading expert in artificial intelligence and neural networks' },
    { imageUrl: '/api/placeholder/400/320', name: 'Dr. Thomas Zhang', position: 'Associate Professor', description: 'Award-winning educator and mentor with industry experience' },
    { imageUrl: '/api/placeholder/400/320', name: 'Dr. Kimberly Johnson', position: 'Assistant Professor', description: 'Emerging researcher in sustainable technologies with multiple patents' },
  ],
  events: [
    {
      id: 1,
      imageUrl: hackathonImage,
      organizer: 'Prof. Johnson (Faculty)',
      title: 'Annual Science Symposium',
      date: 'March 15, 2025',
      location: 'Main Hall',
      description: 'A day-long event showcasing student research projects and featuring guest speakers from leading research institutions.',
      currentFunds: 3200,
      fundraisingGoal: 5000,
      registeredCount: 78,
      registrationCapacity: 150,
      interestedCount: 35,
      category: 'Faculty',
      tags: ['Science', 'Research', 'Symposium'],
    },
    {
      id: 2,
      imageUrl: datathonImage,
      organizer: 'Sarah Chen (Senior)',
      title: 'Leadership Workshop',
      date: 'March 22, 2025',
      location: 'Room 203',
      description: 'Interactive workshop focusing on developing leadership skills through practical exercises and team building activities.',
      currentFunds: 800,
      fundraisingGoal: 1500,
      registeredCount: 42,
      registrationCapacity: 50,
      interestedCount: 28,
      category: 'Senior Students',
      tags: ['Leadership', 'Workshop', 'Skills'],
    },
    {
      id: 3,
      imageUrl: lfrImage,
      organizer: 'Dr. Martinez (Faculty)',
      title: 'International Culture Fair',
      date: 'April 5, 2025',
      location: 'Campus Quad',
      description: 'Celebrate diversity with food, performances, and exhibits from cultures around the world. Open to the entire campus community.',
      currentFunds: 4800,
      fundraisingGoal: 7000,
      registeredCount: 125,
      registrationCapacity: 300,
      interestedCount: 87,
      category: 'Faculty',
      tags: ['Culture', 'Fair', 'International'],
    },
    {
      id: 4,
      imageUrl: '/api/placeholder/400/320',
      organizer: 'Robotics Club (Senior-led)',
      title: 'Robotics Competition',
      date: 'April 12, 2025',
      location: 'Engineering Building',
      description: 'Annual robotics competition where teams compete to design robots that can complete specific challenges.',
      currentFunds: 2400,
      fundraisingGoal: 3000,
      registeredCount: 18,
      registrationCapacity: 30,
      interestedCount: 45,
      category: 'Clubs',
      tags: ['Robotics', 'Competition', 'Engineering'],
    },
    {
        id: 5,
        imageUrl: '/api/placeholder/400/320',
        organizer: 'Drama Club',
        title: 'Spring Play: A Midsummer Night\'s Dream',
        date: 'April 28, 2025',
        location: 'Campus Theater',
        description: 'Join us for a magical evening with Shakespeare\'s classic comedy.',
        currentFunds: 1200,
        fundraisingGoal: 2000,
        registeredCount: 60,
        registrationCapacity: 100,
        interestedCount: 55,
        category: 'Clubs',
        tags: ['Drama', 'Theater', 'Shakespeare'],
    },
    {
        id: 6,
        imageUrl: '/api/placeholder/400/320',
        organizer: 'Student Government',
        title: 'Campus Cleanup Day',
        date: 'May 5, 2025',
        location: 'Various Locations',
        description: 'Help us make our campus beautiful! Volunteers needed for cleanup efforts.',
        currentFunds: 0,
        fundraisingGoal: 0,
        registeredCount: 80,
        registrationCapacity: 150,
        interestedCount: 70,
        category: 'Senior Students',
        tags: ['Cleanup', 'Volunteer', 'Community'],
    },
    {
        id: 7,
        imageUrl: '/api/placeholder/400/320',
        organizer: 'Physics Department',
        title: 'Astrophysics Lecture Series',
        date: 'May 10, 2025',
        location: 'Science Lecture Hall',
        description: 'A series of lectures by renowned astrophysicists. Open to all students and faculty.',
        currentFunds: 500,
        fundraisingGoal: 1000,
        registeredCount: 30,
        registrationCapacity: 80,
        interestedCount: 25,
        category: 'Faculty',
        tags: ['Physics', 'Astrophysics', 'Lecture'],
    },
    {
        id: 8,
        imageUrl: '/api/placeholder/400/320',
        organizer: 'Coding Club',
        title: 'Hackathon 2025',
        date: 'May 18, 2025',
        location: 'Computer Lab',
        description: 'Join us for a 24-hour coding challenge! Teams compete to develop innovative solutions.',
        currentFunds: 1800,
        fundraisingGoal: 3000,
        registeredCount: 25,
        registrationCapacity: 40,
        interestedCount: 35,
        category: 'Clubs',
        tags: ['Coding', 'Hackathon', 'Programming'],
    },
  ],
};

export default mockData;