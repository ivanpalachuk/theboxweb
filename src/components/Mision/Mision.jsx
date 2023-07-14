import React, { useState } from 'react';
import { BsFillBox2Fill } from "react-icons/bs"

const Mision = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <div
            className="mision-container h-screen bg-[url(/images/20230127_210906.jpg)] bg-cover bg-center w-full m-auto relative text-center flex justify-center items-center [word-spacing:3px]"
            onClick={toggleTextVisibility}
        >
            {!isTextVisible && (
                <div className="icon-container flex flex-col items-center mt-48">
                    <BsFillBox2Fill size={75} className='text-theboxyellow animate-bounce relative text-center' />
                    <div className='mt-2 font-custom1 bold text-l text-theboxyellow bg-black rounded-xl uppercase border-2 border-current p-3 w-10/12 bg-opacity-75'>Abri la caja y conoce mas sobre nosotros</div>
                </div>
            )}

            {isTextVisible && (
                <p className="font-custom1 p-4 m-2 mt-16 text-theboxyellow border-solid border-current border-2 rounded-3xl bg-opacity-75 bg-black font-extrabold uppercase">
                    The Box Burger Culture, nació en Mar del Plata a Mediados del 2020 en plena pandemia, como un negocio 100% digital y donde comercializábamos el producto para que lo cocines en tu casa y lo disfrutes como si estuvieras en nuestra hamburguesería.
                    Hoy, es la referencia indiscutible en el mundo local de las Hamburguesas, brindando una experiencia gastronómica excepcional a nuestros clientes. Tenemos como objetivo satisfacer los paladares más exigentes y transmitir la pasión por la Cultura Hamburguesera en cada bocado. Nos enorgullece ofrecer un producto único y delicioso, elaborado con ingredientes frescos y de alta calidad.
                    Contamos con 3 puntos de venta en Mar del Plata, 2 locales y un Foodtruck, estamos comprometidos con la expansión a nivel Nacional, llevando nuestra cultura a nuevas ciudades en todo el país.
                    Buscamos establecer relaciones duraderas y de confianza con nuestros clientes, ofreciendo un servicio amigable y con mucha buena onda, cada vez que nos toca interactuar con ellos.
                    En The Box Burger Culture, nos enorgullece llevar la esencia de las hamburguesas a un nivel superior y aspiramos a convertirnos en una marca reconocida en todo el Territorio Argentino y del Mercosur.
                </p>
            )}
        </div>
    );
};

export default Mision;
