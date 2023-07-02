import React, { useState } from "react";
import Data from "/public/data/Data";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

const Menu = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleClick = (id) => {
    const updatedFlippedCards = [...flippedCards];
    if (updatedFlippedCards.includes(id)) {
      updatedFlippedCards.splice(updatedFlippedCards.indexOf(id), 1);
    } else {
      updatedFlippedCards.push(id);
    }
    setFlippedCards(updatedFlippedCards);
  };

  const frontCardStyles = {
    // Estilos personalizados para la tarjeta frontal
    backfaceVisibility: "visible",
    zIndex: "0"
  };

  return (
    <>
      {/* Fondo de la pagina */}
      <div className="bg-gradient-to-b from-theboxyellow via-yellow-600 to-theboxyellow">
        {/* Contenedor de titulo y grupo */}
        <div className="mx-auto max-w-2xl px-4 py-8 pb-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Titulo */}
          <h2 className="text-3xl font-extrabold text-center text-black font-custom1 border-b-2 border-current mt-12">
            NUESTRAS CREACIONES
          </h2>

          {/* Contenedor del grupo de productos */}
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 [perspective:1000px]">
            {Data.map((product, id) => (

              <div key={id} className="group relative">

                <ReactCardFlip
                  isFlipped={flippedCards.includes(id)}
                  flipDirection="horizontal"
                  flipSpeedBackToFront={1}
                  flipSpeedFrontToBack={1}
                  cardStyles={{ front: frontCardStyles }}
                >
                  <div onClick={() => handleClick(id)} className="relative h-[400px] w-[400px] rounded-xl shadow-xl p-4 bg-black ">

                    <img
                      src={product.url}
                      alt={product.imageAlt}
                      className="h-full w-full rounded-xl object-cover"
                    />

                  </div>

                  <div onClick={() => handleClick(id)} className="relative h-[400px] w-[400px] rounded-xl bg-black/80 px-4 pb-4 text-center flex flex-col justify-between">


                    <div className="font-custom1 text-theboxyellow text-lg uppercase mt-8 mb-4 tracking-widest font-bold">
                      {product.text}
                    </div>

                    <Link to="https://pedidos.theboxburgerculture.com.ar">
                      <button className="text-theboxyellow font-custom1 uppercase text-m border-2 rounded-2xl p-2 border-current">
                        Pedila aca y mira todos los ingredientes
                      </button>
                    </Link>

                  </div>
                </ReactCardFlip>

                <div className="mt-2 flex justify-center"></div>
                <div>
                  <h3 className="text-2xl text-black text-center font-custom1 uppercase font-black">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  );
};

export default Menu;
