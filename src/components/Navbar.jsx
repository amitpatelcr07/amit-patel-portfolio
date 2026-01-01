import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-6 sm:px-12 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-wide cursor-pointer">
          &lt;Amit Patel /&gt;
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => {
              const to = item.id === "home" ? "/" : `/${item.id}`;
              return (
                <li key={item.id}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `relative font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all ${
                        isActive
                          ? "text-blue-600 after:w-full"
                          : "text-gray-700 hover:text-blue-600 hover:after:w-full"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}

            {/* Theme Toggle (placeholder) */}
            <li>
              <button
                type="button"
                className="ml-2 text-xl hover:scale-110 transition"
                aria-label="Toggle theme"
              >
                🌞
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
