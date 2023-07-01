const Menu = () => {
  const burgersURL = [
    { url: "/images/burgerPNG/AtlanticaMax.png", name: "Atlantica Max", text: "lorem ipsum" },
    { url: "images/burgerPNG/BigBox.png", name: "Big Box" },
    { url: "images/burgerPNG/BigPapooza.png", name: "Big Papooza" },
    { url: "images/burgerPNG/BlueBurger.png", name: "BlueBurger" },
    { url: "images/burgerPNG/Brodas.png", name: "Brodas" },
    { url: "images/burgerPNG/tbt.png", name: "TBT" }
  ]


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

            {burgersURL.map((product, id) => (

              <div key={id} className="group relative">

                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-black">
                  <img
                    src={product.url}
                    alt={product.imageAlt}
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  />
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className='flex justify-center font-custom1 text-theboxyellow text-xl uppercase p-8'>{product.text}</div>
                  </div>
                </div>


                <div className="mt-2 flex justify-center">
                  <div>
                    <h3 className="text-2xl text-black text-center font-custom1">
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