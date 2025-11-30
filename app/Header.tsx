import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const styleLink =
    "text-slate-700 hover:text-blue-600 font-medium tracking-wide cursor-pointer transition-all duration-200 relative group";

  return (
    <div className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/icons/logo.png"
                height={45}
                width={45}
                alt="Logo"
                className="rounded-full ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-200"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={styleLink}>
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link href="/colleges" className={styleLink}>
              <span>Universities</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link href="/resources" className={styleLink}>
              <span>Resources</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/colleges"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
