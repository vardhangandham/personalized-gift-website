'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialGreeting({ onContinue }) {
    const [showBreathMessage, setShowBreathMessage] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const name = 'Sweetie'; // You can change this name to whatever you want

    useEffect(() => {
        // Show the breath message after 2 seconds
        setTimeout(() => {
            setShowBreathMessage(true);
            // Show the button after another 1 second
            setTimeout(() => setShowButton(true), 1000);
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-purple-200 p-4">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
                    >
                        Hi {name} ❤️
                    </motion.div>
                    
                    {showBreathMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-2xl md:text-3xl text-purple-700 mb-8"
                        >
                            Take a deep breath...
                        </motion.div>
                    )}

                    {showButton && (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg shadow-btn hover:bg-pink-600 transition-colors duration-300"
                            onClick={onContinue}
                        >
                            Continue
                        </motion.button>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
