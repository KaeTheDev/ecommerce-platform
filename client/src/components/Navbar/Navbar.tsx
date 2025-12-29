import { Link } from "react-router-dom";

interface NavbarProps {
    onAuthClick: () => void;
  }

  export default function Navbar({ onAuthClick }: NavbarProps) {

    return(
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
            <Link to="/">
            <img src="/assets/LuxaristLogo.png" alt="Luxarist Logo" className="h-15 cursor-pointer" />
            </Link>

            <button onClick={onAuthClick}
            className="rounded-full hover:opacity-80 transition-opacity"
            >
            <img src="/assets/Profile.png" alt="Profile" className="h-4 w-4" />
            </button>
        </header>
    )
}