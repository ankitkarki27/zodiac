
import React from 'react'
import Image from "next/image"

const Page = () => {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 flex flex-col items-center justify-center text-center">

      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
        Zodiac Web Studio
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium mb-6 text-blue-600 dark:text-blue-400 tracking-wide uppercase">
        Modern Web Design & Development
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        We help brands, startups, and creators stand out online with beautiful, high-performance websites. From design to deployment, our team delivers digital experiences that convert and inspire.
      </p>

    </section>
  );
}

export default Page
