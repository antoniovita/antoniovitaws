"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiHouseSimpleBold, PiUserCircleBold, PiBasketBold, PiCertificateBold, PiListBold, PiXBold, PiBookOpenBold} from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const NavBar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', icon: PiHouseSimpleBold, href: '/' },
        { name: 'Projects', icon: PiBookOpenBold, href: '/projects' },
        { name: 'Services', icon: PiBasketBold, href: '/services' },
        { name: 'Experience', icon: PiCertificateBold, href: '/experience' },
        { name: 'About', icon: PiUserCircleBold, href: '/about' },
    ];

    const isActiveRoute = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* desktop */}
            <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 py-2">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* logo */}
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-black">
                                <Image src="/sign.png" width={230} height={100} alt="Home" />
                            </Link>
                        </div>

                        {/* menu */}
                        <div className="flex items-center gap-1 border border-gray-200 bg-white/90 backdrop-blur-sm p-1 rounded-2xl">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = isActiveRoute(item.href);
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors group"
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gray-100 border border-gray-200 rounded-xl"
                                                transition={{ type: "spring", stiffness: 360, damping: 32 }}
                                            />
                                        )}
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: isActive ? 1.08 : 1, y: isActive ? -0.5 : 0 }}
                                            transition={{ type: "spring", stiffness: 340, damping: 24 }}
                                            className="relative z-10"
                                        >
                                            <Icon size={18} className={isActive ? "text-black" : "text-gray-600 group-hover:text-black"} />
                                        </motion.div>
                                        <motion.span
                                            initial={false}
                                            animate={{
                                                width: isActive ? "auto" : 0,
                                                opacity: isActive ? 1 : 0,
                                                marginLeft: isActive ? 2 : 0,
                                            }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            className={`relative z-10 whitespace-nowrap ${
                                                isActive ? "text-black" : "text-gray-600"
                                            }`}
                                        >
                                            {item.name}
                                        </motion.span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>

            {/* mobile */}
            <nav className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
                <div className="flex items-center justify-between h-16 px-4">

                    {/* logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-lg font-bold text-black">
                            <Image src="/sign.png" width={180} height={100} alt="Home" />
                        </Link>
                    </div>

                    {/* hamburguer menu */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? (
                            <PiXBold size={28} />
                        ) : (
                            <PiListBold size={28} />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-white border-t border-gray-200"
                        >
                            <div className="py-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = isActiveRoute(item.href);
                                    
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`relative flex items-center gap-4 px-6 py-4 hover:bg-gray-100 transition-colors ${
                                                isActive ? 'bg-gray-50' : ''
                                            }`}
                                        >
                                            <Icon size={24} />
                                            <span className="text-base font-medium">{item.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeMobileTab"
                                                    className="absolute left-0 top-0 bottom-0 w-1 bg-black"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

        </>
    );
}

export default NavBar;
