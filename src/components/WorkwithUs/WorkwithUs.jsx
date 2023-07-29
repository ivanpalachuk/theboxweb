
import { BsChevronDoubleDown } from "react-icons/bs"
import { FiMail } from "react-icons/fi"

const WorkwithUs = () => {

    const email = "ivan.palachuk@outlook.com.ar";
    const subject = encodeURIComponent("Busqueda Laboral");
    const body = "Buenas! Estoy buscando trabajo, adjunto un CV"
    const bodyMessage = "Si estas en la busqueda de trabajo, y tenes ganas de ser parte de nuestro equipo, hacenos saber de vos"

    return (
        <div className="trabajo-container bg-[url(/images/20230127_222053.jpg)] bg-cover bg-center w-full m-auto h-screen relative text-center flex justify-center items-center [word-spacing:3px]">
            <div className="flex justify-center items-center flex-col mt-18 bg-[url(/images/paperBackground2.jpeg)] rounded-xl border-2 border-theboxyellow w-[80%] max-w-xl">
                <p className='text-black w-[50%] font-custom1 mt-5 uppercase text-2xl font-bold'>{bodyMessage}</p>
                <div className="text-black animate-bounce mt-5">
                    <BsChevronDoubleDown size={40} />
                </div>
                <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="text-black p-4">
                    <FiMail size={75} />
                </a>
            </div>

        </div>
    )
}

export default WorkwithUs