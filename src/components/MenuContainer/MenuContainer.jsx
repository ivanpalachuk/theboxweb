import { Link } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';

const MenuContainer = () => {
  return (
    <>
      <div
        className="max-w-[1800px] h-screen w-full m-auto relative text-center flex justify-center items-center xl:min-h-full"
        id="menu"
      >
        <div
          style={{
            backgroundImage: `url(/images/251235930_4953569584675974_4731475901669594562_n.jpg)`,
          }}
          className="w-full h-full bg-center bg-cover"
        >
          <div className="flex justify-center items-center flex-col mt-32">
            <img src="/images/LogoSIMBOL.png" className="w-44 xl:w-1/4" alt="Logo" />
            <div className="text-theboxyellow animate-bounce mt-5">
              <BsChevronDoubleDown size={40} />
            </div>
            <Link to="/menu">
              <button className="text-xl text-theboxyellow mt-8 font-custom1 -rotate-12 border-2 border-current p-2 rounded-lg">
                CONOCE EL MENU
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
