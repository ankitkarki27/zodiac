import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-28 md:pt-24 md:pb-36 text-center overflow-hidden">
      
      {/* Badge with animation */}
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">

        <span className="text-sm font-medium text-gray-700">
          Vasuki Web Studio
        </span>
        <div className="w-1 h-1 rounded-full bg-indigo-600" />
        <span className="text-sm font-medium text-indigo-600 animate-pulse">
          Available for new projects
        </span>
      </div>

      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-8">
        <span className="block text-gray-900">
          Thoughtful web design
        </span>
        <span className="relative">
          <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-[#10118b] via-[#4f46e5] to-[#9333ea]">
            and reliable development
          </span>
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        We help brands, startups, and creators build{" "}
        <span className="font-semibold text-gray-800">clean</span>,{" "}
        <span className="font-semibold text-gray-800">fast</span>, and{" "}
        <span className="font-semibold text-gray-800">dependable</span>{" "}
        websites. From design to deployment, we focus on clarity, usability, and
        long term value.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <Link
          href="/services"
          className="group relative px-8 py-4 rounded-xl text-base font-semibold text-white bg-linear-to-r from-[#10118b] to-[#1e22aa] hover:from-[#1e22aa] hover:to-[#10118b] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <span className="flex items-center justify-center gap-2">
            View Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-colors" />
        </Link>

        <Link
          href="/projects"
          className="group px-8 py-4 rounded-xl text-base font-semibold text-gray-800 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="flex items-center justify-center gap-2">
            View Our Work
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </span>
        </Link>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">

        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-indigo-400 rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400 rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-indigo-400 rounded-br-lg" />

        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl group">
          <Image
            src="/hero-preview.png"
            alt="Vasuki Web Studio work preview showing modern website design"
            width={1400}
            height={700}
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-sm font-medium text-gray-700">
              Premium Web Solutions
            </span>
          </div>
        </div>
        <div className="absolute -right-6 top-1/4 hidden lg:block">
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-linear-to-br from-indigo-500/10 to-purple-500/10 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-500/10 to-cyan-500/10 animate-spin-slow-reverse" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust badge */}
      <div className="mt-16">
        <p className="text-sm text-gray-500 mb-4">Trusted by innovative teams worldwide</p>
        <div className="flex items-center justify-center gap-8 opacity-60">
          {["TechCorp", "StartupHub", "InnovateCo", "DigitalPlus"].map((company, idx) => (
            <div key={idx} className="text-lg font-semibold text-gray-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;