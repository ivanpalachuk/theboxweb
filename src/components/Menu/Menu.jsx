import Data from "/public/data/Data"
import { Link } from "react-router-dom"

const Menu = () => {

  return (
    <>

      {/* Fondo de la pagina   */}
      <div className="bg-theboxyellow">
        {/* Contenedor de titulo y grupo */}
        <div className="mx-auto max-w-2xl px-4 py-8 pb-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Titulo */}
          <h2 className="text-2xl font-bold text-center text-black font-custom1 border-b-2 border-current mt-12">NUESTRAS CREACIONES</h2>

          {/* Contenedor del grupo de productos */}
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 [perspective:1000px]">

            {Data.map((product, id) => (

              <div key={id} className="group relative">

                <div className="relative h-full w-full rounded-xl shadow-xl p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-black">
                  <img
                    src={product.url}
                    alt={product.imageAlt}
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-4 pb-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex flex-col justify-between">
                    <div className='font-custom1 text-theboxyellow text-xl uppercase mt-8 mb-4'>{product.text}</div>
                    <Link to="https://pedidos.theboxburgerculture.com.ar"><button className="text-theboxyellow font-custom1 uppercase text-m border-2 rounded-2xl p-2 border-current">Pedila aca y mira todos los ingredientes</button></Link>
                  </div>
                </div>


                <div className="mt-2 flex justify-center">
                  <div>
                    <h3 className="text-2xl text-black text-center font-custom1 uppercase font-extrabold">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>



            ))}

          </div>
        </div>
      </div >
    </>
  )
}
export default Menu