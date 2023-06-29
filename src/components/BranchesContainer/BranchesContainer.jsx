import { Link } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';

const BranchesContainer = () => {
    return (
        <>
            <div
                className="max-w-[1400px] h-screen w-full m-auto relative text-center flex justify-center items-center"
                id="menu"
            >
                <div
                    style={{
                        backgroundImage: `url(/images/94cbfa7a-cdac-441e-9617-dc4a170bfc90-transformed.jpeg)`,
                    }}
                    className="w-full h-full bg-center bg-cover"
                >
                    <div className="flex justify-center items-center flex-col mt-32">
                        <img src="/images/LogoSIMBOL.png" className="w-[50%]" alt="Logo" />
                        <div className="text-[#FDDF3A] animate-bounce mt-5">
                            <BsChevronDoubleDown size={40} />
                            <BsChevronDoubleDown size={40} />
                        </div>
                        <Link to="/locales">
                            <button className="text-xl text-[#FDDF3A] mt-8 font-custom1 -rotate-12 border-2 border-current p-2 rounded-lg bg-black">
                                VISITA NUESTROS LOCALES
                            </button>
                        </Link>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default BranchesContainer;