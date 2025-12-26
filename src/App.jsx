import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap, Users } from 'lucide-react';

const PremiumPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Zunto Marketplace",
      category: "E-Commerce Platform",
      description: "Building a full-scale e-commerce marketplace connecting buyers and sellers with seamless transactions and modern UI",
      status: "In Development",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      gradient: "from-purple-600 to-blue-600",
      role: "Founder & Lead Developer"
    },
    {
      id: 2,
      title: "Photographer Booking Platform",
      category: "Service Booking System",
      description: "Intuitive booking system for photographers with portfolio showcase, scheduling, and payment integration",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Online Banking Demo",
      category: "FinTech Application",
      description: "Modern banking interface demonstrating secure transactions, account management, and financial analytics",
      tags: ["React", "JavaScript", "CSS3", "Responsive Design"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Fashion Store",
      category: "E-Commerce",
      description: "Elegant fashion e-commerce platform with advanced filtering, wishlist features, and smooth checkout experience",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "UI/UX"],
      gradient: "from-pink-600 to-purple-600"
    },
    {
      id: 5,
      title: "Digital Agency Website",
      category: "Corporate Web Design",
      description: "Professional agency website showcasing services, portfolio, and client testimonials with modern aesthetics",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 6,
      title: "Online Sports Store",
      category: "E-Commerce Platform",
      description: "Dynamic sports equipment store with product catalogs, shopping cart, and seamless user experience",
      tags: ["React", "Tailwind CSS", "JavaScript", "E-Commerce"],
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  const skills = [
    { name: "HTML & CSS", level: 90, icon: Code },
    { name: "JavaScript (ES6+)", level: 60, icon: Zap },
    { name: "React.js", level: 75, icon: Code },
    { name: "Tailwind CSS", level: 92, icon: Palette },
    { name: "Node.js", level: 55, icon: Code },
    { name: "MERN Stack", level: 40, icon: Code }
  ];

  const experiences = [
    {
      title: "Computer Science Student",
      organization: "Lagos State University",
      period: "2021 - Present",
      description: "Pursuing a 5-year part-time Computer Science degree while actively building real-world projects and expanding technical expertise"
    },
    {
      title: "Founder & Lead Developer",
      organization: "Zunto Marketplace",
      period: "2024 - Present",
      description: "Building and leading development of a comprehensive e-commerce marketplace from concept to deployment"
    },
     {
      title: "Frontend Developer",
      organization: "InspireMe Media Network",
      period: "January 2025 - Present",
      description: "Building and learning  the development of a creative web interface from a very Great Mind."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            MB.DEV
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            {['Work', 'About', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              style={{
                top: `${i * 5}%`,
                width: '100%'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
              Open to Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
            Mishael Balogun
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Computer Science student at Lagos State University with a passion for building elegant, user-centric web applications. Specializing in modern frontend technologies and actively expanding my expertise in the MERN stack while leveraging AI tools to optimize development workflows and deliver exceptional digital experiences.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 group">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-500" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            About <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-50 blur-3xl"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/10">
                  MB
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">Driven by Innovation & Growth</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Mishael Balogun, a frontend developer and Computer Science student at Lagos State University, where I've been pursuing my degree part-time since 2021. My journey in tech is fueled by a genuine passion for creating intuitive, visually striking web experiences that solve real-world problems.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                With strong foundations in HTML, CSS, and JavaScript, I specialize in modern frameworks like React.js and Tailwind CSS. I'm currently expanding my skill set into the full MERN stack, embracing Node.js and MongoDB to become a well-rounded full-stack developer.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I leverage AI tools strategically to enhance my productivity, streamline workflows, and tackle complex challenges efficiently. As the founder of Zunto, an e-commerce marketplace currently in development, I'm not just coding—I'm building solutions that can scale and make an impact.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm eager to collaborate with experienced engineers and join teams where I can contribute meaningfully while continuing to learn and grow. My goal is to work on projects that challenge me and allow me to refine my craft alongside industry professionals.
              </p>

              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Experience</h4>
                {experiences.map((exp, idx) => (
                  <div key={idx} className="mb-6 pb-6 border-b border-white/10 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-semibold text-purple-400">{exp.title}</h5>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-500 mb-2">{exp.organization}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Technical <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="text-purple-400" size={24} />
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-purple-400" />
              What I Bring to Your Team
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">Clean Code Advocate</h4>
                <p className="text-gray-400">Writing maintainable, scalable, and well-documented code that teams can easily understand and build upon</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Fast Learner</h4>
                <p className="text-gray-400">Quickly adapting to new technologies, frameworks, and team workflows while contributing value from day one</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-teal-400">AI-Enhanced Workflow</h4>
                <p className="text-gray-400">Leveraging AI tools strategically to boost productivity, solve complex problems, and deliver quality work efficiently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Featured <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">{String(idx + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  {project.status && (
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-3">
                      {project.status}
                    </span>
                  )}
                  {project.role && (
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-3 ml-2">
                      {project.role}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-sm mb-3">{project.category}</p>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/btn">
                    View Details
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Build <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm actively seeking opportunities to join talented teams and contribute to exciting projects. Whether you're looking for a dedicated frontend developer or a collaborator on innovative ideas, let's connect.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:balogunmishael7@gmail.com" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all">
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">balogunmishael7@gmail.com</p>
            </a>
            <a href="https://github.com/program-is-a-must" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all">
              <Github className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Mishael Balogun</p>
            </a>
            <a href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all">
              <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Mishael Balogun</p>
            </a>
          </div>

          <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© 2025 Mishael Balogun Learning From InspireMe Media Network. Crafted with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;