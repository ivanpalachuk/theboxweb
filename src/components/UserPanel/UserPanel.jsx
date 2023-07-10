
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const UserPanel = () => {

    const { user, logOut } = useAuth()

    return (<>
        <div>
            {user && <div className='font-custom1 uppercase text-lg text-center animate-bounce relative top-5'> Hola  {user.displayName}</div>}
            <div className='flex justify-center font-custom1 text-lg mt-8'>
                <div className='login-button-container h-16 w-[90%] flex flex-row justify-around align-middle text-black text-base'>
                    {user ? <button className='login-button h-10 w-[80%] bg-yellow-500 rounded-lg uppercase m-1' ><Link to="/panel" >Ir a mi Panel</Link></button> : <button className='login-button h-10 w-[45%] bg-yellow-500 rounded-lg uppercase' ><Link to="/login" > ingresar</Link></button>}
                    {user && <button className='logout-button h-10 w-[45%] bg-red-800 rounded-lg uppercase text-white m-1' onClick={logOut}> Salir </button>}
                </div>
            </div >
        </div>
    </>
    )
}

export default UserPanel