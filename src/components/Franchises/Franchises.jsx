import { BsChevronDoubleDown } from 'react-icons/bs';
import { FiMail } from "react-icons/fi"

const BranchesContainer = () => {

    const email = "ivan.palachuk@outlook.com.ar";
    const subject = encodeURIComponent("Sobre sus franquicias");
    const body = "Buenas! Me gustaria que me informen sobre sus franquicias, envio este mail como primer contacto, gracias!"
    const bodyMessage = "¿Estás interesado en fomentar la cultura THE BOX? ¡Escribínos un correo y vamos a hacer lo posible para que tu ciudad pueda disfrutar de las mejores hamburguesas!"


    return (
        <>
            <div
                className="max-w-[1400px] h-screen w-full m-auto relative text-center flex justify-center items-center [word-spacing:3px]">
                <div
                    style={{
                        backgroundImage: `url(/images/depositphotos_68903121-stock-photo-black-brick-wall-for-background.jpg)`,
                    }}
                    className="w-full h-full bg-center bg-cover"
                >
                    <div className="flex justify-center items-center flex-col mt-32">
                        <img src="/images/ORIGINAL.png" className="w-[50%]" alt="Logo" />
                        <p className='text-white w-[75%] font-custom1 mt-5 uppercase'>{bodyMessage}</p>
                        <div className="text-theboxyellow animate-bounce mt-5">
                            <BsChevronDoubleDown size={40} />
                        </div>
                        <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="text-white">
                            <FiMail size={100} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BranchesContainer;