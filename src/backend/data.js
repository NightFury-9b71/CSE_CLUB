// Mock API Data
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
};

export default mockData;