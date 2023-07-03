import logo from "/images/LogoTYPO.png"
import { Link } from "react-router-dom";


const Logo = () => {

    return (
        <Link to={"/#inicio"}>
            <div className="fixed top-[-1.4rem] right-0 z-10 p-2">
                <img src={logo} alt="Logo" className="w-28 h-auto" />
            </div>
        </Link>
    );
};

export default Logo;
