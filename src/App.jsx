import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Database, Brain, Code, Terminal, ChevronDown, Send, Activity, BarChart3, Waves, Microscope } from 'lucide-react';

// --- Animated Background: Network/Nodes (Restored) ---
// Represents neural networks, graph theory, and interconnected data points
const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle configuration
    const particles = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Adaptive count
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      // Clear with a slight fade trail or solid color
      ctx.fillStyle = '#0f172a'; // Slate 900 background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.5)'; // Emerald color
        ctx.fill();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

// --- Portfolio Data (English) ---
const portfolioData = {
  name: "Alvaro Salgado",
  role: "Data Scientist & Biomedical Eng.",
  tagline: "Turning complex data into elegant solutions.",
  introHeadline: "I think like an engineer and create like a scientist.",
  about: [
    "Hi, I'm Alvaro. I'm a Data Scientist with a background in Biomedical Engineering. I use advanced machine learning to solve complex problems and make sense of messy data. I enjoy optimizing my own life — at the end of the day, I'm an engineer through and through. 🙂",
    "With over 4 years of experience, I've built solutions for startups where clean datasets are rare and creativity is essential. My approach combines analytical depth with practical problem-solving, turning complex data into actionable insights.",
    "I'm currently pursuing a Master's in Data Science, deepening my understanding of how models work from the inside."
  ],
  skills: [
    { category: "Core & Analysis", icon: <Code size={20} />, items: ["Python", "R", "SQL", "Statistics"] },
    { category: "Machine Learning", icon: <Brain size={20} />, items: ["TensorFlow", "PyTorch", "Scikit-learn", "CNNs"] },
    { category: "Engineering & Cloud", icon: <Database size={20} />, items: ["Git", "AWS", "Streamlit"] },
    { category: "BI Tools", icon: <BarChart3 size={20} />, items: ["Power BI", "Tableau"] },
  ],
  projects: [
    {
      title: "Song Lyrics Sentiment Analysis",
      description: "Streamlit app that integrates the Spotify API and web scraping to retrieve song lyrics, detect language, clean text, and apply Hugging Face NLP models for sentiment classification.",
      tags: ["NLP", "Hugging Face", "Spotify API", "Streamlit"],
      link: "https://huggingface.co/spaces/alvaro-salgado/spotify",
      github: "https://huggingface.co/spaces/alvaro-salgado/spotify",
      icon: <Waves size={24} />
    },
    {
      title: "Skin Lesion Classification (CNN)",
      description: "Deep learning project for automatic diagnosis of skin lesions using Convolutional Neural Networks. Trained on the public ISIC 2018 dataset (10k+ images) with data augmentation.",
      tags: ["Deep Learning", "CNN", "Computer Vision", "Medical Imaging"],
      link: "https://github.com/alvaro-salgado/skin-disease-classification",
      github: "https://github.com/alvaro-salgado/skin-disease-classification",
      icon: <Microscope size={24} />
    },
    {
      title: "Movie Recommendation System",
      description: "Collaborative filtering recommender system using Singular Value Decomposition (SVD) on the MovieLens 25M dataset to predict user preferences and provide personalized recommendations.",
      tags: ["Recommender Systems", "SVD", "Python", "Scikit-learn"],
      link: "https://github.com/alvaro-salgado/movielens-svd-recommender",
      github: "https://github.com/alvaro-salgado/movielens-svd-recommender",
      icon: <Database size={24} />
    },
    {
      title: "Airbnb Price Prediction (LMM - R)",
      description: "Linear Mixed Model implemented in R with random intercept and slope effects to predict Airbnb property prices. Includes an interactive Power BI dashboard.",
      tags: ["R Language", "LMM", "Power BI", "Statistical Modeling"],
      link: "https://github.com/alvaro-salgado/airbnb-lmm-r",
      github: "https://github.com/alvaro-salgado/airbnb-lmm-r",
      icon: <BarChart3 size={24} />
    }
  ],
  social: {
    github: "https://github.com/alvaro-salgado",
    linkedin: "https://www.linkedin.com/in/alvaro-salgado-lopez/",
    email: "mailto:alvarosandboxx@gmail.com"
  }
};

