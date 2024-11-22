"use client";
import { motion } from 'framer-motion';
import React from 'react';
import images from '@/constants/images';

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed flex-col flex inset-0 items-center justify-center bg-cyan-100 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.img
        src={images.AmuzeLogo.src}
        alt="Amuze Logo"
        className="w-24 h-24"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate:360 }}
        transition={{ ease: 'linear', stiffness: 200, duration: 2, x: {duration : 1} }}
      />
      <motion.h2
        className="text-2xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Welcome Amuze Admin Dashboard
      </motion.h2>
    </motion.div>
  );
}
