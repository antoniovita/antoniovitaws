"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  PiGithubLogo,
  PiXBold,
  PiStarBold,
  PiGitForkBold,
  PiCalendarBold,
} from "react-icons/pi";

const Projects = () => {

    type Project = {
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github: string;
    stars: number;
    forks: number;
    date: string;
    achievements: string[];
    };

    const [project, setProject] = useState<Project | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const projects = [
    {
      title: "IRSA: Medical Imaging Radiology",
      category: "Full-Stack",
      description: "SPA construída com Next.js e TailwindCSS para o uma clínica de radiologia e imagens médicas.",
      longDescription:
        "Projeto em formato SPA focado em performance e UX, usando Next.js e TailwindCSS. Estruturado para navegação fluida, componentes reutilizáveis e layout responsivo.",
      image: "/projects/irsa-site.png",
      technologies: ["Typescript", "Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/antoniovita/irsa",
      stars: 1,
      forks: 0,
      date: "2025",
      achievements: [
        "SPA com navegação rápida e responsiva",
        "UI moderna com TailwindCSS",
        "Arquitetura de componentes reutilizáveis",
        "Boas práticas de organização de rotas e layout",
      ],
    },
    {
      title: "MyOrder – Digital Menu for Restaurants",
      category: "Frontend",
      description: "Cardápio digital interativo com interface responsiva para pedidos sem contato.",
      longDescription:
        "Aplicação de cardápio digital voltada para experiência mobile-first, permitindo navegação rápida entre categorias, visualização de itens e fluxo de pedido/contato sem fricção.",
      image: "/projects/myorder.png",
      technologies: ["Typescript", "PostgreSQL", "NeonDB", "Vercel", "React", "Next.js", "Responsive UI"],
      github: "https://github.com/antoniovita/myorder",
      stars: 0,
      forks: 0,
      date: "2025",
      achievements: [
        "Interface mobile-first e responsiva",
        "Navegação por categorias com foco em UX",
        "Fluxo de pedido/contato sem contato físico",
        "Componentização para evolução rápida",
      ],
    },
    {
      title: "Gymtracker - Workout Management App",
      category: "Mobile",
      description: "App mobile para registrar, organizar e acompanhar treinos de academia.",
      longDescription:
        "Aplicativo focado em produtividade e consistência: cadastro de treinos, organização por dias/rotinas e acompanhamento do histórico para evolução progressiva.",
      image: "/projects/gymtracker.jpg",
      technologies: ["Expo", "React Native", "Typescript", "Mobile", "App Design", "Workout Tracking"],
      github: "https://github.com/antoniovita/gymtracker",
      stars: 0,
      forks: 0,
      date: "2025",
      achievements: [
        "Organização de rotinas e exercícios",
        "Histórico para acompanhar evolução",
        "UX simples e rápida para uso diário",
        "Estrutura pronta para adicionar métricas (carga, reps, PRs)",
      ],
    },
    {
      title: "Space Portfolio",
      category: "Frontend",
      description: "Portfólio construído inteiramente com Next.js e TailwindCSS.",
      longDescription:
        "Portfólio com estética moderna e foco em performance, SEO e responsividade. Estruturado para destacar projetos, stack e links de forma clara e elegante.",
      image: "/projects/portfolio.png",
      technologies: [ "Typescript", "Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/antoniovita/portfolio",
      stars: 1,
      forks: 0,
      date: "2025",
      achievements: [
        "Layout responsivo com TailwindCSS",
        "Boa estrutura para SEO e performance",
        "Seções de projetos e stack bem organizadas",
        "Base fácil de manter e expandir",
      ],
    },
    {
      title: "Fuoco - AI-powered routine management",
      category: "AI/ML",
      description: "App Expo usando llama.rn com o modelo TinyLLM (encoding) para rotinas com IA.",
      longDescription:
        "Aplicação mobile focada em gerenciamento de rotinas com auxílio de IA. Implementa integração via llama.rn e usa TinyLLM (encoding) para experiências inteligentes no dispositivo.",
      image: "/projects/fuoco.png",
      technologies: [ "Typescript", "Expo", "React Native", "llama.rn", "Gemma3"],
      github: "https://github.com/antoniovita/fuoco",
      stars: 1,
      forks: 0,
      date: "2025",
      achievements: [
        "Integração com llama.rn",
        "Uso do TinyLLM (encoding model)",
        "Foco em produtividade e rotinas",
        "Base pronta para templates e automações de hábitos",
      ],
    },
    {
      title: "ERC20 From Scratch",
      category: "Web3",
      description:
        "Implementação do padrão ERC-20 totalmente do zero, sem OpenZeppelin, focada em entendimento da especificação.",
      longDescription:
        "Projeto de smart contract que implementa o ERC-20 do zero, evitando bibliotecas externas para reforçar o domínio da especificação, eventos, armazenamento e edge cases.",
      image: "/projects/erc20.jpeg",
      technologies: ["Solidity", "EVM", "ERC-20", "Hardhat"],
      github: "#",
      stars: 1,
      forks: 0,
      date: "2026",
      achievements: [
        "ERC-20 implementado sem OpenZeppelin",
        "Foco em especificação, eventos e storage",
        "Base ideal para auditoria/estudo",
        "Estrutura testável e extensível",
      ],
    },
    {
      title: "Velt",
      category: "Web3",
      description:
        "Infra on-chain para vaults tokenizados (ERC-4626), oferecendo saldos automaticamente rendendo yield de forma não custodial.",
      longDescription:
        "Infraestrutura modular para criação de vaults baseados em ERC-4626, permitindo que apps (wallets, dApps, payroll, escrow etc.) ofereçam saldos yield-bearing automaticamente, com extensibilidade e sem custódia.",
      image: "/projects/velt.webp",
      technologies: ["Solidity", "OpenZeppelin", "Hardhat", "EVM", "ERC-4626", "DeFi"],
      github: "#",
      stars: 1,
      forks: 0,
      date: "2026",
      achievements: [
        "Baseado em ERC-4626 (vaults tokenizados)",
        "Arquitetura modular e extensível",
        "Não-custodial por design",
        "Pensado para integração com múltiplos apps",
      ],
    },
    {
      title: "Close Friends Token",
      category: "Web3",
      description: "ERC20 com staking em tiers e um access gate baseado em condição de staking.",
      longDescription:
        "Conjunto de contratos para um token ERC20 com staking em níveis (tiers) e mecanismo de gate de acesso, útil para comunidades e experiências token-gated.",
      image: "/projects/close-friends.png",
      technologies: ["Solidity", "Hardhat", "EVM", "ERC-20", "Staking"],
      github: "#",
      stars: 1,
      forks: 0,
      date: "2026",
      achievements: [
        "Token ERC20 + staking em tiers",
        "Mecanismo de access gate",
        "Estrutura clara para evoluir regras de acesso",
        "Padrão aplicável a produtos token-gated",
      ],
    },
    {
      title: "Minimal DeFi Vault (ERC4626-inspired)",
      category: "Web3",
      description:
        "Vault DeFi mínimo inspirado no ERC-4626: depósitos geram shares e saques queimam shares com matemática precisa, tudo do zero.",
      longDescription:
        "Vault onde usuários depositam um ativo ERC20 e recebem shares proporcionais. Saques queimam shares e retornam ativos correspondentes, preservando valor justo com matemática DeFi e gestão de storage — implementado do zero (sem OpenZeppelin).",
      image: "/projects/defivault.jpg",
      technologies: ["Solidity", "Foundry", "EVM", "DeFi Math", "ERC-20"],
      github: "#",
      stars: 0,
      forks: 0,
      date: "2026",
      achievements: [
        "Shares proporcionais e contabilidade de vault",
        "Matemática precisa para preservar fair value",
        "Implementação sem OpenZeppelin",
        "Base sólida para evoluir para ERC-4626 completo",
      ],
    },
    {
      title: "FundMe (Hardhat + Chainlink)",
      category: "Web3",
      description:
        "Crowdfunding com Hardhat: contrato FundMe e biblioteca PriceConverter usando Chainlink Price Feed.",
      longDescription:
        "Projeto em Hardhat com contrato de crowdfunding (FundMe) e biblioteca para conversão de preço (PriceConverter) integrada a feeds da Chainlink, permitindo validações e lógica baseada em valores em moeda forte.",
      image: "/projects/fundme.jpg",
      technologies: ["Solidity", "Hardhat", "Chainlink", "EVM"],
      github: "#",
      stars: 0,
      forks: 0,
      date: "2026",
      achievements: [
        "Integração com Chainlink Price Feeds",
        "Estrutura Hardhat para deploy/test",
        "Biblioteca PriceConverter reaproveitável",
        "Contrato simples e didático de crowdfunding",
      ],
    },
    {
      title: "SAU PUC-Rio 2.0",
      category: "Full-Stack",
      description: "Projeto Next.js recriando o sistema SAU da PUC-Rio.",
      longDescription:
        "Recriação do sistema SAU com Next.js, com foco em UX e organização de telas/fluxos. Estrutura preparada para autenticação, rotas protegidas e escalabilidade do front.",
      image: "/projects/imagesau.png",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Prisma Database"],
      github: "#",
      stars: 0,
      forks: 3,
      date: "2025",
      achievements: [
        "Recriação de fluxos do sistema SAU",
        "Estrutura de páginas e componentes organizada",
        "Base pronta para autenticação e permissões",
        "Foco em UX e consistência visual",
      ],
    },
    {
      title: "CondominiumAPI",
      category: "Backend",
      description: "API de um sistema de gestão de condomínio em Java com Spring Boot.",
      longDescription:
        "Backend em Spring Boot para gestão de condomínio, com base pronta para módulos como moradores, unidades, comunicados, pagamentos e permissões. Estruturada para evoluir com segurança e manutenibilidade.",
      image: "/projects/api.jpeg",
      technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
      github: "#",
      stars: 0,
      forks: 0,
      date: "2025",
      achievements: [
        "API REST estruturada com Spring Boot",
        "Base escalável para módulos de condomínio",
        "Separação clara de camadas (controller/service/etc.)",
        "Pronto para autenticação e controle de acesso",
      ],
    },
  ];

  const categories = ["All", "Full-Stack", "AI/ML", "Web3", "Frontend", "Backend", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-[90%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r py-12">

        {/* header */}
        <div className="mb-12 mt-20">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
              MY WORK
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              A collection of projects showcasing my skills in full-stack development, AI
              integration, and modern web technologies. Each project demonstrates
              problem-solving abilities and technical expertise.
            </p>
          </div>

          {/* categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all"
              >
                <div className="relative h-40 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    width={800}
                    height={450}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-black text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">{project.title}</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <PiStarBold size={12} />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <PiGitForkBold size={12} />
                      {project.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      <PiCalendarBold size={12} />
                      {project.date}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium"
                    >
                      <PiGithubLogo size={16} />
                      Code
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 hover:cursor-pointer py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-xs font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-black mb-4">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-black">{projects.length}</p>
              <p className="text-sm text-gray-600 mt-1">Total Projects</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-black">
                {projects.reduce((sum, p) => sum + p.stars, 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">GitHub Stars</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-black">
                {projects.reduce((sum, p) => sum + p.forks, 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Forks</p>
            </div>
            <div className="text-center p-4 bg-black rounded-xl">
              <p className="text-3xl font-bold text-white">
                {new Set(projects.flatMap((p) => p.technologies)).size}
              </p>
              <p className="text-sm text-gray-300 mt-1">Technologies Used</p>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >

              <div className="bg-white border-b border-gray-200 p-6 flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {selectedProject.title}
                  </h2>
                  <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <PiXBold size={24} />
                </button>
              </div>

              <div className="overflow-y-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  <div className="space-y-6">
                    <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        width={100}
                        height={100}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">About</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                  </div>

                  {/* right part */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-black mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-black mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <PiStarBold size={16} />
                      <span className="text-xl font-bold text-black">
                        {selectedProject.stars}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Stars</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <PiGitForkBold size={16} />
                      <span className="text-xl font-bold text-black">
                        {selectedProject.forks}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Forks</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <PiCalendarBold size={16} />
                      <span className="text-xl font-bold text-black">
                        {selectedProject.date}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Year</p>
                  </div>
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  <PiGithubLogo size={20} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;