// --- UI Components ---
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-4 flex items-center gap-3">
    {children}
  </h2>
);

const ProjectCard = ({ project }) => (
  <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
        {project.icon}
      </div>
      <div className="flex gap-3">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub" title="View Code">
          <Github size={20} />
        </a>
      </div>
    </div>

    <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
    </a>
    <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
      {project.tags.map((tag, index) => (
        <span key={index} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900/80 text-emerald-300 border border-slate-700 group-hover:border-emerald-500/30 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const SkillCard = ({ category, icon, items }) => (
  <div className="bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:bg-slate-800/60">
    <div className="flex items-center gap-3 mb-4 text-emerald-400">
      {icon}
      <h3 className="font-bold text-lg text-slate-200">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <span key={idx} className="text-sm text-slate-300 bg-slate-900/50 px-3 py-1 rounded border border-slate-700 hover:text-emerald-200 transition-colors">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30">
      <NetworkBackground />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tight font-mono">
            AS<span className="text-emerald-500">_</span>DATA
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About Me</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium animate-fade-in">
            <Activity size={14} className="animate-pulse" />
            Biomedical Engineer & Data Scientist
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {portfolioData.name}
          </h1>

          <div className="h-px w-24 bg-emerald-500 mx-auto mb-8"></div>

          <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-light">
            {portfolioData.tagline}
          </p>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.introHeadline}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full md:w-auto flex items-center justify-center gap-2">
              <Terminal size={18} />
              View Projects
            </button>
            <a href={portfolioData.social.email} className="px-8 py-3 bg-transparent border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-emerald-400 hover:text-white transition-all flex items-center gap-2 w-full md:w-auto justify-center group">
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Get in Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="text-slate-500" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              {portfolioData.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Decorative Visual: Data Matrix / Bio */}
            <div className="relative mt-8 md:mt-0 w-full max-w-md mx-auto md:max-w-none">
              <div className="w-full h-auto min-h-[340px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 relative overflow-hidden group shadow-2xl">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

                {/* Floating elements simulating analysis */}
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">alvaro_analysis.py</div>
                  </div>

                  <div className="space-y-3 font-mono text-xs md:text-sm text-emerald-400/80 bg-slate-950/30 p-4 rounded-lg border border-slate-800/50">
                    <div>&gt; loading_modules... <span className="text-emerald-200">Done</span></div>
                    <div>&gt; optimizing_life... <span className="text-emerald-200">In Progress</span></div>
                    <div>&gt; synthesizing_bio_data...</div>
                    <div className="h-1 w-full bg-slate-700 rounded overflow-hidden mt-2">
                      <div className="h-full bg-emerald-500 w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-600/50 backdrop-blur-sm">
                      <div className="text-xs text-slate-400 mb-1">Accuracy</div>
                      <div className="text-xl font-bold text-emerald-400">98.2%</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-600/50 backdrop-blur-sm">
                      <div className="text-xs text-slate-400 mb-1">Epochs</div>
                      <div className="text-xl font-bold text-blue-400">200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Tech Stack & Domain</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to talk data?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            I'm always looking for challenging problems to solve. Whether it's a startup with messy data
            or a complex computer vision project, I'd love to hear about it.
          </p>
          <div className="flex justify-center gap-6">
            <a href={portfolioData.social.github} className="p-4 rounded-full bg-slate-800 text-white hover:bg-emerald-600 hover:scale-110 transition-all border border-slate-700 shadow-lg">
              <Github size={24} />
            </a>
            <a href={portfolioData.social.linkedin} className="p-4 rounded-full bg-slate-800 text-white hover:bg-[#0077b5] hover:scale-110 transition-all border border-slate-700 shadow-lg">
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.social.email} className="p-4 rounded-full bg-slate-800 text-white hover:bg-emerald-600 hover:scale-110 transition-all border border-slate-700 shadow-lg">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950 border-t border-slate-900">
        <p>© 2025 Alvaro Salgado. Engineering + Data Science.</p>
      </footer>
    </div>
  );
}
