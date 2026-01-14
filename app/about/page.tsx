import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      {/* Header */}
      <div className="text-center mb-20">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-neutral-100 text-gray-900">
          About Vasuki
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          A small studio focused on
          <br className="hidden sm:block" />
          quality web work
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Vasuki Web Studio is built around one simple idea: create websites that
          are clear, reliable, and easy to use. We work closely with clients to
          understand their goals and turn them into well crafted digital
          products.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How we work
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 justify-between">
            We believe good design starts with listening. Every project begins
            with understanding the problem, not rushing to solutions. From
            layout and performance to accessibility and maintenance, we focus
            on details that matter long after launch.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are a startup, a growing business, or an individual
            creator, our approach stays the same: honest communication, clean
            design, and dependable code.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            <Image
              src="/hero-preview.png"
              alt="Vasuki Web Studio process"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
