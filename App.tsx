import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      document.querySelectorAll('.scroll-animate').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-gray-100 overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 z-50" style={{ width: `${scrollProgress}%` }} />

      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">GODESHWARI</h1>

          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900">
            <div className="flex flex-col gap-4 px-6 py-4">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-slate-950" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <p className="text-emerald-400 mb-4 font-medium">Hey, welcome to my portfolio</p>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">GODESHWARI</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8">Front-End Developer & Software Engineer</p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Frontend developer specializing in responsive design and software testing.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">Get In Touch</a>
              <a href="#projects" className="px-8 py-3 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300">View Work</a>
            </div>
          </div>

          <div className="scroll-animate hidden md:block">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-3xl" />
    
    <img 
      src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?semt=ais_hybrid&w=740&q=80"
      alt="Female Developer"
      className="relative rounded-2xl object-contain w-full h-96 shadow-2xl bg-white p-4"
    />
    
  </div>
</div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-500/5 to-slate-950" />
        <div className="relative max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 scroll-animate">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <p className="text-gray-300 leading-relaxed mb-6">
                I am an Information Science and Engineering undergraduate with a strong foundation in frontend development and software testing. I have hands-on experience in building responsive user interfaces using HTML, CSS, and JavaScript, along with knowledge of Python, C, Java, and MySQL. Skilled in manual testing, API testing, and Selenium automation, I am seeking entry-level opportunities to apply my technical skills while contributing to high-quality software development.
              </p>
              
            </div>

            <div className="scroll-animate space-y-6">
              <div className="bg-slate-900/50 border border-emerald-500/20 p-6 rounded-lg hover:border-emerald-500/50 transition-all duration-300">
                <h4 className="text-emerald-400 font-semibold mb-2">Education</h4>
                <p className="text-gray-300 text-sm">B.E ISE • BEC</p>
                <p className="text-gray-400 text-xs">Dec 2022 - Current | 6.67 CGPA</p>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 p-6 rounded-lg hover:border-emerald-500/50 transition-all duration-300">
                <h4 className="text-emerald-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300 text-sm">Banglore, Karnataka</p>
                <p className="text-gray-400 text-xs">India</p>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 p-6 rounded-lg hover:border-emerald-500/50 transition-all duration-300">
                <h4 className="text-emerald-400 font-semibold mb-2">Contact</h4>
                <p className="text-gray-300 text-sm">godeshwarichavan@gmail.com</p>
                <p className="text-gray-400 text-xs">+91 6361 188746</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 scroll-animate">Technical Skills</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming Languages', skills: '• Python (Basics) • Java • JavaScript' },
              { title: 'Web Technologies', skills: '• HTML • CSS • JavaScript • Responsive Design • Interactive UI Elements' },
              { title: 'Database', skills: '• MySQL • Database Design • Schema Development • Query Writing' },
              { title: 'Tools & Version Control', skills: '• Visual Studio Code • Sublime Text' },
              { title: 'Software Testing', skills: '• Manual Testing  • Automation Testing •FireFlink • Selenium ' },
              { title: 'Languages', skills: '• English • Kannada • Hindi' },
            ].map((category, idx) => (
              <div key={idx} className="scroll-animate bg-slate-900/50 border border-emerald-500/20 p-8 rounded-xl hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group">
                <h4 className="text-emerald-400 font-bold text-lg mb-4 group-hover:text-teal-400 transition-colors">{category.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{category.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-teal-500/5 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 scroll-animate">Projects</h3>

          <div className="space-y-12">
            {[
              {
                title: 'Vehicle Rental System',
                type: 'Full-Stack Web Platform',
                description: 'Developed a full-stack web platform for vehicle booking, fleet tracking, and automated billing using PHP, MySQL, JavaScript, HTML, CSS, and Google Maps API.',
                highlights: ['Vehicle Booking', 'Fleet Tracking', 'Automated Billing', 'Google Maps Integration']
              },
              {
                title: 'Personal Portfolio',
                type: 'Web Development',
                description: 'Built a responsive dark-themed portfolio with interactive project cards and smooth UI using HTML, CSS, and JavaScript.',
                highlights: ['Responsive Design', 'Dark Theme', 'Interactive Elements', 'Modern UI']
              },
              {
                title: 'Face Recognition System',
                type: 'Machine Learning Application',
                description: 'Developed a Python-based face recognition application using OpenCV and machine learning for real-time detection, identification, and access authentication.',
                highlights: ['OpenCV', 'Machine Learning', 'Real-time Detection', 'Access Authentication']
              },
            ].map((project, idx) => (
              <div key={idx} className="scroll-animate bg-slate-900/50 border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-400 group-hover:text-teal-400 transition-colors mb-2">{project.title}</h4>
                      <p className="text-sm text-emerald-300/70 font-medium">{project.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/30">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 scroll-animate">Get In Touch</h3>
          <p className="text-xl text-gray-300 mb-12 scroll-animate leading-relaxed">
            Interested in discussing web development projects, innovative ideas, or collaboration opportunities? Let's connect!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a href="mailto:godeshwarichavan@gmail.com" className="scroll-animate px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              <Mail size={20} /> Send Email
            </a>
            <a href="https://www.linkedin.com/in/godeshwari-chavan-a896342a6" target="_blank" rel="noopener noreferrer" className="scroll-animate px-8 py-4 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Godeshwari" target="_blank" rel="noopener noreferrer" className="scroll-animate px-8 py-4 border border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>

          <div className="scroll-animate bg-slate-900/50 border border-emerald-500/20 p-8 rounded-xl">
            <p className="text-gray-400 mb-4">Direct Contact</p>
            <p className="text-emerald-400 text-lg font-semibold mb-4">godeshwarichavan@gmail.com</p>
            <p className="text-gray-500 text-sm">+91 6361 188746 | Banglore, Karnataka, India</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 px-6 text-center text-gray-500">
        <p>Godeshwari | Built with React, TypeScript & Tailwind CSS</p>
      </footer>

      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-animate {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
