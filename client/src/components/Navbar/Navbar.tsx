import { Link } from "react-router-dom";
import { useCartModal } from "../../contexts/CartModalContext";

interface NavbarProps {
  onAuthClick: () => void;
  onDrawerToggle?: () => void;
}

export default function Navbar({
  onAuthClick,
  onDrawerToggle,
}: NavbarProps) {
  const categories: readonly [string, string][] = [
    ["Bracelets", "bracelets"],
    ["Earrings", "earrings"],
    ["Necklaces", "necklaces"],
    ["Rings", "rings"],
    ["Watches", "watches"],
  ];

  const { toggleCart } = useCartModal();

  return (
    <header className="bg-gray-300 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 lg:py-4">
        {/* Left */}
        <div className="flex items-center">
          <button
            className="lg:hidden mr-2"
            onClick={() => onDrawerToggle?.()}
            aria-label="Open menu"
          >
            <img
              src="/assets/icon-hamburger.svg"
              alt=""
              className="h-6 w-6"
            />
          </button>

          <Link to="/" className="hidden lg:flex items-center">
            <img
              src="/assets/LuxaristLogo.png"
              alt="Luxarist Logo"
              className="h-14 cursor-pointer"
            />
          </Link>
        </div>

        {/* Center */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className="lg:hidden flex items-center">
            <img
              src="/assets/LuxaristLogo.png"
              alt="Luxarist Logo"
              className="h-14 cursor-pointer"
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              <li>
                <Link to="/" className="px-3 py-2 hover:bg-gray-100 rounded-md">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  Collections
                </Link>
              </li>

              <li className="relative group">
                <span className="flex items-center cursor-pointer px-3 py-2 hover:bg-gray-100 rounded-md">
                  Shop
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                </span>

                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {categories.map(([label, slug]) => (
                    <li key={slug}>
                      <Link
                        to={`/collections/${slug}`}
                        className="block px-4 py-2 hover:bg-gray-200 rounded-md"
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

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            aria-label="Toggle cart"
            className="relative flex items-center rounded-full hover:opacity-80"
          >
            <img src="/assets/icon-cart.svg" alt="" className="h-6 w-6" />
          </button>

          <button
            onClick={onAuthClick}
            aria-label="Open profile"
            className="rounded-full hover:opacity-80"
          >
            <img
              src="/assets/Profile.png"
              alt=""
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
}