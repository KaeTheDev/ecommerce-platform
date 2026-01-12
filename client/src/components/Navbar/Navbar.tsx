import { Link } from "react-router-dom";

interface NavbarProps {
  onAuthClick: () => void;
  onDrawerToggle?: () => void;  // Controls shared unified drawer
}

export default function Navbar({ onAuthClick, onDrawerToggle }: NavbarProps) {

  const categories = [
    ["Bracelets", "bracelets"],
    ["Earrings", "earrings"],
    ["Necklaces", "necklaces"],
    ["Rings", "rings"],
    ["Watches", "watches"],
  ];

  return (
    <header className="bg-gray-300 shadow-md">
      {/* Main bar */}
      <div className="flex items-center justify-between px-6 py-3 lg:py-4">
        {/* Left: Logo on DESKTOP, hamburger on MOBILE */}
        <div className="flex items-center">
          {/* Hamburger (mobile only) - controls SHARED drawer */}
          <button
            className="lg:hidden mr-2"
            onClick={onDrawerToggle}  // uses shared drawer toggle
          >
            <img
              src="/assets/icon-hamburger.svg"
              alt="Menu"
              className="h-6 w-6"
            />
          </button>

          {/* Logo (desktop only, stays on the left) */}
          <Link to="/" className="hidden lg:flex items-center">
            <img
              src="/assets/LuxaristLogo.png"
              alt="Luxarist Logo"
              className="h-15 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          {/* Mobile centered logo */}
          <Link to="/" className="lg:hidden flex items-center">
            <img
              src="/assets/LuxaristLogo.png"
              alt="Luxarist Logo"
              className="h-15 cursor-pointer"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  to="/"
                  className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Collections
                </Link>
              </li>

              {/* Shop dropdown */}
              <li className="relative group">
                <span className="flex items-center cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md transition-colors">
                  Shop
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {categories.map(([label, slug]) => (
                    <li key={slug}>
                      <Link
                        to={`/collections/${slug}`}
                        className="block px-4 py-2 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: profile (always visible) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onAuthClick}
            className="rounded-full hover:opacity-80 transition-opacity"
          >
            <img src="/assets/Profile.png" alt="Profile" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}