"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiHouseSimpleBold, PiUserCircleBold, PiBookBookmarkBold, PiCertificateBold, PiMailboxBold, PiListBold, PiXBold, PiBookOpenBold} from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const NavBar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', icon: PiHouseSimpleBold, href: '/' },
        { name: 'About', icon: PiUserCircleBold, href: '/about' },
        { name: 'Experience', icon: PiCertificateBold, href: '/experience' },
        { name: 'Projects', icon: PiBookOpenBold, href: '/projects' },
    ];

    const isActiveRoute = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

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
                        <div className="flex items-center border border-gray-200 w-100 py-2 rounded-2xl justify-around">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = isActiveRoute(item.href);
                                
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <motion.div
                                            initial={false}
                                            animate={{ scale: isActive ? 1.1 : 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <Icon size={20} />
                                        </motion.div>
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.span
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: "auto" }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="text-sm font-medium overflow-hidden whitespace-nowrap"
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 border border-gray-100 rounded-lg -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
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