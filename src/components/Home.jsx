// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
                    Welcome to the Factorial Calculator
                </motion.h1>

                <p className="mb-4 text-lg text-gray-300">
                    This application allows you to calculate the factorial of a number using both **iterative** and **recursive** methods.
                </p>

                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-3xl font-semibold mb-2 text-orange-400"
                >
                    How to Use:
                </motion.h2>
                <motion.ol
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="list-decimal list-inside mb-4 text-gray-300"
                >
                    <li>Navigate to the Calculator page.</li>
                    <li>Enter a positive integer in the input field.</li>
                    <li>Click the "Calculate Factorial" button.</li>
                    <li>View the results for both iterative and recursive calculations.</li>
                </motion.ol>

                <motion.h2
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-3xl font-semibold mb-2 text-orange-400"
                >
                    Why Factorials?
                </motion.h2>
                <p className="text-gray-300">
                    Factorials play a crucial role in **mathematics, computer science, and statistics**, especially in **combinations, permutations, and probability calculations**.
                </p>

                {/* Button to Calculator Page */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6"
                >
                    <Link
                        to="/calculator"
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-transform duration-300 hover:bg-orange-600"
                    >
                        Try the Calculator →
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
