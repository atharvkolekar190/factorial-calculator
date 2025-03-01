// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl"
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-5xl font-bold mb-4 text-amber-300 drop-shadow-lg"
                >
                    About This Application
                </motion.h1>

                <p className="mb-4 text-lg text-gray-300">
                    The **Factorial Calculator** is a simple web app that computes factorials using **iterative** and **recursive** methods.
                </p>

                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-3xl font-semibold mb-2 text-orange-400"
                >
                    Features:
                </motion.h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                    <li>Compute factorials using both methods.</li>
                    <li>Interactive UI with real-time validation.</li>
                    <li>Responsive design with smooth animations.</li>
                </ul>

                <motion.h2
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-3xl font-semibold mb-2 text-orange-400"
                >
                    Technologies Used:
                </motion.h2>
                <ul className="list-disc list-inside mb-4 text-gray-300">
                    <li>🚀 **React.js** for building the UI.</li>
                    <li>🎨 **Tailwind CSS** for responsive design.</li>
                    <li>📌 **JavaScript** for factorial calculation logic.</li>
                </ul>

                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-3xl font-semibold mb-2 text-orange-400"
                >
                    Get Involved:
                </motion.h2>
                <p className="text-gray-300">
                    Have ideas to enhance this project? Open to **collaborations, improvements, and suggestions**!
                </p>

                {/* Button to GitHub or Contact */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6"
                >
                    <a
                        href="https://github.com/atharvkolekar190"
                        target="_blank"
                        
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-transform duration-300 hover:bg-orange-600"
                    >
                        Contribute on GitHub →
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
