import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr] items-center gap-6">
        {/* LOGO BOX (SMALL) */}
        <div className="px-4 py-2  rounded-md justify-self-start">
          <h1 className="text-lg font-bold whitespace-nowrap">
            <span className="text-blue-600">Amit Portfolio</span>
          </h1>
        </div>

        {/* NAVIGATION BOX (LARGE) */}
        <nav className="Zrounded-md">
          <ul className="grid grid-cols-5 place-items-center py-2 list-none">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="px-3 py-1 text-gray-700 hover:text-blue-600 font-medium no-underline"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
