import React, { useState, useEffect } from 'react';
import {fetchStats , fetchGalleryItems, fetchAlumniCards, fetchResearchCards, fetchTimelineItems, fetchFacultyCards} from '../backend/api';
import { Link } from 'react-router-dom';
import { LoadingIndicator, ErrorDisplay } from '../components/Components';

// Reusable Components (Single Responsibility)
const Header = () => (
  <header className="relative overflow-hidden bg-[#2c3e50] text-white text-center py-8">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(44,62,80,0.9)] to-[rgba(52,152,219,0.8)] z-1"></div>
    <div className="relative z-2">
      <h1 className="text-3xl font-bold">Department Hall of Fame</h1>
      <p>Celebrating Excellence and Achievement</p>
    </div>
  </header>
);

const Navigation = () => (
  <nav className="bg-[#3498db] sticky top-[60px] z-10 py-4">
    <ul className="flex justify-center flex-wrap list-none">
      <NavItem href="#achievements">Achievements</NavItem>
      <NavItem href="#events">Events</NavItem>
      <NavItem href="#alumni">Alumni</NavItem>
      <NavItem href="#research">Research</NavItem>
      <NavItem href="#initiatives">Initiatives</NavItem>
      <NavItem href="#faculty">Faculty</NavItem>
    </ul>
  </nav>
);

const NavItem = ({ href, children }) => (
  <li className="mx-2">
    <a
      href={href}
      className="text-white no-underline font-medium transition-all duration-300 py-2 px-4 rounded hover:bg-[rgba(255,255,255,0.2)]"
    >
      {children}
    </a>
  </li>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-center mb-8 relative pb-4">
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#e74c3c]"></span>
  </h2>
);

const StatCard = ({ number, label }) => (
  <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-6 rounded-lg text-center mx-4 my-4 w-[calc(25%-2rem)] min-w-[200px] transition-transform duration-300 hover:translate-y-[-10px]">
    <div className="text-[2.5rem] font-bold text-[#3498db] mb-2">{number}</div>
    <div className="text-base">{label}</div>
  </div>
);

export const GalleryItem = ({ imageUrl, title, description }) => (
  <div className="group relative overflow-hidden rounded-lg h-[250px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.03]">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1]"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent"></div>
      <div className="relative">
        <h3 className="font-bold">{title}</h3>
        <p className="text-bold">{description}</p>
      </div>
    </div>
  </div>
);

export const EventGallery = ({ galleryItems }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {galleryItems.map((item, index) => (
        <GalleryItem key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} />
      ))}
      </div>
      <div className="flex justify-center mb-12">
        <Button destinaion={'/gallery'}>
          View More Photos
        </Button>
      </div>
    </>
  );
};

const AlumniCard = ({ imageUrl, name, year, description }) => (
  <div className="flex-shrink-0 w-[300px] scroll-snap-align-start bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
    <div className="h-[200px] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1]" />
    </div>
    <div className="p-6 text-center">
      <div className="text-xl font-semibold mb-2 text-[#2c3e50]">{name}</div>
      <div className="text-[#3498db] font-medium mb-2">{year}</div>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const ResearchCard = ({ title, authors, date, description }) => (
  <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
    <div className="p-6">
      <div className="text-xl font-semibold mb-2 text-[#2c3e50]">{title}</div>
      <div className="text-[#3498db] mb-2 italic">{authors}</div>
      <div className="text-gray-500 text-sm mb-4">{date}</div>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const TimelineItem = ({ date, title, description, isLeft }) => (
  <div className={`relative p-2.5 px-10 w-1/2 box-border ${isLeft ? 'left-0' : 'left-1/2'}`}>
    <div className="relative p-5 bg-white rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <div className="font-bold text-[#3498db] mb-2">{date}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
    <span className={`absolute w-[25px] h-[25px] bg-white border-4 border-[#e74c3c] rounded-full z-10 top-3.5 ${isLeft ? 'right-[-17px]' : 'left-[-17px]'}`}></span>
  </div>
);

const FacultyCard = ({ imageUrl, name, position, description }) => (
  <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-10px] text-center">
    <div className="h-[200px] overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1]" />
    </div>
    <div className="p-6">
      <div className="text-xl font-semibold mb-2 text-[#2c3e50]">{name}</div>
      <div className="text-[#3498db] font-medium mb-2">{position}</div>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const Button = ({ children, destinaion}) => (
  <Link
    to={destinaion}
    className="inline-block bg-[#3498db] text-white py-3 px-6 rounded-lg no-underline font-medium transition-all duration-300 border-none cursor-pointer hover:bg-[#2980b9] hover:translate-y-[-3px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className="bg-[#2c3e50] text-white text-center py-8 mt-8">
    <p>&copy; 2025 Department Hall of Fame | University Name</p>
    <p>Contact: department@university.edu | (123) 456-7890</p>
  </footer>
);

// Main Component (Open/Closed, Liskov Substitution)

const HomePage = () => {
  const [stats, setStats] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [alumniCards, setAlumniCards] = useState([]);
  const [researchCards, setResearchCards] = useState([]);
  const [timelineItems, setTimelineItems] = useState([]);
  const [facultyCards, setFacultyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const statsData = await fetchStats();
        setStats(statsData);
        
        const galleryData = await fetchGalleryItems();
        setGalleryItems(galleryData);
        
        const alumniData = await fetchAlumniCards();
        setAlumniCards(alumniData);
        
        const researchData = await fetchResearchCards();
        setResearchCards(researchData);
        
        const timelineData = await fetchTimelineItems();
        setTimelineItems(timelineData);
        
        const facultyData = await fetchFacultyCards();
        setFacultyCards(facultyData);
        
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorDisplay message={error} />;
  
  return (
    <div className="bg-[#ecf0f1] text-[#2c3e50]">
      <Header />
      <Navigation />
      <main className="max-w-[1200px] mx-auto p-8">
        {/* Render your data here using the state variables */}
        <section id="achievements">
          <SectionTitle>By the Numbers</SectionTitle>
          <div className="flex justify-around flex-wrap mb-12">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </section>

        <section id="events">
        <SectionTitle>Event Gallery</SectionTitle>
        <EventGallery galleryItems={galleryItems} />
        </section>

        <section id="alumni">
          <SectionTitle>Distinguished Alumni</SectionTitle>
          <div className="flex overflow-x-auto scroll-snap-x-mandatory gap-6 p-4 mb-12">
            {alumniCards.map((card, index) => (
              <AlumniCard key={index} imageUrl={card.imageUrl} name={card.name} year={card.year} description={card.description} />
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <Button>See All Alumni</Button>
          </div>
        </section>

        <section id="research">
          <SectionTitle>Notable Research</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {researchCards.map((card, index) => (
              <ResearchCard key={index} title={card.title} authors={card.authors} date={card.date} description={card.description} />
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <Button>Explore Research Database</Button>
          </div>
        </section>

        <section id="initiatives">
          <SectionTitle>Past & Future Initiatives</SectionTitle>
          <div className="relative max-w-[800px] mx-auto mb-12">
            <div className="absolute w-[6px] bg-[#3498db] top-0 bottom-0 left-1/2 -ml-1"></div>
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} date={item.date} title={item.title} description={item.description} isLeft={item.isLeft} />
            ))}
          </div>
        </section>

        <section id="faculty">
          <SectionTitle>Distinguished Faculty</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {facultyCards.map((card, index) => (
              <FacultyCard key={index} imageUrl={card.imageUrl} name={card.name} position={card.position} description={card.description} />
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <Button>Meet All Faculty</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default HomePage;