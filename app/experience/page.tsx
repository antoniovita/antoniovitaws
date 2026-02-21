"use client";
import {
  PiBriefcaseBold,
  PiGraduationCapBold,
  PiBookOpenBold,
  PiCalendarBold,
  PiMapPinBold,
  PiCertificateBold,
} from "react-icons/pi";

const Experience = () => {
  const experiences = [
    {
      position: "Automation Intern",
      company: "BTG Pactual",
      location: "Remote",
      period: "August 2025 – November 2025",
      type: "Internship • Part-time",
      description:
        "Automation of internal processes using Python, AWS, React and API integrations. Working on improving efficiency and reliability across banking systems.",
      achievements: [
        "Automated critical banking workflows reducing manual effort by 60%",
        "Developed internal dashboards using React for process monitoring",
        "Implemented AWS Lambda functions for serverless automation",
      ],
      technologies: ["Python", "AWS", "React", "API Integration", "Lambda", "CronJob", "UiPath"],
    },
    {
      position: "Full-Stack Developer",
      company: "Freelancer / Personal Projects",
      location: "Remote",
      period: "2023 – 2024",
      type: "Freelance",
      description:
        "Development of full-stack applications with Next.js, Node.js and relational and NoSQL databases. Focus on modern web architecture and user experience.",
      achievements: [
        "Built 10+ production-ready web applications",
        "Implemented authentication systems with JWT and OAuth",
        "Created RESTful APIs with Node.js and Express",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    },
  ];

  const education = [
    {
      name: "PUC-Rio",
      degree: "Bachelor's in Computer Science",
      location: "Rio de Janeiro, Brazil",
      period: "2025 – Present",
      status: "In Progress",
      description:
        "Pursuing degree with academic merit scholarship. Focus on full-stack development, data structures, algorithms and artificial intelligence.",
      highlights: [
        "Academic Merit Scholarship",
        "Focus on Software Engineering",
        "Active participation and 8.2 GPA",
      ],
    },
    {
      name: "Instituto Gaylussac",
      degree: "High School and Elementary Education",
      location: "Niterói, Brazil",
      period: "2015 – 2024",
      status: "Completed",
      description:
        "Completed high school with focus on exact sciences. Participated in programming projects and mathematics olympiads.",
      highlights: [
        "Bronze medal in Kangaroo Math Competition",
        "Gold in OBLI (Brazilian Informatics Olympiad)",
        "Bronze in OBA (Brazilian Astronomy Olympiad)",
      ],
    },
    {
      name: "Duke University",
      degree:
        "Specialization in Decentralized Finance (DeFi)",
      location: "Remote",
      period: "Jan 2026 – Feb 2026",
      status: "Completed",
      description:
        "Completed a specialization led by Campbell Harvey on how blockchain-based financial systems are reshaping traditional finance.",
      highlights: [
        "Core DeFi primitives: DEXs, AMMs, lending protocols, and stablecoins",
        "Smart contract, oracle, governance, and custody risks",
        "Layer 1 vs Layer 2 scaling: rollups, sharding, and sidechains",
        "Token economics, incentives, and protocol design",
        "Regulatory frameworks, securities law, and compliance",
        "Security trade-offs between CeFi and DeFi",
        "Environmental and sustainability implications of blockchain systems",
        "Skills: DeFi, Blockchain, Smart Contracts, Crypto Economics, Risk Analysis, Financial Regulation, Ethereum, Digital Assets",
      ],
    },
    {
      name: "Cultura Inglesa",
      degree: "English Language Course",
      location: "Niterói, Brazil",
      period: "2021 – 2023",
      status: "Completed",
      description:
        "English course focused on oral and written communication, everyday fluency and preparation for international certifications.",
      highlights: [
        "Advanced proficiency achieved",
        "Focus on business communication",
        "Preparation for Cambridge certification",
      ],
    },
  ];

  const certifications = [
    {
      name: "LLM Course",
      issuer: "Hugging Face",
      date: "2025",
      description: "Advanced course on Large Language Models and their applications",
    },
    {
      name: "Data Modeling",
      issuer: "Fundação Bradesco",
      date: "2024",
      description: "Database design and data modeling best practices",
    },
    {
      name: "Python Programming",
      issuer: "Fundação Bradesco",
      date: "2024",
      description: "Comprehensive Python programming fundamentals",
    },
    {
      name: "C1 Cambridge Advanced",
      issuer: "Cambridge Assessment English",
      date: "2023",
      description: "Advanced English language proficiency certification",
    },
    {
      name: "B2 DELE Spanish",
      issuer: "Instituto Cervantes",
      date: "2023",
      description: "Upper-intermediate Spanish language certification",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-[90%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r py-12">
        
        {/* header */}
        <div className="mb-12 mt-20">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
              MY PROFESSIONAL JOURNEY
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Experience & Education
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              A complete view of my professional trajectory and academic background,
              including projects, achievements and mastered technologies.
            </p>
          </div>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* left part */}
          <div className="space-y-6">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-black">{exp.position}</h3>
                    <p className="text-base font-semibold text-gray-700 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium">
                      <PiCalendarBold size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium">
                      <PiMapPinBold size={14} />
                      {exp.location}
                    </span>
                    <span className="px-3 py-1.5 bg-black text-white rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Key Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-black mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* certificates */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <PiCertificateBold size={24} className="text-gray-700" />
                <h3 className="text-xl font-bold text-black">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-black pl-4 py-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-black">{cert.name}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 mt-1">{cert.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-white bg-black px-2 py-1 rounded whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right part */}
          <div className="space-y-6">
            

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    {index < 2 ? (
                      <PiGraduationCapBold size={24} className="text-gray-700 mt-1" />
                    ) : (
                      <PiBookOpenBold size={24} className="text-gray-700 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black">{edu.degree}</h3>
                      <p className="text-base font-semibold text-gray-700 mt-1">
                        {edu.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium">
                      <PiCalendarBold size={14} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium">
                      <PiMapPinBold size={14} />
                      {edu.location}
                    </span>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        edu.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-black mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* timeline */}
        <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-black mb-4">Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-black">2015</p>
              <p className="text-sm text-gray-600 mt-1">Started education</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-black">2023</p>
              <p className="text-sm text-gray-600 mt-1">Started freelancing</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-black">2025</p>
              <p className="text-sm text-gray-600 mt-1">PUC-Rio & BTG Pactual</p>
            </div>
            <div className="text-center p-4 bg-black rounded-xl">
              <p className="text-2xl font-bold text-white">2028</p>
              <p className="text-sm text-gray-300 mt-1">Expected graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;