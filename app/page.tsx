"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import {
  PiMapPinBold,
  PiBriefcaseBold,
  PiGraduationCapBold,
  PiBookOpenBold,
  PiInstagramLogo,
  PiFileArrowDownBold,
  PiArrowRightBold,
  PiGithubLogo,
  PiLinkedinLogo,
  PiMedalBold,
} from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  return (

    
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-[90%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r">
        
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

            <p className="text-md text-gray-700 leading-relaxed">
              I am a Software Engineer and Computer Science student specializing in modern web development and blockchain technologies. As a Full Stack Developer and Smart Contract Developer in the Web3 ecosystem, I build decentralized applications with a strong focus on performance, security, and scalability. I am passionate about software architecture, innovative solutions, and turning complex ideas into reliable, real-world products.              
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <span className="text-sm font-medium">📝 Smart Contract & Web3 Developer</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">💻 Full Stack Engineer </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">🎓 Merit Scholarship Recipient</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">🌎 Open to Remote work Worldwide</span>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link className="inline-flex hover:cursor-pointer text-sm items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium" href={"/projects"}>
                <PiBookOpenBold size={18} />
                View Projects
                <PiArrowRightBold />
              </Link>
              <a className="inline-flex text-sm hover:cursor-pointer items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                href="/cv.pdf"
                download
              >
                <PiFileArrowDownBold size={18} />
                Download my CV
              </a>
            </div>

            {/* social */}
            <div className="pt-4 space-y-3 lg:block hidden">
              <p className="text-sm text-gray-600 font-medium">Social Media</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/antoniovita_fi/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PiInstagramLogo className="text-black" size={20} />
                  antoniovita_in
                </a>

                <a
                  href="https://github.com/antoniovita"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PiGithubLogo className="text-black" size={20} />
                  antoniovita
                </a>

                <a
                  href="https://www.linkedin.com/in/antonio-vita-6177922b7/"
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
                  View more
                  <PiArrowRightBold size={16} />
                </a>
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Automation Intern — BTG Pactual
                    </p>
                    <p className="text-xs text-gray-500">August 2025 – November 2025</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Built automation solutions with Python, Pandas, and AWS to optimize financial workflows and data processing. Automated reports and system integrations, reducing manual operations and improving efficiency in a high-performance investment banking environment.
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
                  View more
                  <PiArrowRightBold size={16} />
                </a>
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <PiGraduationCapBold size={22} className="text-gray-700 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Computer Science Bachelor
                    </p>
                    <p className="text-xs text-gray-500">
                    PUC Rio - 2025 - Present
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                  <PiMedalBold size={22} className="text-gray-700 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Advanced English - C1  
                    </p>
                    <p className="text-xs text-gray-500">Cambridge — 2023 </p>
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
                <Image
                  src="/me.jpeg"
                  alt="Me"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 28rem, 100vw"
                />
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="text-2xl font-bold text-black">5+</p>
                    <p className="text-sm text-gray-600">Programming Languages</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="text-2xl font-bold text-black">2+</p>
                    <p className="text-sm text-gray-600">Years of Experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="text-2xl font-bold text-black">10+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="text-2xl font-bold text-black">5</p>
                    <p className="text-sm text-gray-600">Languages Spoken</p>
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
                  View more
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
                      <p className="text-xs text-gray-500 mt-1">Typescript • Next.js • Tailwind • UI/UX</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Modern portfolio with responsive layout, animations, and project pages.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="https://github.com/antoniovita/portfolio"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Code
                        </a>
                        <a
                          href=""
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          View details
                          <PiArrowRightBold size={14} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="text-sm font-semibold text-black">Velt - Tokenized Yield Vault</p>
                      <p className="text-xs text-gray-500 mt-1">Solidity • Hardhat • OpenZeppelin • Web3</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Velt is an on-chain infrastructure for creating tokenized financial vaults based on ERC-4626.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="https://github.com/antoniovita/velt"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Code
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          View details
                          <PiArrowRightBold size={14} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="text-sm font-semibold text-black">Fuoco - AI Productivity App</p>
                      <p className="text-xs text-gray-500 mt-1"> Typescript • Expo • SQLite • llama.rn • LLM </p>
                      <p className="text-sm text-gray-700 mt-2">
                        Fuoco is a privacy-first productivity app built with Expo and React Native to help users manage tasks, routines, expenses, and workouts.
                      </p>

                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href="https://github.com/antoniovita/fuoco"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <PiGithubLogo size={16} />
                          Code
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          View details
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
                View
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
                    <p className="text-xs text-gray-500 mt-1">Typescript • Next.js • Tailwind • UI/UX</p>
                    <p className="text-sm text-gray-700 mt-2">
                        Modern portfolio with responsive layout, animations, and project pages.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="https://github.com/antoniovita/portfolio"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        View details
                        <PiArrowRightBold size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-black">Velt - Tokenized Yield Vault</p>
                    <p className="text-xs text-gray-500 mt-1">Solidity • Hardhat • OpenZeppelin • Web3</p>
                    <p className="text-sm text-gray-700 mt-2">
                        Velt is an on-chain infrastructure for creating tokenized financial vaults based on ERC-4626.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="https://github.com/antoniovita/velt"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        View details
                        <PiArrowRightBold size={14} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-black">Fuoco - AI Productivity App</p>
                    <p className="text-xs text-gray-500 mt-1">Typescript • Expo • SQLite • llama.rn • LLM</p>
                    <p className="text-sm text-gray-700 mt-2">
                        Fuoco is a privacy-first productivity app built with Expo and React Native to help users manage tasks, routines, expenses, and workouts.
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href="https://github.com/antoniovita/fuoco"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <PiGithubLogo size={16} />
                        Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        View details
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
                View more
                <PiArrowRightBold size={16} />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-black">
                    Automation Intern - BTG Pactual
                  </p>
                  <p className="text-xs text-gray-500">August 2025 – November 2025</p>
                  <p className="text-sm text-gray-700 mt-1">
                      Built automation solutions with Python, Pandas, and AWS to optimize financial workflows and data processing. Automated reports and system integrations, reducing manual operations and improving efficiency in a high-performance investment banking environment.
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
                View more
                <PiArrowRightBold size={16} />
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <PiGraduationCapBold size={22} className="text-gray-700 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-black">
                    Computer Science Bachelor
                  </p>
                  <p className="text-xs text-gray-500">
                    PUC Rio - 2025 - Present
                  </p>
                </div>
              </div>        

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <PiMedalBold size={22} className="text-gray-700 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-black">
                    Advanced English - C1
                  </p>
                  <p className="text-xs text-gray-500">Cambridge - 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
