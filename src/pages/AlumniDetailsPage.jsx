import React, { useState } from 'react';

const AlumniDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('profiles');
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Computer Science Alumni</h1>
          <p className="text-xl max-w-3xl">
            Discover the success stories of our graduates who are making an impact in the tech industry and beyond.
          </p>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-6 py-4 font-medium text-sm border-b-2 ${activeTab === 'profiles' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('profiles')}
            >
              Alumni Profiles
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm border-b-2 ${activeTab === 'achievements' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('achievements')}
            >
              Notable Achievements
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm border-b-2 ${activeTab === 'careers' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('careers')}
            >
              Career Pathways
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm border-b-2 ${activeTab === 'stories' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('stories')}
            >
              Success Stories
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'profiles' && <AlumniProfiles />}
        {activeTab === 'achievements' && <NotableAchievements />}
        {activeTab === 'careers' && <CareerPathways />}
        {activeTab === 'stories' && <SuccessStories />}
      </div>
      
      {/* Connect Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Our Alumni</h2>
            <p className="text-lg mb-8">
              Want to learn more about career opportunities or get advice from our successful graduates? 
              Join our mentorship program or attend one of our networking events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                Join Mentorship Program
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50">
                View Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alumni Profiles Component
const AlumniProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      gradYear: "2010",
      role: "AI Research Lead",
      company: "DeepMind",
      image: "/api/placeholder/400/400",
      quote: "The foundation I built at our CS department gave me the confidence to pursue cutting-edge AI research.",
      accomplishments: "Led team that developed breakthrough natural language processing algorithms; Published 15+ research papers; PhD from Stanford"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      gradYear: "2015",
      role: "Senior Software Engineer",
      company: "Google",
      image: "/api/placeholder/400/400",
      quote: "The projects and collaborative environment prepared me for real-world engineering challenges.",
      accomplishments: "Core developer for Google Maps; Created open-source libraries with 10k+ stars; Mentors CS students"
    },
    {
      id: 3,
      name: "Priya Sharma",
      gradYear: "2017",
      role: "Tech Startup Founder",
      company: "HealthTech Solutions",
      image: "/api/placeholder/400/400",
      quote: "My professors encouraged entrepreneurial thinking that ultimately led me to found my own company.",
      accomplishments: "Founded healthcare AI startup with $5M funding; Created tech that helped diagnose rare diseases; Forbes 30 Under 30"
    },
    {
      id: 4,
      name: "David Rodriguez",
      gradYear: "2012",
      role: "CTO",
      company: "FinSecure",
      image: "/api/placeholder/400/400",
      quote: "From debugging late-night projects to architecting enterprise systems, it all started in this department.",
      accomplishments: "Scaled fintech platform to serve 2M+ users; Pioneered new cybersecurity protocols; Regular speaker at tech conferences"
    },
    {
      id: 5,
      name: "Aisha Williams",
      gradYear: "2014",
      role: "Game Development Director",
      company: "Epic Studios",
      image: "/api/placeholder/400/400",
      quote: "The programming challenges and graphics courses directly influenced my career in game development.",
      accomplishments: "Directed development of award-winning game titles; Patent holder for 3D rendering techniques; Advocates for women in gaming"
    },
    {
      id: 6,
      name: "James Park",
      gradYear: "2009",
      role: "Data Science Director",
      company: "Netflix",
      image: "/api/placeholder/400/400",
      quote: "The statistical computing and algorithm courses gave me the perfect foundation for my data science career.",
      accomplishments: "Built recommendation systems used by millions; PhD in Machine Learning; Teaches graduate courses at MIT"
    }
  ];
  
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Exceptional Alumni</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our graduates are making significant contributions across the tech industry. 
          Learn about their journeys and accomplishments since leaving our department.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map(profile => (
          <div key={profile.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{profile.name}</h3>
                <p className="text-white/90">Class of {profile.gradYear}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-900">{profile.role}</h4>
                  <p className="text-blue-600">{profile.company}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {profile.gradYear}
                </span>
              </div>
              
              <blockquote className="italic text-gray-600 mb-4 border-l-4 border-blue-200 pl-3">
                "{profile.quote}"
              </blockquote>
              
              <h5 className="font-medium text-sm text-gray-900 mb-2">Key Accomplishments:</h5>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {profile.accomplishments.split("; ").map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
              
              <button className="mt-6 w-full text-blue-600 border border-blue-600 rounded-md py-2 font-medium hover:bg-blue-50">
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
          View All Alumni
        </button>
      </div>
    </div>
  );
};

// Other tab components (simplified for brevity)
const NotableAchievements = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Notable Alumni Achievements</h2>
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2">Industry Impact</h3>
        <p className="mb-4">Our alumni have founded 25+ successful startups, with combined valuations exceeding $2 billion. They hold leadership positions at major tech companies including Google, Microsoft, Apple, and Amazon.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">25+</span>
            <span className="text-sm text-gray-600">Startups Founded</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">120+</span>
            <span className="text-sm text-gray-600">Patents Filed</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">45+</span>
            <span className="text-sm text-gray-600">Tech Leaders</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">$2B+</span>
            <span className="text-sm text-gray-600">Valuation Created</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2">Research & Academia</h3>
        <p className="mb-4">Our graduates have made significant contributions to computer science research, with publications in top conferences and journals. Many have gone on to prestigious academic positions.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">500+</span>
            <span className="text-sm text-gray-600">Research Papers</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">35</span>
            <span className="text-sm text-gray-600">Faculty Members</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">12</span>
            <span className="text-sm text-gray-600">Research Awards</span>
          </div>
          <div className="bg-blue-50 p-4 rounded text-center">
            <span className="block text-3xl font-bold text-blue-600">28</span>
            <span className="text-sm text-gray-600">PhD Graduates</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-2">Recognition & Awards</h3>
        <p className="mb-4">Our alumni have received recognition through prestigious awards and appearances on lists such as Forbes 30 Under 30, ACM Awards, and industry honors.</p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3">🏆</span>
            <span>3 alumni named to Forbes 30 Under 30 in Technology</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3">🏆</span>
            <span>ACM Distinguished Alumni Award recipients (2018, 2021)</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3">🏆</span>
            <span>2 Turing Award contributors for work on distributed systems</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3">🏆</span>
            <span>Multiple CTO/CIO positions at Fortune 500 companies</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const CareerPathways = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Alumni Career Pathways</h2>
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold mb-4">Where Our Graduates Work</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">🔍</span>
          </div>
          <span className="text-center font-medium">Big Tech</span>
          <span className="text-sm text-center text-gray-600">42% of alumni</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">🚀</span>
          </div>
          <span className="text-center font-medium">Startups</span>
          <span className="text-sm text-center text-gray-600">27% of alumni</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">🎓</span>
          </div>
          <span className="text-center font-medium">Academia</span>
          <span className="text-sm text-center text-gray-600">15% of alumni</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">🏢</span>
          </div>
          <span className="text-center font-medium">Other Industries</span>
          <span className="text-sm text-center text-gray-600">16% of alumni</span>
        </div>
      </div>
      
      <h4 className="font-bold mb-2">Top Employers</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Google</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Microsoft</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Amazon</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Apple</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Meta</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tesla</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">IBM</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Netflix</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Stanford University</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MIT</span>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Career Progression</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Average Time to First Promotion</h4>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full w-3/4"></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>0 years</span>
            <span className="font-medium">1.5 years</span>
            <span>3 years</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Average Salary After 5 Years</h4>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full w-4/5"></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>$90k</span>
            <span className="font-medium">$135k</span>
            <span>$180k+</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Alumni in Leadership Positions (10+ Years)</h4>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full w-2/3"></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>0%</span>
            <span className="font-medium">65%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold mb-3">Common Career Paths</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-3">
            <h5 className="font-medium">Technical Track</h5>
            <p className="text-sm text-gray-600">Software Engineer → Senior Engineer → Staff Engineer → Principal Engineer → Distinguished Engineer</p>
          </div>
          <div className="border rounded p-3">
            <h5 className="font-medium">Management Track</h5>
            <p className="text-sm text-gray-600">Software Engineer → Team Lead → Engineering Manager → Director of Engineering → VP/CTO</p>
          </div>
          <div className="border rounded p-3">
            <h5 className="font-medium">Entrepreneurial Track</h5>
            <p className="text-sm text-gray-600">Software Engineer → Startup Engineer → Technical Co-founder → CTO/CEO</p>
          </div>
          <div className="border rounded p-3">
            <h5 className="font-medium">Research Track</h5>
            <p className="text-sm text-gray-600">Graduate School → Research Scientist → Senior Researcher → Research Director</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SuccessStories = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Alumni Success Stories</h2>
    
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src="/api/placeholder/400/400" alt="Alumni portrait" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:w-2/3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
              Entrepreneurship
            </span>
            <h3 className="text-2xl font-bold mb-2">From Capstone Project to $50M Startup</h3>
            <p className="text-gray-700 mb-4">
              "My senior capstone project on automated medical diagnostics became the foundation for my healthcare AI startup. 
              The professors encouraged me to think beyond the classroom and pursue real-world applications. 
              Today, our technology helps diagnose rare diseases in underserved communities, and we've secured $50M in funding 
              to expand our reach globally."
            </p>
            <div className="mb-4">
              <h4 className="font-medium">Priya Sharma, Class of 2017</h4>
              <p className="text-blue-600">Founder & CEO, MedAI Solutions</p>
            </div>
            <p className="text-sm italic text-gray-600">
              Priya's company now employs 15 fellow department graduates and regularly sponsors research projects at the university.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src="/api/placeholder/400/400" alt="Alumni portrait" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:w-2/3">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
              Research Impact
            </span>
            <h3 className="text-2xl font-bold mb-2">Leading Breakthrough Research at Google</h3>
            <p className="text-gray-700 mb-4">
              "The algorithms course and undergraduate research opportunity with Dr. Chen sparked my interest in machine learning. 
              That foundation led me to pursue a PhD and eventually join Google's AI research team. Last year, our work on 
              efficient language models was recognized at NeurIPS and is now implemented in products used by millions daily."
            </p>
            <div className="mb-4">
              <h4 className="font-medium">Alex Nguyen, Class of 2013</h4>
              <p className="text-blue-600">Principal Research Scientist, Google</p>
            </div>
            <p className="text-sm italic text-gray-600">
              Alex returns to campus twice yearly to give guest lectures and recruit talented students for internships and research roles.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src="/api/placeholder/400/400" alt="Alumni portrait" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:w-2/3">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
              Career Change
            </span>
            <h3 className="text-2xl font-bold mb-2">From CS Major to Tech Policy Leader</h3>
            <p className="text-gray-700 mb-4">
              "I never expected my computer science degree would lead me to shape national tech policy. The ethics in 
              computing course opened my eyes to the broader implications of technology. After working as a developer for 
              three years, I pivoted to tech policy. Today, I advise lawmakers on AI regulation and digital privacy, bringing 
              a much-needed technical perspective to these critical discussions."
            </p>
            <div className="mb-4">
              <h4 className="font-medium">Jordan Taylor, Class of 2016</h4>
              <p className="text-blue-600">Director of Technology Policy, Digital Rights Coalition</p>
            </div>
            <p className="text-sm italic text-gray-600">
              Jordan helped establish a new Tech Policy track within the department's curriculum, connecting students with policy internships.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold mb-4">Advice to Current Students</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic text-gray-700 mb-3">"Take risks and build projects that excite you, not just what you think will look good on your resume."</p>
          <p className="font-medium">— Marcus Johnson, Google</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic text-gray-700 mb-3">"Find mentors and build relationships. The connections I made in college have opened countless doors."</p>
          <p className="font-medium">— Sarah Chen, DeepMind</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="italic text-gray-700 mb-3">"Don't limit yourself to just coding. Understanding the business and human aspects of tech is equally valuable."</p>
          <p className="font-medium">— David Rodriguez, FinSecure</p>
        </div>
      </div>
    </div>
  </div>
);

export default AlumniDetailsPage;