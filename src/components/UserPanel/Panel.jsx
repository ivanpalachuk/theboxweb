import { useAuth } from "../../context/AuthContext";

const Panel = () => {

    const { user } = useAuth()
    console.log(user.phoneNumber)
    return (
        <div className="h-screen bg-black [word-spacing:3px] text-theboxyellow  font-custom1 ">
            <h1 className=" uppercase text-3xl mx-auto w-[90%] text-center p-4 relative top-16">Bienvenido a la Comunidad</h1>
            <div className="greetings text-lg w-10/12 m-auto p-8  h-auto rounded-xl relative top-16 text-center">
                Hola, {user.displayName} en breve vas a ver todas las novedades y ventajas que tiene sumarse a la comunidad y cultura de THEBOX, estate atento para recibir las novedades
            </div>
        </div>
    );
};

export default Panel;
