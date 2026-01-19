"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import {
  PiMapPinBold,
  PiBriefcaseBold,
  PiGraduationCapBold,
  PiGlobeBold,
  PiBookOpenBold,
  PiUsersBold,
  PiBriefcaseFill,
  PiInstagramLogo,
  PiFileArrowDownBold,
  PiArrowRightBold,
  PiGithubLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

export default function Home() {
  return (

    
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-[80%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r">
        
        {/* main section */}
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* left part*/}
          <div className="flex flex-col justify-center space-y-6 order-1 lg:order-1">
            
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-full text-xs">
                <PiMapPinBold size={16} />
                Rio de Janeiro, Brasil or Remote
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-full text-xs">
                <PiBriefcaseBold size={16} />
                Software Engineer
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                SOFTWARE ENGINEER & COMPUTER SCIENCE STUDENT
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Antonio Vita
              </h1>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Software Engineer, Full Stack Developer e Estudante de Ciência da Computação.
              Especialista em desenvolvimento web moderno, arquitetura de software e
              experiência do usuário. Apaixonado por criar soluções inovadoras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <span className="text-sm font-medium">📝 Smart Contract Developer</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">💻 Full Stack Developer </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">🎓 Computer Science Merit Scholar</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">🌎 Possibly working in 5 languages</span>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="inline-flex text-sm items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                <PiBookOpenBold size={18} />
                Ver Projetos
                <PiArrowRightBold />
              </button>
              <button className="inline-flex text-sm items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                <PiFileArrowDownBold size={18} />
                Download my CV
              </button>
            </div>

            {/* social */}
            <div className="pt-4 space-y-3 lg:block hidden">
              <p className="text-sm text-gray-600 font-medium">Social Media</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PiInstagramLogo className="text-black" size={20} />
                  antoniovita_in
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PiGithubLogo className="text-black" size={20} />
                  antoniovita
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PiLinkedinLogo className="text-black" size={20} />
                  Antonio Vita
                </a>
              </div>
            </div>

            {/* experience */}
            <div className="pt-4 space-y-4 lg:block hidden">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 font-medium">Experience</p>
                <a
                  href="/experience"
                  className="inline-flex items-center gap-2 text-xs ml-2 font-medium text-black hover:text-gray-700 transition-colors"
                >
                  Ver todas as experiências
                  <PiArrowRightBold size={16} />
                </a>
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Full Stack Developer — Tech Startup
                    </p>
                    <p className="text-xs text-gray-500">2023 – Present</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Desenvolvimento de aplicações web modernas com foco em performance,
                      UX e arquitetura escalável.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Computer Science Intern — University Lab
                    </p>
                    <p className="text-xs text-gray-500">2022 – 2023</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Pesquisa em engenharia de software, desenvolvimento de projetos
                      acadêmicos e suporte a sistemas internos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* education */}
            <div className="pt-6 space-y-4 lg:block hidden">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 font-medium">Education</p>
                <a
                  href="/education"
                  className="inline-flex items-center gap-2 text-xs font-medium text-black hover:text-gray-700 transition-colors"
                >
                  Ver toda formação
                  <PiArrowRightBold size={16} />
                </a>
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <PiGraduationCapBold size={22} className="text-gray-700 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Bacharelado em Ciência da Computação
                    </p>
                    <p className="text-xs text-gray-500">
                      Universidade Federal do Rio de Janeiro — 2022 – 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <PiBookOpenBold size={22} className="text-gray-700 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Curso Profissional de Full Stack Development
                    </p>
                    <p className="text-xs text-gray-500">Alura / Rocketseat — 2021 – 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right part */}
          <div className="flex flex-col items-center lg:items-end space-y-6 order-2 lg:order-2">
            
            {/* image */}
            <div className="relative w-full max-w-md">
              <div className="relative bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden aspect-3/4 flex items-center justify-center">

                <div className="text-gray-400 text-center">
                  <PiUsersBold size={120} className="mx-auto mb-4" />
                  <p className="text-sm">Sua Foto Aqui</p>
                </div>

              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <PiUsersBold size={24} className="text-gray-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">20+</p>
                    <p className="text-sm text-gray-600">Linguagens de programação</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <PiBriefcaseFill size={24} className="text-gray-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">2+</p>
                    <p className="text-sm text-gray-600">Anos de Experiência</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <PiGraduationCapBold size={24} className="text-gray-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">68</p>
                    <p className="text-sm text-gray-600">Cursos Criados</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <PiGlobeBold size={24} className="text-gray-600" />
                  <div>
                    <p className="text-2xl font-bold text-black">3</p>
                    <p className="text-sm text-gray-600">Países Trabalhados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* projects */}
            <div className="w-full max-w-md lg:block hidden">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600 font-medium">Projects</p>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs font-medium text-black hover:text-gray-700 transition-colors"
                >
                  Ver todos os projetos
                  <PiArrowRightBold size={16} />
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={12}
                  slidesPerView={1}
                  navigation
                  className="w-full"
                >
                  <SwiperSlide>
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="text-sm font-semibold text-black">Portfolio Website</p>
                      <p className="text-xs text-gray-500 mt-1">Next.js • Tailwind • UI/UX</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Portfólio moderno com layout responsivo, animações e páginas de projetos.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Código
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Ver projeto
                          <PiArrowRightBold size={14} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="text-sm font-semibold text-black">Smart Contract DApp</p>
                      <p className="text-xs text-gray-500 mt-1">Solidity • Ethers • Web3</p>
                      <p className="text-sm text-gray-700 mt-2">
                        DApp para interação com smart contracts, wallet connect e dashboard de
                        transações.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Código
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Ver projeto
                          <PiArrowRightBold size={14} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="text-sm font-semibold text-black">API & Dashboard</p>
                      <p className="text-xs text-gray-500 mt-1">Node • PostgreSQL • React</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Backend com autenticação + painel administrativo para gestão de dados e
                        relatórios.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Código
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Ver projeto
                          <PiArrowRightBold size={14} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden mt-8 space-y-8">
          
          <div className="pt-4 space-y-3">
            <p className="text-sm text-gray-600 font-medium">Social Media</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <PiInstagramLogo className="text-black" size={20} />
                antoniovita_in
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <PiGithubLogo className="text-black" size={20} />
                antoniovita
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <PiLinkedinLogo className="text-black" size={20} />
                Antonio Vita
              </a>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600 font-medium">Projects</p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-medium text-black hover:text-gray-700 transition-colors"
              >
                Ver todos os projetos
                <PiArrowRightBold size={16} />
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-4">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1000 }}
                spaceBetween={12}
                slidesPerView={1}
                className="w-full"
              >
                <SwiperSlide>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-black">Portfolio Website</p>
                    <p className="text-xs text-gray-500 mt-1">Next.js • Tailwind • UI/UX</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Portfólio moderno com layout responsivo, animações e páginas de projetos.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Código
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Ver projeto
                        <PiArrowRightBold size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-black">Smart Contract DApp</p>
                    <p className="text-xs text-gray-500 mt-1">Solidity • Ethers • Web3</p>
                    <p className="text-sm text-gray-700 mt-2">
                      DApp para interação com smart contracts, wallet connect e dashboard de
                      transações.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Código
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Ver projeto
                        <PiArrowRightBold size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-black">API & Dashboard</p>
                    <p className="text-xs text-gray-500 mt-1">Node • PostgreSQL • React</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Backend com autenticação + painel administrativo para gestão de dados e
                      relatórios.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Código
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Ver projeto
                        <PiArrowRightBold size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-medium">Experience</p>
              <a
                href="/experience"
                className="inline-flex items-center gap-2 text-xs ml-2 font-medium text-black hover:text-gray-700 transition-colors"
              >
                Ver todas as experiências
                <PiArrowRightBold size={16} />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-black">
                    Full Stack Developer — Tech Startup
                  </p>
                  <p className="text-xs text-gray-500">2023 – Present</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Desenvolvimento de aplicações web modernas com foco em performance,
                    UX e arquitetura escalável.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-black">
                    Computer Science Intern — University Lab
                  </p>
                  <p className="text-xs text-gray-500">2022 – 2023</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Pesquisa em engenharia de software, desenvolvimento de projetos
                    acadêmicos e suporte a sistemas internos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-medium">Education</p>
              <a
                href="/education"
                className="inline-flex items-center gap-2 text-xs font-medium text-black hover:text-gray-700 transition-colors"
              >
                Ver toda formação
                <PiArrowRightBold size={16} />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <PiGraduationCapBold size={22} className="text-gray-700 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-black">
                    Bacharelado em Ciência da Computação
                  </p>
                  <p className="text-xs text-gray-500">
                    Universidade Federal do Rio de Janeiro — 2022 – 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <PiBookOpenBold size={22} className="text-gray-700 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-black">
                    Curso Profissional de Full Stack Development
                  </p>
                  <p className="text-xs text-gray-500">Alura / Rocketseat — 2021 – 2022</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}