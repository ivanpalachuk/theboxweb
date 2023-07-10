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
                <p className="font-custom1 text-sm p-4 m-2 mt-16 text-theboxyellow border-solid border-current border-2 rounded-3xl bg-opacity-75 bg-black font-extrabold uppercase ">
                    The Box Burger Culture, fundada en 2019 en Mar del Plata, es la referencia indiscutible en el mundo local de las hamburguesas, brindando una experiencia gastronómica excepcional a nuestros clientes. Nuestro objetivo es satisfacer los paladares más exigentes y transmitir la pasión por la cultura hamburguesera en cada bocado. Nos enorgullece ofrecer hamburguesas únicas y deliciosas, elaboradas con ingredientes frescos y de alta calidad. Con tres exitosas sucursales en la actualidad, estamos comprometidos con la expansión a nivel nacional, llevando nuestra propuesta culinaria a nuevas ciudades y comunidades en todo el país. Buscamos establecer relaciones duraderas con nuestros clientes, ofreciendo un servicio amigable y un ambiente acogedor en cada una de nuestras ubicaciones. En The Box Burger Culture, nos enorgullece llevar la esencia de las hamburguesas a un nivel superior y aspiramos a convertirnos en una marca reconocida en todo el territorio argentino.
                </p>
            )}
        </div>
    );
};

export default Mision;
