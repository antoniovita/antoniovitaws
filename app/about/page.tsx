"use client";
import {
  PiGraduationCapBold,
  PiCodeBold,
  PiRocketLaunchBold,
  PiLightbulbBold,
  PiBookOpenBold,
  PiBriefcaseBold,
  PiGlobeBold,
} from "react-icons/pi";

const About = () => {
  const timelineEvents = [
    {
      year: "2017",
      title: "First Contact with Programming",
      description:
        "Had my first experience with programming using Scratch during school classes, discovering the basics of logic and creativity.",
      icon: <PiLightbulbBold size={20} />,
    },
    {
      year: "2019",
      title: "Starting with Python",
      description:
        "Began learning Python at school, exploring programming logic and building simple automation scripts.",
      icon: <PiCodeBold size={20} />,
    },
    {
      year: "2020",
      title: "JavaScript & First Personal Projects",
      description:
        "Started learning JavaScript independently, building Discord bots and creating my first personal websites.",
      icon: <PiRocketLaunchBold size={20} />,
    },
    {
      year: "2023",
      title: "Returning to Web Development",
      description:
        "Returned to active development, focusing on web projects and strengthening my skills with React.",
      icon: <PiCodeBold size={20} />,
    },
    {
      year: "2024",
      title: "Senior Year & Deepening Knowledge",
      description:
        "In my final year of high school, resumed intensive studies, advanced in web development, and started learning Java.",
      icon: <PiGraduationCapBold size={20} />,
    },
    {
      year: "2025",
      title: "Computer Science Undergraduate",
      description:
        "Started my Computer Science degree with a strong foundation, focusing on full-stack development and beginning my journey in data and AI with PyTorch.",
      icon: <PiBookOpenBold size={20} />,
    },
    {
      year: "2025",
      title: "Automation Intern — BTG Pactual",
      description:
        "Worked on automating internal banking processes using Python, AWS, and React, improving efficiency and reliability across systems.",
      icon: <PiBriefcaseBold size={20} />,
    },
  ];

  const languages = [
    { name: "Portuguese", level: "NATIVE", percentage: 100, color: "bg-black" },
    { name: "English", level: "C1", percentage: 90, color: "bg-black" },
    { name: "Italian", level: "C1", percentage: 90, color: "bg-black" },
    { name: "Spanish", level: "B2", percentage: 70, color: "bg-black" },
    { name: "French", level: "B1", percentage: 60, color: "bg-black" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-[90%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r">
        {/* main section */}
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* left part */}
          <div className="flex flex-col justify-center space-y-6 order-1 lg:order-1">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                MY JOURNEY
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                From technology enthusiast to developer
              </h1>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                My journey in technology began at a very young age, when I received my first computer at the age of eight and spent countless hours exploring, experimenting, and trying to understand how things worked. What started as simple curiosity soon became a genuine passion for technology.
              </p>
              <p>
                My first formal contact with programming happened at school, where I learned the basics through Scratch and later wrote my very first "Hello World" in Python in 2017. By my last year of high school, I had already decided that Computer Science would be my future, and from that moment on, I fully immersed myself in learning how to code.
              </p>
              <p>
                Since then, I have explored areas such as web and mobile development, building applications and strengthening my foundations in software engineering. Eventually, I chose to specialize in Web3, as I believe in the future of a decentralized internet and the potential of blockchain technologies. Today, I combine academic knowledge with hands-on experience to turn ideas into impactful digital products.              
              </p>
            </div>

            {/* skills */}
            <div className="pt-4 space-y-3 lg:block hidden">
              <p className="text-sm text-gray-600 font-medium">Areas of Expertise</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-black">Frontend Development</p>
                  <p className="text-xs text-gray-500 mt-1">React, Next.js, Tailwind</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-black">Backend Development</p>
                  <p className="text-xs text-gray-500 mt-1">Node.js, SpringBoot, PostgreSQL, APIs</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-black">Smart Contracts</p>
                  <p className="text-xs text-gray-500 mt-1">Solidity, Hardhat, Foundry, Web3, Ethers</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <p className="text-sm font-semibold text-black">UI/UX Design</p>
                  <p className="text-xs text-gray-500 mt-1">Figma, Design Systems</p>
                </div>
              </div>
            </div>

            {/* languages */}
            <div className="pt-4 space-y-3 lg:block hidden">
              <div className="flex items-center gap-2 mb-3">
                <PiGlobeBold size={20} className="text-gray-700" />
                <p className="text-sm text-gray-600 font-medium">Languages</p>
              </div>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-black">{lang.name}</span>
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${lang.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right part */}
          <div className="flex flex-col space-y-6 order-2 lg:order-2">
            <div className="space-y-3">
              <p className="text-sm text-gray-600 font-medium">Timeline</p>
              
              {/* timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                        {event.icon}
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white bg-black px-2 py-1 rounded">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-black mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-700">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* skills mobile */}
          <div className="space-y-3">
            <p className="text-sm text-gray-600 font-medium">Areas of Expertise</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <p className="text-sm font-semibold text-black">Frontend Development</p>
                <p className="text-xs text-gray-500 mt-1">React, Next.js, Tailwind</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <p className="text-sm font-semibold text-black">Backend Development</p>
                <p className="text-xs text-gray-500 mt-1">Node.js, SpringBoot, PostgreSQL, APIs</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <p className="text-sm font-semibold text-black">Smart Contracts</p>
                <p className="text-xs text-gray-500 mt-1">Solidity, Hardhat, Foundry, Web3, Ethers</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <p className="text-sm font-semibold text-black">UI/UX Design</p>
                <p className="text-xs text-gray-500 mt-1">Figma, Design Systems</p>
              </div>
            </div>
          </div>

          {/* languages mobile */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <PiGlobeBold size={20} className="text-gray-700" />
              <p className="text-sm text-gray-600 font-medium">Languages</p>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-black">{lang.name}</span>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${lang.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;