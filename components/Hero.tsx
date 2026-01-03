
import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
        Modern Web Design Solution
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-6xl">
        We help brands, startups, and creators stand out online with beautiful, high performance websites. From design to deployment, our team delivers digital experiences that convert and inspire.
      </p>

    </section>
  );
}
export default Hero
