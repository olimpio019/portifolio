'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projeto3() {
  const [activeTab, setActiveTab] = useState('sobre');
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    description: string;
  }>(null);

  const features = [
    'Cadastro e gerenciamento de produtos, clientes e despesas',
    'Painel administrativo com controle de usuários e permissões',
    'Geração automática da Demonstração do Resultado do Exercício (DRE)',
    'Relatórios financeiros detalhados e visualização por período',
    'Controle de departamentos e centro de custos',
    'Notificações automáticas para metas e prazos financeiros',
    'Dashboard com métricas de receitas, despesas e lucro líquido',
    'Integração com WhatsApp para suporte e atendimento'
  ];
  

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Frontend moderno e dinâmico' },
    { name: 'Next.js', icon: '▲', description: 'Framework para SSR e rotas otimizadas' },
    { name: 'Node.js', icon: '💚', description: 'Backend com APIs robustas' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Banco de dados relacional confiável' },
    { name: 'Tailwind CSS', icon: '🎯', description: 'Estilo limpo e responsivo' },
    { name: 'Calendly API', icon: '📅', description: 'Gestão de cadastros e painel administrativo' }
  ];

  const screenshots = [
    {
      title: 'Painel De Login',
      description: 'Pagina De Login Com Suporte para WhatsApp',
      image: '/login.png'
    },
    {
      title: 'Detalhes da pagina Dashboard',
      description: 'Página com cards que levam para paginas com Ranking, produtos, vendas, clientes, despesas e etc',
      image: '/dashboard1.png'
    },
    {
      title: 'Resultados Financeiros',
      description: 'Graficos que mostram o resultado da empresa',
      image: '/resultados.png'
    },
    {
      title: 'Ranking',
      description: 'é atualizado todo final de tarde',
      image: '/rank.png'
    }
  ];

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openModal = (screenshot: typeof screenshots[0]) => {
    setSelectedImage({
      src: screenshot.image,
      title: screenshot.title,
      description: screenshot.description
    });
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <Link href="/" className="game-button inline-block mb-6 sm:mb-8 text-xs sm:text-sm">
            ← Voltar para o Portfólio
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-glow">
            FinDRE
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Sistema de Gestão e DRE
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
          {['sobre', 'tecnologias', 'galeria', 'demo'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`game-button text-xs sm:text-sm ${
                activeTab === tab ? 'bg-secondary' : ''
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="game-card pixel-corners p-4 sm:p-8">
          {activeTab === 'sobre' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sobre o Projeto</h2>
              <p className="text-sm sm:text-base text-gray-300">
              FinDRE - Sistema de Gestão e DRE
Aplicação web corporativa para gerenciamento de produtos, vendas, despesas e geração de relatórios financeiros. Interface moderna, login seguro e painel intuitivo.

Stack: Next.js, TypeScript, Prisma ORM, PostgreSQL.
              </p>
              <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Principais Funcionalidades</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm sm:text-base">
                    <span className="text-primary">►</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'tecnologias' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stack Tecnológica</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="game-card pixel-corners p-3 sm:p-4 text-center hover:border-secondary transition-all duration-300 cursor-pointer transform hover:scale-[1.05] hover:-translate-y-1"
                  >
                    <span className="text-3xl sm:text-4xl mb-2 block animate-bounce">{tech.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{tech.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'galeria' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Galeria de Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {screenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className="game-card pixel-corners overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
                    onClick={() => openModal(screenshot)}
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm sm:text-base mb-2">{screenshot.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{screenshot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Demo do Projeto</h2>
              <div className="game-card pixel-corners p-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    Veja como funciona o sistema de gestão imobiliária acessando a demonstração abaixo.
                  </p>
                  <a 
                    href="dre-mu.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="game-button text-xs sm:text-sm inline-block"
                  >
                    Visitar Sistema
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 py-6 sm:py-8 text-center border-t border-primary/20">
          <p className="text-xs sm:text-sm">
            Desenvolvido com 💚 para transformar a gestão
          </p>
        </footer>
      </main>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl w-full game-card pixel-corners overflow-hidden bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 game-button text-xs sm:text-sm"
              onClick={closeModal}
            >
              Fechar ✕
            </button>
            
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
