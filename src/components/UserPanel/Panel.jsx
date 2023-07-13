import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Panel = () => {

    const { user } = useAuth()

    return (
        <div className="h-screen bg-black [word-spacing:3px] text-theboxyellow  font-custom1 ">
            <h1 className=" uppercase text-3xl mx-auto w-[90%] text-center p-4 relative top-16">Bienvenido a la Comunidad</h1>
            <div className="greetings text-lg w-10/12 m-auto p-8  h-auto rounded-xl relative top-16 text-center">
                Hola, {user.displayName} ya estas participando por el sorteo del dia del amigo! recorda que en nuestro instagram tenes las bases y condiciones, pronto vas a estar recibiendo las novedades y beneficios de ser parte de esta comunidad!!!
            </div>
            <Link to="https://pedidos.theboxburgerculture.com.ar/" className="p-6 m-4 relative top-12 uppercase text-center text-base inline-block rounded-xl bg-theboxyellow text-black ">Para festejar que ya sos parte, pedite una burger, en nuestra app</Link>
        </div>
    );
};

export default Panel;
