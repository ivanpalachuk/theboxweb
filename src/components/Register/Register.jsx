import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import ErrorModal from "./ErrorModal";

const Register = () => {

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        displayName: "",
        email: "",
        password: "",
        phone: "-"
    });

    const [error, setError] = useState("");
    const [validationError, setValidationError] = useState("")
    const [passwordMatch, setPasswordMatch] = useState("");

    const [showModal, setShowModal] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const phoneRegex = /^\+\d{1,15}$/

        if (user.email === "" || user.password === "" || user.displayName === "") {
            setValidationError("Los campos no pueden estar vacios")
            setShowModal(true)
        } else if (!regexEmail.test(user.email)) {
            setValidationError("Ingresa un formato de mail valido")
            setShowModal(true);
        }
        /*
            else if (!phoneRegex.test(user.phone)) {
                setValidationError("Ingresa tu telefono en formato valido")
            setShowModal(true)}*/
        else if (user.password !== passwordMatch) {
            setValidationError("Los passwords no coinciden")
            setShowModal(true);
        } else {
            try {
                await signUp(
                    user.email,
                    user.password,
                    user.displayName,
                    parseInt(user.phone));
                navigate("/panel");
            } catch (error) {
                setError(error.message);
                console.log(error.message)
                setShowModal(true);
            }
        }
    };

    return (
        <div className="bg-black min-h-screen flex flex-col font-custom1">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-theboxyellow px-6 py-8 rounded shadow-md text-black w-full mt-12">
                    <h1 className="mb-8 text-3xl text-center [word-spacing:6px] font-bold uppercase">
                        Regístrate en la comunidad
                    </h1>

                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="displayName"
                            placeholder="Nombre"
                            onChange={handleChange}
                            autoComplete="current-fullname"
                            maxLength={25}
                        />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            autoComplete="current-email"
                        />
                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phone"
                            placeholder="Número de teléfono"
                            onChange={handleChange}
                            autoComplete="current-phone"
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Contraseña"
                            onChange={handleChange}
                            autoComplete="current-password"
                            maxLength={15}
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Repetir Contraseña"
                            onChange={(e) => setPasswordMatch(e.target.value)}
                            autoComplete=""
                            maxLength={25}
                        />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded-xl bg-black text-theboxyellow uppercase hover:bg-green-dark [word-spacing:6px] focus:outline-none my-1"
                        >
                            Crear cuenta
                        </button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        Al registrarte aceptas nuestros
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark mx-1"
                            href="#"
                        >
                            Términos de uso
                        </a>
                        y
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark mx-1"
                            href="#"
                        >
                            Política de privacidad
                        </a>
                    </div>
                </div>

                <div className="text-theboxyellow mt-6">
                    ¿Ya sos parte de la comunidad?
                    <Link
                        to={"/login"}
                        className="no-underline border-b border-blue text-blue"
                    >
                        Ingresa
                    </Link>
                    .
                </div>

                {showModal && (
                    <ErrorModal error={error} validationError={validationError} onClose={handleCloseModal} />
                )}
            </div>
        </div>
    );
};

export default Register;
