
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
// import ProjectCard from "@/components/ProjectCard";
// import SkillCard from "@/components/SkillCard";
// import ContactForm from "@/components/ContactForm";

export default function Home() {

  return (
    
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-2">
        <Hero />

        <section id="projects" className="w-full max-w-2xl my-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6">
            <ProjectCard />
            <div className="p-6 border rounded-lg text-center text-gray-500 dark:text-gray-400">Projects coming soon!</div>
          </div>
        </section>

        {/* <section id="skills" className="w-full max-w-2xl my-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            
            <span className="px-4 py-2 bg-gray-100 rounded text-gray-500 dark:bg-gray-800 dark:text-gray-400">Skills coming soon!</span>
          </div>
        </section> */}

        {/* Contact Section */}
          {/* <section id="contact" className="w-full max-w-2xl my-16">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
          
            <div className="p-6 border rounded-lg text-center text-gray-500 dark:text-gray-400">Contact form coming soon! Email: <a href="mailto:ankit@example.com" className="text-blue-600 underline">ankit@example.com</a></div>
          </section> */}
      </main>
    </div>
  );
}
