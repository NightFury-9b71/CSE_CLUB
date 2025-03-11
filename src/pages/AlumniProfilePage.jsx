// File: AlumniProfilePage.jsx
import React, { useState, useEffect } from 'react';

// Interface for profile data
// Single Responsibility: Data structure definition
const DEFAULT_PROFILE = {
  id: '',
  name: '',
  graduationYear: '',
  jobTitle: '',
  company: '',
  email: '',
  linkedin: '',
  github: '',
  bio: '',
  achievements: [],
  projects: [],
  skills: []
};

// ProfileService - Responsible for data fetching (Single Responsibility)
// This can be easily swapped with different implementations (Open/Closed)
const ProfileService = {
  async getProfile(id) {
    try {
      // In a real app, this would be an actual API call
      // Mocking API response for demonstration
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: '123',
            name: 'Jane Doe',
            graduationYear: '2020',
            jobTitle: 'Senior Software Engineer',
            company: 'Tech Innovations Inc.',
            email: 'jane.doe@example.com',
            linkedin: 'linkedin.com/in/janedoe',
            github: 'github.com/janedoe',
            bio: 'CS graduate who specialized in machine learning and distributed systems. Started the Algorithms Club during sophomore year.',
            achievements: [
              'Published paper on neural networks in IEEE Conference 2021',
              'First Place in University Hackathon 2019',
              'Dean\'s List 2017-2020'
            ],
            projects: [
              {
                name: 'Distributed Learning System',
                description: 'Built a scalable system for distributed machine learning',
                technologies: ['Python', 'TensorFlow', 'Kubernetes']
              },
              {
                name: 'CS Department Portal',
                description: 'Led development of department\'s student portal',
                technologies: ['React', 'Node.js', 'MongoDB']
              }
            ],
            skills: ['JavaScript', 'React', 'Python', 'Machine Learning', 'AWS', 'System Design']
          });
        }, 500);
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }
};

// ProfileHeader Component (Single Responsibility)
const ProfileHeader = ({ profile }) => (
  <div className="bg-blue-700 text-white p-6 rounded-t-lg">
    <h1 className="text-3xl font-bold">{profile.name}</h1>
    <p className="text-xl">Class of {profile.graduationYear}</p>
    <div className="mt-2">
      <p>{profile.jobTitle} at {profile.company}</p>
    </div>
  </div>
);

// ContactInfo Component (Single Responsibility)
const ContactInfo = ({ profile }) => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="font-medium">Email:</p>
        <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
          {profile.email}
        </a>
      </div>
      <div>
        <p className="font-medium">LinkedIn:</p>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {profile.linkedin}
        </a>
      </div>
      <div>
        <p className="font-medium">GitHub:</p>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {profile.github}
        </a>
      </div>
    </div>
  </div>
);

// Bio Component (Single Responsibility)
const Bio = ({ bio }) => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-3">Biography</h2>
    <p className="text-gray-700">{bio}</p>
  </div>
);

// ListSection Component - Generic list display (Open/Closed principle)
const ListSection = ({ title, items, renderItem }) => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  </div>
);

// Project Component (Single Responsibility)
const ProjectItem = ({ project }) => (
  <div>
    <h3 className="font-medium">{project.name}</h3>
    <p className="text-gray-700">{project.description}</p>
    <div className="mt-1 flex flex-wrap gap-1">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// SkillBadge Component (Single Responsibility)
const SkillBadge = ({ skill }) => (
  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
    {skill}
  </span>
);

// Skills Section Component (Single Responsibility)
const SkillsSection = ({ skills }) => (
  <div className="bg-white p-4 shadow-md rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-3">Skills</h2>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  </div>
);

// LoadingIndicator Component (Single Responsibility)
const LoadingIndicator = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Error Component (Single Responsibility)
const ErrorDisplay = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Error: </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

// Main AlumniProfile Component
// Uses composition to combine all the components
const AlumniProfile = ({ profileId }) => {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await ProfileService.getProfile(profileId);
        setProfile(data);
        setError(null);
      } catch (err) {
        setError('Failed to load profile data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="max-w-4xl mx-auto my-8">
      <ProfileHeader profile={profile} />
      
      <div className="bg-gray-50 p-6 rounded-b-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Bio bio={profile.bio} />
            
            <ListSection 
              title="Projects"
              items={profile.projects}
              renderItem={(project) => <ProjectItem project={project} />}
            />
            
            <ListSection 
              title="Achievements"
              items={profile.achievements}
              renderItem={(achievement) => <span>{achievement}</span>}
            />
          </div>
          
          <div>
            <ContactInfo profile={profile} />
            <SkillsSection skills={profile.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Usage example
const AlumniProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Computer Science Department</h1>
          <p>Alumni Profiles</p>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-4">
        <AlumniProfile profileId="123" />
      </main>
      
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Computer Science Department</p>
        </div>
      </footer>
    </div>
  );
};

export default AlumniProfilePage;