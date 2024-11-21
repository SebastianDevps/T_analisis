import { FC, useEffect } from "react";
import { Link, NavLink,  } from "react-router-dom";
import { toast } from "react-toastify";

const Header: FC = () => {

	useEffect(() => {
		toast.info('Bienvenido a Transportadora')
	}, [])

  return (
    <header className="flex items-center bg-slate-800/95 px-6 py-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <Link to="/">
        <div className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          {/* <FaBtc size={28} /> */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Transportadora
          </h1>
        </div>
      </Link>

      {/* Menu */}
      <nav className="ml-auto mr-10">
        <ul className="flex items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white font-medium" : "text-white/60"
                }`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register-vehicle"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white font-medium" : "text-white/60"
                }`
              }
            >
              Registar vehiculo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register-driver"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white font-medium" : "text-white/60"
                }`
              }
            >
              Registrar conductor
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
