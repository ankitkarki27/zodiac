import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 font-sans">
      <div className="mx-auto max-w-3xl px-6">
        <div className="backdrop-blur-xl bg-neutral/20 border border-neutral-400/20 rounded-2xl shadow-sm shadow-black/10 ">
          <div className="px-6 py-3 flex items-center justify-between">
            <Link
              href="/">
              <Image
                src="/vasuki_logo_icon.png"
                alt="Zodiac Logo"
                width={42}
                height={20}
              />
            </Link>

           
              <div className="flex items-center gap-1">
                <Link
                  href="/about"
                  className="relative px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
                transition-colors rounded-xl group
                 "
                >
                  <span className="text-sm font-semibold">About</span>
                </Link>

                <Link
                  href="/services"
                  className="relative px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
             transition-colors rounded-xl group"
                >
                  <span className="text-sm font-semibold">Services</span>
                </Link>

                <Link
                  href="/blogs"
                  className="relative px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900
                transition-colors rounded-xl group
                 "
                >
                  <span className="text-sm font-semibold">Blogs</span>
                </Link>
                {/* <button className="ml-2 px-4 py-2 text-sm font-medium bg-linear-to-r from-[#10118b] to-[#1e22aa] text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer">
                  Contact
                </button> */}
              </div>
            
          </div>

        </div>

      </div>



    </nav>
  );
}