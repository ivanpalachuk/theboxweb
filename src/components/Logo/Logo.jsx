import logo from "/images/LogoTYPO.png"


const Logo = () => {

    return (
        <div className="fixed top-[-1.4rem] right-0 z-10 p-2">
            <img src={logo}alt="Logo" className="w-28 h-auto" />
        </div>
    );
};

export default Logo;
