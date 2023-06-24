import React from 'react'

const Menu = () => {
  const burgersURL = [
    { url: "/images/burgerPNG/AtlanticaMax.png", name: "Atlantica Max" },
    { url: "images/burgerPNG/BigBox.png", name: "Big Box" },
    { url: "images/burgerPNG/BigPapooza.png", name: "Big Papooza" },
    { url: "images/burgerPNG/BlueBurger.png", name: "BlueBurger" },
    { url: "images/burgerPNG/Brodas.png", name: "Brodas" },
    { url: "images/burgerPNG/tbt.png", name: "TBT" }
  ]


  return (
    <div className="max-w-[1400px] w-full m-auto text-yellow-400">
      <div className="bg-yellow-400">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-center text-black font-custom1 border-b-2 border-current">NUESTRAS CREACIONES</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {burgersURL.map((product, id) => (
              <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-black lg:aspect-none lg:h-80">
                  <img
                    src={product.url}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 transform group-hover:scale-150"
                  />
                </div>
                <div className="mt-4 flex justify-center">
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
      </div>
    </div>
  )
}

export default Menu