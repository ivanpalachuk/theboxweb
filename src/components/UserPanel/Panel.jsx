import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Panel = () => {
    const { user } = useAuth();

    return (
        <div className="bg-black text-theboxyellow font-custom1 pb-8">
            <h1 className="uppercase text-3xl mx-auto w-[90%] text-center p-4 relative top-16">Novedades de la comunidad</h1>
            <div className="greetings text-xl m-auto p-4 rounded-xl relative top-16 text-center">
                Hola, {user.displayName}, te contamos los beneficios que tenés por ser parte de nuestra comunidad:
                <ul className="flex flex-col justify-between h-3/4 mb-9 text-xl text-center m-4 gap-4 list-decimal">
                    <li>En la semana de tu cumpleaños The Box va a celebrar con vos, de una manera única: 1 combo al cumpleañero, 1 pinta para cada invitado y una porción de papas cada compartir cada 3 amigos que vengan a celebrar con vos, la idea es que estés cómodo en nuestros salones, reserva con anticipación!</li>
                    <li>Con tu pedido mayor a $10.000, te llevás un combo de brodas doble GRATIS</li>
                    <li>-10% de descuento en toda la carta -excepto bebidas- de lunes a jueves. No acumulable con otras promociones</li>
                    <li>En breve, vamos a presentar la burger del mes. ¡Vas a tener un descuento especial!</li>
                    <li>15% de descuento en el salón todos los días - no incluye bebidas -</li>
                </ul>
                <Link to={"https://pedidos.theboxburgerculture.com.ar/"} className="p-4 m-4 uppercase text-center text-base rounded-xl inline-block animate-pulse bg-theboxyellow text-black">
                    Ya podés empezar a pedir, aprovechando estos beneficios</Link>
            </div>
        </div>
    );
};

export default Panel;
