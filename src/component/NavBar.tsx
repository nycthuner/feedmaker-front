import styled from "styled-components";
import '../assets/css/navbar.css'
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
type NavbarType = {
  className?: string;
};

const Navbar = ({ className }: NavbarType) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { logout } = useAuth();
    // fecha o menu se clicar fora
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setMenuOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

      const handleLogout = () => {
        logout()
        navigate("/")
      };
  return (
    <header className={className} id="navbar">
      <h1 className="navbar-title" onClick={() => navigate("/")}>
        FEEDMAKER
      </h1>

      <div className="navbar-actions" ref={menuRef}>
        <div
          className="navbar-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
            />
          </svg>
        </div>

        {menuOpen && (
          <div className="navbar-dropdown">
            <button onClick={handleLogout}>Sair</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default styled(Navbar)`
`;
