import { Link } from "react-router-dom"

Link

const NotFound = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-theboxyellow">
            <h1 className="text-9xl font-extrabold text-black tracking-widest font-custom1">404</h1>
            <div className="bg-yellow-600 px-2 text-sm rounded rotate-12 absolute">
                Ooops, no encontramos la pagina
            </div>
            <button className="mt-5">
                <Link to="/"
                    className="relative inline-block text-sm font-medium text-theboxyellow group active:text-black focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-yellow-600 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-black border border-current font-custom1 upper">
                        Regresar al inicio
                    </span>
                </Link>
            </button>
        </main>
    )
}

export default NotFound