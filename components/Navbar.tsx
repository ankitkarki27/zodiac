import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 font-sans">
      <div className="mx-auto max-w-4xl px-6">
        <div className="backdrop-blur-xl bg-neutral/20 border border-neutral-400/20 rounded-2xl shadow-sm shadow-black/10 ">
          <div className="px-6 py-3 flex items-center justify-between">
            <Link
              href="/">
              <Image
                src="/logo2.png"
                alt="Zodiac Logo"
                width={120}
                height={40}
              />
            </Link>

            <div className="flex items-center gap-1">
              <Link
                href="/projects"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
                transition-colors rounded-xl hover-bg-white/20 group
                 "
              >
                <span>Projects</span>

              </Link>

              <Link
                href="/works"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
                transition-colors rounded-xl hover-bg-white/20 group
                 "
              >
                <span>Works</span>
              </Link>

              <Link
                href="/blogs"
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
                transition-colors rounded-xl hover-bg-white/20 group
                 "
              >
                <span>Blogs</span>
              </Link>
              <button className="ml-2 px-4 py-2 text-sm font-medium bg-linear-to-r from-[#10118b] to-[#1e22aa] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer">
                Contact
              </button>
            </div>
          </div>

        </div>

      </div>



    </nav>
  );
}