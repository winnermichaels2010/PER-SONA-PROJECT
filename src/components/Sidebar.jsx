

import React from "react";
import { NavLink } from "react-router";
import { BsBrilliance } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

import {
  Dashboard,
  ShoppingCart,
  People,
  Settings,
  Logout,
} from "@mui/icons-material";

function Sidebar () {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLargeScreen = true

  return (
    
    <div className="bg-blue-900 text-white flex items-center justify-between px-6 py-4 p-20 sticky top-0  z-10">
      {/* Logo */}
      <div className="text-sm md:text-lg lg:text-2xl font-bold flex">
        <BsBrilliance />PER'SONA
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex items-center gap-2 text-sm md:text-lg lg:text-xl ">
          <li>
            <NavLink
              to="/"
              
               className={({isActive}) => isActive ? "flex items-center gap-2 hover:text-purple-100 transition bg-purple-500 p-0.5 rounded " : "flex items-center gap-2 hover:text-gray-300 transition"}
              
            >
              <span className="hidden lg:inline md:inline"><Dashboard /></span>Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/About"
              className={({isActive}) => isActive ? "flex items-center gap-2 hover:text-purple-100 transition bg-purple-500 p-0.5 rounded " : "flex items-center gap-2 hover:text-gray-300 transition"}
            >
              About Me
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({isActive}) => isActive ? "flex items-center gap-2 hover:text-purple-100 transition bg-purple-500 p-0.5 rounded " : "flex items-center gap-2 hover:text-gray-300 transition"}
            >
              <span className="hidden lg:inline md:inline"><FaEnvelope /></span>Contact Me
            </NavLink>
          </li>

          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

// sk-oN2vJxb8rJjQIhny70QUQ13jEiyLX7iRZgejcNOevPRXJLPA8FB0PBN6EDOt3wc7