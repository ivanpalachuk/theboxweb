import { useState, useEffect } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";

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
            <div className={`fixed top-0 left-0 z-20 w-60 h-screen bg-black text-[#FDDF3A] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} overflow-hidden`}>
                <button className="absolute top-4 right-3 text-[#FDDF3A]" onClick={toggleMenu}>
                    <FaTimes size={24} />
                </button>
                <nav className="flex flex-col p-4 font-custom1 mt-5">
                    <a href="#inicio" className="py-2">Inicio</a>
                    <a href="#menu" className="py-2">Menú</a>
                    <a href="https://pedidos.theboxburgerculture.com.ar/" className="py-2">Pedi aca!</a>
                    <a href="#locales" className="py-2">Locales</a>
                    <a href="#franquicias" className="py-2">Franquicias</a>
                    <a href="#cultura" className="py-2">Cultura TheBOX</a>
                    <a href="#contacto" className="py-2">Contacto y Sugerencias</a>
                    <a href="#trabaja" className="py-2">Trabajá con nosotros!</a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
