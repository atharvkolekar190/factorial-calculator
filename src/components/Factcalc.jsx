// src/components/FactorialCalculator.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const FactorialCalculator = () => {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [method, setMethod] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const factorialIterative = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    const factorialRecursive = (n) => (n <= 1 ? 1 : n * factorialRecursive(n - 1));

    const handleCalculate = () => {
        setError("");
        const num = parseInt(number);
        if (isNaN(num) || num < 0) {
            setError("Please enter a valid positive integer.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setResult({
                iterative: factorialIterative(num),
                recursive: factorialRecursive(num),
            });
            setMethod("Both Iterative and Recursive");
            setLoading(false);
        }, 800);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-800 to-black text-white p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 p-8 rounded-lg shadow-xl text-center w-full max-w-md hover:shadow-2xl shadow-slate-700 transition-shadow duration-900"
            >
                <h1 className="text-4xl font-bold mb-6 text-amber-400">Factorial Calculator</h1>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter a positive integer"
                    className="w-full p-3 text-lg border border-gray-600 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                />
                {error && <p className="text-red-400 mt-2">{error}</p>}

                <motion.button
                    onClick={handleCalculate}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-5 text-lg font-semibold tracking-wide hover:bg-blue-600 transition-all duration-300"
                >
                    {loading ? "Calculating..." : "Calculate"}
                </motion.button>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 p-5 bg-gray-800 rounded-lg shadow-md"
                    >
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">Results:</h2>
                        <p className="text-lg">🔹 Iterative: <span className="text-blue-300">{result.iterative}</span></p>
                        <p className="text-lg">🔹 Recursive: <span className="text-green-300">{result.recursive}</span></p>
                        <p className="text-md text-gray-400">Method Used: {method}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default FactorialCalculator;
