import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../Img/Core.png";
import Loginico from "../icons/login";
import LoginPopup from "./LoginPopup";

const links = [
  { link: "/", text: "Casa", id: "1" },
  { link: "/about", text: "Quien soy", id: "2" },
  { link: "/Cursos", text: "Cursos", id: "3" },
  { link: "/contact", text: "Contacto", id: "4" },
];

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [windowsDimension, setWindowsDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowsDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const togglePopup = () => setShowPopup(!showPopup);
  const handlePopupAction = (action) => {
    console.log("Acción seleccionada:", action);
    setShowPopup(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-white flex gap-2 font-semibold text-xl">
          <img src={logo} alt="Logo" className="w-[30px]" />
          <h2 className="font-semibold">C-Core</h2>
        </Link>

        {/* Links - Desktop */}
        {windowsDimension.innerWidth > 768 ? (
          <div className="flex gap-4">
            {links.map((l) => (
              <Link
                key={l.id}
                to={l.link}
                className="text-white text-lg font-semibold hover:bg-white hover:text-green-600 p-2 rounded transition duration-300"
                onClick={closeMenu}
              >
                {l.text}
              </Link>
            ))}
          </div>
        ) : (
          // Menú Hamburguesa - Móvil
          <div>
            {!isMenuOpen ? (
              <AiOutlineMenu
                cursor="pointer"
                size={24}
                color="#f2f2f2"
                onClick={() => setMenuOpen(true)}
              />
            ) : (
              <AiOutlineClose
                cursor="pointer"
                size={24}
                color="#f2f2f2"
                onClick={() => setMenuOpen(false)}
              />
            )}
          </div>
        )}

        {/* Botón de Login */}
        <div className="cursor-pointer" onClick={togglePopup}>
          <Loginico />
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && windowsDimension.innerWidth < 768 && (
        <div className="absolute top-full left-0 w-full bg-green-700 flex flex-col items-center py-4">
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.link}
              className="text-white text-lg font-semibold py-2"
              onClick={closeMenu}
            >
              {l.text}
            </Link>
          ))}
        </div>
      )}

      {/* Popup de Login */}
      {showPopup && <LoginPopup onClose={handlePopupAction} />}
    </nav>
  );
};

export default NavBar;
