import React from 'react';

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
  <nav className="bg-[#3498db] sticky top-[60px] z-100 py-4">
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

const GalleryItem = ({ imageUrl, title, description }) => (
  <div className="relative overflow-hidden rounded-lg h-[250px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.03]">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1]" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent p-4 text-white transform translate-y-full transition-transform duration-300 hover:translate-y-0">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

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

const Button = ({ children }) => (
  <a
    href="#"
    className="inline-block bg-[#3498db] text-white py-3 px-6 rounded-lg no-underline font-medium transition-all duration-300 border-none cursor-pointer hover:bg-[#2980b9] hover:translate-y-[-3px] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
  >
    {children}
  </a>
);

const Footer = () => (
  <footer className="bg-[#2c3e50] text-white text-center py-8 mt-8">
    <p>&copy; 2025 Department Hall of Fame | University Name</p>
    <p>Contact: department@university.edu | (123) 456-7890</p>
  </footer>
);

// Main Component (Open/Closed, Liskov Substitution)

const HomePage = () => {
  return (
    <div className="bg-[#ecf0f1] text-[#2c3e50]">
      <Header />
      <Navigation />
      <main className="max-w-[1200px] mx-auto p-8">
        <section id="achievements">
          <SectionTitle>By the Numbers</SectionTitle>
          <div className="flex justify-around flex-wrap mb-12">
            <StatCard number="50+" label="Awards Won" />
            <StatCard number="120" label="Research Papers" />
            <StatCard number="1200+" label="Successful Graduates" />
            <StatCard number="25" label="Years of Excellence" />
          </div>
        </section>

        <section id="events">
          <SectionTitle>Event Gallery</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <GalleryItem imageUrl="https://set.jainuniversity.ac.in/academics/computer-science-engineering/images/top-university-of-india3.jpg" title="Annual Symposium 2024" description="Our department's flagship event showcasing student research" />
            <GalleryItem imageUrl="https://www.cst.cam.ac.uk/sites/default/files/openday1500crop.jpg" title="Innovation Hackathon" description="72-hour challenge resulting in revolutionary solutions" />
            <GalleryItem imageUrl="https://ssl.du.ac.bd/fontView/images/activity/1737866176CSEDUKUET.jpg" title="Excellence Awards Ceremony" description="Celebrating outstanding achievements in academics and research" />
            <GalleryItem imageUrl="https://www.ritrjpm.ac.in/images/computer-science/2022-2023/workshop-rpa_1.jpg" title="Distinguished Speaker Series" description="World-class experts sharing insights with our students" />
            <GalleryItem imageUrl="https://www.cse.ruet.ac.bd/public/storage/events/ruet-shines-at-46th-icpc-heartfelt-congratulations-to-ruet-aftermath-1.jpg" title="National Competition Winners" description="Our team bringing home the gold" />
            <GalleryItem imageUrl="https://bauet.ac.bd/ce/wp-content/uploads/sites/7/2022/03/DSC03895-1024x768.jpg" title="Industry Field Trip" description="Students gaining real-world exposure" />
          </div>
          <div className="flex justify-center mb-12">
            <Button>View More Photos</Button>
          </div>
        </section>

        <section id="alumni">
          <SectionTitle>Distinguished Alumni</SectionTitle>
          <div className="flex overflow-x-auto scroll-snap-x-mandatory gap-6 p-4 mb-12">
            <AlumniCard imageUrl="https://static.just.edu.bd/images/public/teacher/1672469742691_-1.jpeg" name="Dr. Sarah Johnson" year="Class of 2015" description="Lead Researcher at InnovaTech, pioneering work in artificial intelligence" />
            <AlumniCard imageUrl="https://static.just.edu.bd/images/public/teacher/1674976532125_-1.jpeg" name="Michael Chen" year="Class of 2010" description="Founder & CEO of FutureSystems, Forbes 30 Under 30" />
            <AlumniCard imageUrl="https://cdn.daily-sun.com/public/news_images/2018/05/03/daily-sun-2018-05-03-1.jpg" name="Dr. Emily Rodriguez" year="Class of 2008" description="Award-winning professor at Stanford University" />
            <AlumniCard imageUrl="/api/placeholder/400/320" name="James Wilson" year="Class of 2012" description="CTO at GlobalTech, patent holder for breakthrough technology" />
            <AlumniCard imageUrl="/api/placeholder/400/320" name="Aisha Patel" year="Class of 2018" description="Founder of EduTech Solutions, revolutionizing education technology" />
          </div>
          <div className="flex justify-center mb-12">
            <Button>See All Alumni</Button>
          </div>
        </section>

        <section id="research">
          <SectionTitle>Notable Research</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ResearchCard title="Quantum Computing Applications in Modern Healthcare" authors="Dr. Alan Smith, Sarah Johnson, Michael Lee" date="Published: October 2024" description="Groundbreaking research on applying quantum algorithms to medical diagnosis, cited over 150 times." />
            <ResearchCard title="Sustainable Energy Solutions for Urban Environments" authors="Dr. Lisa Wang, James Wilson" date="Published: July 2023" description="Award-winning research presenting novel approaches to urban renewable energy implementation." />
            <ResearchCard title="Machine Learning in Predictive Maintenance Systems" authors="Dr. Robert Johnson, Emily Chen" date="Published: March 2024" description="Research that led to industry partnerships and implementation in manufacturing sectors." />
            <ResearchCard title="Advances in Biodegradable Materials for Consumer Products" authors="Dr. Carlos Rodriguez, Aisha Patel" date="Published: September 2023" description="Patent-pending research creating eco-friendly alternatives to common plastics." />
          </div>
          <div className="flex justify-center mb-12">
            <Button>Explore Research Database</Button>
          </div>
        </section>

        <section id="initiatives">
          <SectionTitle>Past & Future Initiatives</SectionTitle>
          <div className="relative max-w-[800px] mx-auto mb-12">
            <div className="absolute w-[6px] bg-[#3498db] top-0 bottom-0 left-1/2 -ml-1"></div>
            <TimelineItem date="2020" title="Undergraduate Research Program" description="Launched program enabling undergraduates to participate in cutting-edge research with faculty mentors." isLeft />
            <TimelineItem date="2021" title="Industry Partnership Initiative" description="Established collaborations with leading companies providing internships and funding." />
            <TimelineItem date="2022" title="Global Exchange Program" description="Created opportunities for students to study abroad at partner universities." isLeft />
            <TimelineItem date="2023" title="Innovation Lab" description="Opened state-of-the-art facility for student projects and entrepreneurial ventures." />
            <TimelineItem date="2024" title="Diversity in STEM Initiative" description="Established scholarships and mentorship programs to increase representation." isLeft />
            <TimelineItem date="2025 (Planned)" title="Center for Interdisciplinary Studies" description="Upcoming research center focusing on cross-disciplinary collaboration." />
          </div>
        </section>

        <section id="faculty">
          <SectionTitle>Distinguished Faculty</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FacultyCard imageUrl="/api/placeholder/400/320" name="Prof. David Anderson" position="Department Chair" description="Pioneering research in quantum physics with over 200 publications" />
            <FacultyCard imageUrl="/api/placeholder/400/320" name="Dr. Maria Gonzalez" position="Research Director" description="Leading expert in artificial intelligence and neural networks" />
            <FacultyCard imageUrl="/api/placeholder/400/320" name="Dr. Thomas Zhang" position="Associate Professor" description="Award-winning educator and mentor with industry experience" />
            <FacultyCard imageUrl="/api/placeholder/400/320" name="Dr. Kimberly Johnson" position="Assistant Professor" description="Emerging researcher in sustainable technologies with multiple patents" />
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