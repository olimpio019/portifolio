'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [typing, setTyping] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const fullText = "Desenvolvedor Full Stack & Arquiteto de Software";
  // Formato: 55 + DDD + número (exemplo: 5511987654321)
  const WHATSAPP_NUMBER = "5519993993659";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTyping((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mensagemFormatada = `Olá! Me chamo ${formData.nome}.\nEmail: ${formData.email}\n\n${formData.mensagem}`;
    const urlWhatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemFormatada)}`;
    window.open(urlWhatsapp, '_blank');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'JavaScript', level: 95, icon: '📜' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Next.js', level: 80, icon: '▲' },
    { name: 'Node.js', level: 75, icon: '💚' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3', level: 90, icon: '🎨' },
    { name: 'Tailwind CSS', level: 85, icon: '🎯' },
    { name: 'SQL', level: 80, icon: '📊' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
    { name: 'Git', level: 85, icon: '📦' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'AWS', level: 65, icon: '☁️' },
    { name: 'REST API', level: 85, icon: '🔌' },
    { name: 'GraphQL', level: 75, icon: '📡' },
    { name: 'MongoDB', level: 80, icon: '🍃' }
  ];

  const projects = [
    {
      title: 'TatooMania',
      description: 'E-commerce completo para tatuagens temporárias com sistema de pagamento PIX, painel administrativo, gestão de produtos e sistema de notificações automáticas.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      link: '/projeto1',
      highlight: true
    },
    {
      title: 'Lanza Doc',
      description: 'Aplicação web moderna com Next.js e integração com APIs externas',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '/projeto2',
      highlight: false
    },
    {
      title: 'FinDRE',
      description: 'Aplicação web moderna com Next.js e integração com APIs externas',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '/projeto3',
      highlight: false
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-game animate-glow">DEV QUEST</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden game-button text-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`game-button text-sm transform hover:scale-105 transition-transform duration-300 ${
                    activeSection === section ? 'bg-secondary' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-2">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`game-button text-sm ${
                    activeSection === section ? 'bg-secondary' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-glow">
            Olá, Mundo!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 h-8">{typing}</p>
          <div className="animate-float space-y-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="game-button text-base sm:text-lg transform hover:scale-110 transition-transform duration-300"
            >
              Ver Projetos
            </button>
            <p className="text-sm text-gray-400">
              Scroll para descobrir mais ↓
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center animate-glow">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="game-card pixel-corners transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-xl sm:text-2xl mr-4">{skill.icon}</span>
                <h3 className="text-base sm:text-xl">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center animate-glow">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`game-card pixel-corners group transform hover:scale-105 transition-transform duration-300 ${
                project.highlight ? 'border-secondary' : ''
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-6 text-sm sm:text-base text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="game-button inline-block text-xs sm:text-sm transform hover:scale-110 transition-transform duration-300"
              >
                Ver Projeto
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center animate-glow">
          Contato
        </h2>
        <div className="max-w-2xl mx-auto px-4">
          <div className="game-card pixel-corners transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block mb-2 text-sm sm:text-base">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 bg-black border border-primary rounded focus:border-secondary outline-none text-sm sm:text-base transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 bg-black border border-primary rounded focus:border-secondary outline-none text-sm sm:text-base transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm sm:text-base">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 bg-black border border-primary rounded focus:border-secondary outline-none text-sm sm:text-base transition-colors duration-300"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="game-button w-full text-sm sm:text-base transform hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <span>Enviar no WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="animate-bounce">
                  <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm.14 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.26-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.78 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.14 6.14 0 0 1-1.16-3.6c0-3.37 2.77-6.15 6.18-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.14.2a7.26 7.26 0 0 0 3.04 2.65l.4.14c1.44.54 1.47.33 1.77.3.33-.03 1.07-.43 1.22-.85.15-.42.15-.78.1-.85-.02-.05-.08-.08-.15-.12l-1.12-.54a5.15 5.15 0 0 0-.3-.13c-.17-.06-.3-.1-.41.09-.12.18-.47.58-.57.7-.1.1-.2.12-.36.04l-.44-.2a4.42 4.42 0 0 1-2.13-1.98c-.1-.18-.01-.28.08-.37l.27-.31c.09-.1.12-.18.18-.3.05-.12.03-.23-.01-.32l-.5-1.19c-.13-.3-.27-.26-.36-.26z"/>
                </svg>
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Ao clicar em enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-xs sm:text-sm">
          Desenvolvido com 💚 e muitas linhas de código
        </p>
      </footer>
    </main>
  );
} 