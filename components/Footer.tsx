import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeSimpleBold,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center border-t border-gray-200 mt-14">
      <div className="w-[90%] max-w-7xl border-l border-r border-dashed border-gray-200 px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Image src="/sign.png" width={150} height={100} alt="Antonio Vita" />
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Software Engineer and Computer Science student specialized
               in modern web development and blockchain technologies.           
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-black transition-colors">
                Projects
              </Link>
              <Link href="/services" className="hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-black transition-colors">
                About
              </Link>
              <Link href="/experience" className="hover:text-black transition-colors">
                Experience
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Contact
            </p>
            <a
              href="mailto:antoniovitafonseca@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
            >
              <PiEnvelopeSimpleBold size={16} />
              antoniovitafonseca@gmail.com
            </a>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://github.com/antoniovita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="GitHub"
              >
                <PiGithubLogo size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/antoniovita/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="LinkedIn"
              >
                <PiLinkedinLogo size={18} />
              </a>
              <a
                href="https://www.instagram.com/antoniovitaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <PiInstagramLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500">
          <p>© {year} Antonio Vita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
