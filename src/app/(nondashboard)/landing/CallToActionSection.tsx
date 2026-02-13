"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="relative w-full h-125 flex items-center justify-center overflow-hidden">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        priority
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-20 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Find Your Dream Rental Property
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          Discover a wide range of rental properties in your desired location.
        </p>
        <div className="flex justify-center gap-5 mt-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block text-black bg-white rounded-lg px-6 py-3 font-semibold hover:bg-gray-500 hover:text-white"  
          >
            Search
          </button>
          <Link href="/signup"
            className="inline-block text-white bg-red-400 rounded-lg px-6 py-3 font-semibold hover:bg-red-500"
            scroll={false}
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
