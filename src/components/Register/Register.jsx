import { useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



const Register = () => {

    const { signUp } = useAuth()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState()
    const navigate = useNavigate()


    const [passwordMatch, setPasswordMatch] = useState("")

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
    }


    const submitHandler = async (e) => {

        e.preventDefault()

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (user.email == '' || user.password == '') {

            alert("Los campos no pueden estar vacios")

        }
        if (user.email !== '' && !regexEmail.test(user.email)) {
            alert("Ingresa un formato de mail valido")
        }
        if (user.password !== passwordMatch) {
            alert("Los password no coinciden")
        }

        try {
            await signUp(user.email, user.password)
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }



    return (
        <div className="bg-black min-h-screen flex flex-col font-custom1">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-theboxyellow px-6 py-8 rounded shadow-md text-black w-full mt-12">
                    <h1 className="mb-8 text-3xl text-center [word-spacing:6px] font-bold uppercase">Registrate en la comunidad</h1>

                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Nombre"
                            onChange={handleChange}
                            autoComplete="current-fullname" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            autoComplete="current-email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            autoComplete="current-password" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Repetir Password"
                            onChange={(e) => setPasswordMatch(e.target.value)}
                            autoComplete=""
                        />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded-xl bg-black text-theboxyellow uppercase hover:bg-green-dark [word-spacing:6px] focus:outline-none my-1"
                        >Crear cuenta</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4 ">
                        Al registrarte aceptas nuestros
                        <a className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                            Terminos de uso
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                            Politica de privacidad
                        </a>
                    </div>
                </div>

                <div className="text-theboxyellow mt-6">
                    Ya sos parte de la comunidad?
                    <Link to={"/login"} className="no-underline border-b border-blue text-blue" >ingresa</Link>.
                </div>
            </div>
        </div>
    )
}

export default Register

