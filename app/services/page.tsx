"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PiArrowRightBold,
  PiStarBold,
  PiStarFill,
  PiXBold,
} from "react-icons/pi";

type Service = {
  title: string;
  category: "Web3" | "Full-Stack" | "Frontend" | "Consulting";
  description: string;
  estimatedPrice: string;
  deliveryTime: string;
  rating: number;
  technologies: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Mobile App Development",
    category: "Full-Stack",
    description:
      "Complete mobile app development focused on performance, usability, and scalable architecture.",
    estimatedPrice: "$600",
    deliveryTime: "1 month",
    rating: 5,
    technologies: [
      "Expo (React Native)",
      "NativeWind",
      "SQLite",
      "React Navigation",
      "Mobile App Ecosystem",
    ],
    featured: true,
  },
  {
    title: "Full-Stack Web App Development",
    category: "Full-Stack",
    description:
      "End-to-end web app development with frontend, backend, and database integration.",
    estimatedPrice: "$600",
    deliveryTime: "3 weeks",
    rating: 4,
    technologies: [
      "Spring Boot",
      "React",
      "NestJS",
      "Next.js",
      "REST APIs",
    ],
    featured: true,
  },
  {
    title: "dApp Development",
    category: "Web3",
    description:
      "Development of decentralized applications with wallet integration and smart contract interactions.",
    estimatedPrice: "$800",
    deliveryTime: "1 month",
    rating: 5,
    technologies: [
      "Wagmi",
      "Hardhat",
      "Solidity",
      "Foundry",
      "Next.js / React",
    ],
  },
  {
    title: "Landing Page Development",
    category: "Frontend",
    description:
      "High-converting landing page development with clean design and responsive behavior.",
    estimatedPrice: "$100",
    deliveryTime: "5-7 days",
    rating: 4,
    technologies: [
      "Next.js",
      "React",
      "Responsive UI",
      "SEO Basics",
    ],
  },
  {
    title: "Smart Contract Development",
    category: "Web3",
    description:
      "Secure smart contract development with clear business rules and testing support.",
    estimatedPrice: "Custom quote",
    deliveryTime: "Custom timeline",
    rating: 5,
    technologies: [
      "Solidity",
      "Hardhat",
      "Foundry",
      "Smart Contract Testing",
    ],
  },
];

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const categories = useMemo(
    () => ["All", ...new Set(services.map((service) => service.category))],
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") {
      return services;
    }
    return services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen pt-4 md:pt-8"
    >
      <div className="w-[90%] max-w-7xl border-gray-200 border-dashed px-6 border-l border-r py-12">
        <div className="mb-12 mt-20">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
              SERVICE STORE
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Choose the ideal service for your project
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              A service catalog with clear scope and average delivery timelines.
              Perfect for turning an idea into a high-quality product.
            </p>
          </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-end gap-3">
                  <span className="px-2.5 py-1 bg-black text-white text-xs font-semibold rounded-full">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black">{service.title}</h3>
                  <p className="text-xs text-gray-700 leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5">
                    <p className="text-[11px] text-gray-500">Estimated price</p>
                    <p className="text-xs font-semibold text-black mt-1">
                      {service.estimatedPrice}
                    </p>
                  </div>
                  <div className="p-2.5">
                    <p className="text-[11px] text-gray-500">Delivery time</p>
                    <p className="text-xs font-semibold text-black mt-1">
                      {service.deliveryTime}
                    </p>
                  </div>
                  <div className="p-2.5">
                    <p className="text-[11px] text-gray-500">Rating</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        index < service.rating ? (
                          <PiStarFill
                            key={`${service.title}-star-${index}`}
                            size={12}
                            className="text-yellow-400"
                          />
                        ) : (
                          <PiStarBold
                            key={`${service.title}-star-${index}`}
                            size={12}
                            className="text-gray-300"
                          />
                        )
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium hover:cursor-pointer"
                >
                  Request Service
                  <PiArrowRightBold size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                NEED A CUSTOM PACK?
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-black mt-1">
                We can create a custom proposal for your context
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                If your scope does not fit the packages above, we can define
                a personalized plan with timeline and milestones.
              </p>
            </div>
            <a
              href="mailto:antoniovitafonseca@gmail.com?subject=Custom%20Service%20Proposal"
              className="inline-flex lg:justify-self-end items-center justify-center gap-2 px-5 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Request Custom Proposal
              <PiArrowRightBold size={16} />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[130vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="overflow-y-auto p-6">
                <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-2">
                          {selectedService.title}
                        </h2>
                        <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                          {selectedService.category}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <PiXBold size={24} />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-black mb-2">
                        About this service
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-xs text-gray-500">Estimated price</p>
                        <p className="text-sm font-semibold text-black mt-1">
                          {selectedService.estimatedPrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Delivery time</p>
                        <p className="text-sm font-semibold text-black mt-1">
                          {selectedService.deliveryTime}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Rating</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            index < selectedService.rating ? (
                              <PiStarFill
                                key={`${selectedService.title}-modal-star-${index}`}
                                size={14}
                                className="text-yellow-400"
                              />
                            ) : (
                              <PiStarBold
                                key={`${selectedService.title}-modal-star-${index}`}
                                size={14}
                                className="text-gray-300"
                              />
                            )
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-black mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.technologies.map((item) => (
                          <span
                            key={item}
                            className="text-xs text-gray-700 border border-gray-200 bg-gray-50 rounded-full px-2.5 py-1"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={`mailto:antoniovitafonseca@gmail.com?subject=Service%20Request%20-%20${encodeURIComponent(selectedService.title)}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        Continue Request
                        <PiArrowRightBold size={16} />
                      </a>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                      >
                        Close
                      </button>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
