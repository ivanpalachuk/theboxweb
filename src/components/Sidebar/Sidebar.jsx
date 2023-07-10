import { useState, useEffect } from "react";
import { FaHamburger, FaTimes, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserPanel from "../UserPanel/UserPanel";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

    const { user } = useAuth()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
        <div className="fixed top-4 left-3 z-10 w-12 h-12 flex items-center justify-center bg-black text-theboxyellow cursor-pointer rounded-2xl"
            onClick={toggleMenu}
        >
            {isOpen ? (
                <FaTimes size={24} />
            ) : (
                <FaHamburger size={24} />
            )}
            <div className={`fixed top-0 left-0 z-20 w-60 h-screen bg-black text-theboxyellow text-lg transform rounded-r-3xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} overflow-hidden flex flex-col justify-between`}>
                <button className="absolute top-4 right-3 text-theboxyellow" onClick={toggleMenu}>
                    <FaTimes size={24} />
                </button>

                <nav className="flex flex-col p-4 font-custom1 mt-5">
                    <Link to="/" className="py-2" onClick={scrollToTop}>Inicio</Link>
                    <Link to="/menu" className="py-2" onClick={scrollToTop}>Menú</Link>
                    <Link to="https://pedidos.theboxburgerculture.com.ar/" className="py-2">Pedí por acá!</Link>
                    <Link to="/locales" className="py-2" onClick={scrollToTop}>Locales</Link>
                    <Link to="/cultura" className="py-2" onClick={scrollToTop}>Cultura TheBOX</Link>
                    <Link to="/franquicias" className="py-2" onClick={scrollToTop}>Franquicias</Link>
                    <Link to="/trabajo" className="py-2" onClick={scrollToTop}>Trabajá con nosotros!</Link>
                    {!user && <Link to="/registro" className="py-2" onClick={scrollToTop}>Registrate</Link>}
                </nav>

                <UserPanel />

                <div className="bg-theboxyellow h-px mb-[12rem]">

                    <div className="text-center p-1 font-custom1">
                        <Link to="https://www.instagram.com/theboxburgerculture/" className="flex justify-between">
                            Seguinos en instagram!
                            <FaInstagram size={25} />
                        </Link>
                    </div>
                    <p className="text-center text-xs text-gray-500 sm:text-left font-custom1 mt-5">
                        Copyright & copy; 2023. Todos los derechos reservados
                    </p>
                </div> {/* Línea de color amarillo */}
            </div>
        </div >
    );
};

export default Sidebar;
