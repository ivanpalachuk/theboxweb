import { useState, useEffect } from "react";
import { FaHamburger, FaTimes, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <div className="fixed top-4 left-3 z-10 w-12 h-12 flex items-center justify-center bg-black text-[#FDDF3A] cursor-pointer rounded-2xl"
            onClick={toggleMenu}
        >
            {isOpen ? (
                <FaTimes size={24} />
            ) : (
                <FaHamburger size={24} />
            )}
            <div className={`fixed top-0 left-0 z-20 w-60 h-screen bg-black text-[#FDDF3A] transform rounded-r-3xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} overflow-hidden flex flex-col justify-between`}>
                <button className="absolute top-4 right-3 text-[#FDDF3A]" onClick={toggleMenu}>
                    <FaTimes size={24} />
                </button>
                <nav className="flex flex-col p-4 font-custom1 mt-5">
                    <Link to={"/"} className="py-2">Inicio</Link>
                    <Link to="/menu" className="py-2">Menú</Link>
                    <Link to="https://pedidos.theboxburgerculture.com.ar/" className="py-2">Pedí por acá!</Link>
                    <Link to="/locales" className="py-2">Locales</Link>
                    <Link to="#cultura" className="py-2">Cultura TheBOX</Link>
                    <Link to="/franquicias" className="py-2">Franquicias</Link>
                    <Link to="#contacto" className="py-2">Contacto y Sugerencias</Link>
                    <Link to="#trabaja" className="py-2">Trabajá con nosotros!</Link>
                </nav>
                <div className="bg-[#FDDF3A] h-px mb-[7rem]">

                    <div className="flex text-center p-3 font-custom1">
                        Seguinos en instagram!
                        <Link to="https://www.instagram.com/theboxburgerculture/" className="ml-5">
                            <FaInstagram size={25} />
                        </Link>
                    </div>

                    <p className="text-center text-xs text-gray-500 sm:text-left font-custom1 mt-5">
                        Copyright &copy; 2023. Todos los derechos reservados
                    </p>
                </div> {/* Línea de color amarillo */}
            </div>
        </div>
    );
};

export default Sidebar;
