
import { BsChevronDoubleDown } from "react-icons/bs"
import { FiMail } from "react-icons/fi"

const WorkwithUs = () => {

    const email = "ivan.palachuk@outlook.com.ar";
    const subject = encodeURIComponent("Busqueda Laboral");
    const body = "Buenas! Estoy buscando trabajo, adjunto un CV"
    const bodyMessage = "Si estas en la busqueda de trabajo, y tenes ganas de ser parte de nuestro equipo, hacenos saber de vos"

    return (
        <div className="trabajo-container bg-[url(/images/20230127_222053.jpg)] bg-cover bg-center w-full m-auto h-screen relative text-center flex justify-center items-center">
            <div className="flex justify-center items-center flex-col mt-18 bg-black bg-opacity-75 rounded-xl border-2 border-theboxyellow w-[75%]">
                <p className='text-theboxyellow w-[75%] font-custom1 mt-5 uppercase'>{bodyMessage}</p>
                <div className="text-[#FDDF3A] animate-bounce mt-5">
                    <BsChevronDoubleDown size={40} />
                </div>
                <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="text-theboxyellow">
                    <FiMail size={75} />
                </a>
            </div>

        </div>
    )
}

export default WorkwithUs