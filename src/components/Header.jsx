// src/components/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icon library for menu

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Calculator", path: "/calculator" }
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-black/50 backdrop-blur-md p-4 sticky top-0 shadow-lg z-50 border-b border-gray-700"
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold text-orange-500">
                    Factorial
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <NavLink
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `relative text-orange-500 font-bold text-lg transition-all duration-300 
                                    ${isActive ? "text-orange-300" : "hover:text-orange-300"} hover:drop-shadow-lg`
                                }
                            >
                                {link.name}
                                <motion.span
                                    className="absolute left-0 bottom-0 h-1 w-full bg-orange-300 scale-x-0 origin-left transition-transform duration-300"
                                    whileHover={{ scaleX: 1 }}
                                />
                            </NavLink>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-orange-500 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg p-4 shadow-lg"
                    >
                        <ul className="flex flex-col items-center space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `text-orange-500 text-xl font-semibold transition-all duration-300
                                            ${isActive ? "text-orange-300" : "hover:text-orange-300"}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Header;
