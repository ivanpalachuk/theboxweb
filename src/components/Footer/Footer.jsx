import { Link } from "react-router-dom"
import { BiSolidHeart } from "react-icons/bi"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        < footer className="bg-black font-custom1" >
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img
                            className="h-24"
                            src="/images/ORIGINAL.png"
                        />
                    </div>
                    <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0 font-custom1">
                        Haciendote parte de la cultura hamburguesera en cada caja
                    </p>
                </div>


                <div className="mt-4 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
                    <div className="text-gray-500 text-center uppercase ">
                        <p>Nos acompañan para brindar la mejor calidad</p>
                        <div className="partners-logos flex p-2 justify-between">
                            <img src="images/pngwing.com.png" className="w-24"></img>
                            <img src="images/UAildOUQCSKKm6w7gZva_7I83P2IBZ53bwUG9.jpg" className="w-24"></img>
                            <img src="images/6419db159690241.63a37fa0f1b40.jpg" className="w-24"></img>
                        </div>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-xl font-bold text-gray-500 uppercase">Sobre Nosotros</p>

                        <ul className="mt-4 space-y-2 text-lg text-gray-700 uppercase">
                            <li>
                                <Link to="/cultura" className="text-gray-700 transition hover:text-gray-700/75" onClick={scrollToTop}>Nuestra cultura</Link>
                            </li>
                            <li>
                                <Link to="/locales" className="text-gray-700 transition hover:text-gray-700/75" onClick={scrollToTop}> Nuestras sucursales</Link>

                            </li>
                            <li>
                                <Link to="/trabajo" className="text-gray-700 transition hover:text-gray-700/75" onClick={scrollToTop}> Ofertas Laborales</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-xl font-bold text-gray-500 uppercase">Productos</p>

                        <ul className="mt-4 space-y-2 text-lg text-gray-700 uppercase">
                            <li>
                                <Link to="https://drive.google.com/file/d/1IqtugZFTnDlgBDVUoXrJ8Cv_JxUczkZQ/view" className="text-gray-700 transition hover:text-gray-700/75">Menu</Link>
                            </li>

                            <li>
                                <Link to="/menu" className="text-gray-700 transition hover:text-gray-700/75" onClick={scrollToTop}>Hamburguesas</Link>
                            </li>

                            <li>
                                <Link to="https://pedidos.theboxburgerculture.com.ar/" className="text-gray-700 transition hover:text-gray-700/75">APP de pedidos</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-xl font-bold text-gray-500 uppercase">Franquicias</p>

                        <ul className="mt-4 space-y-2 text-lg text-gray-700 uppercase">
                            <li>
                                <Link to="/franquicias" className="text-gray-700 transition hover:text-gray-700/75" onClick={scrollToTop}>Escribinos para saber mas</Link>
                            </li>
                        </ul>
                    </div>

                    <p className="text-center text-sm text-gray-500 sm:text-left flex justify-center">
                        2023 - Made with <BiSolidHeart style={{ color: "#cb1515", margin: "1px" }} />
                        by <a href="mailto:ivan.palachuk@outlook.com" target="_blank" rel="noopener noreferrer">Zarseven Soft</a>
                    </p>

                </div>
            </div>
        </footer >
    )
}

export default Footer