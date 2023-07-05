import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserPanel = () => {

    const [isLogged, setisLogged] = useState(false)


    return (<>
        <div>
            {isLogged && <div className='font-custom1 uppercase text-lg text-center animate-bounce relative top-5'> Bienvenido usuario</div>}
            <div className='flex justify-center font-custom1 text-lg mt-8'>
                <div className='login-button-container h-16 w-[90%] flex flex-row justify-around align-middle text-black text-base'>
                    {isLogged ? <button className='login-button h-10 w-[80%] bg-yellow-500 rounded-lg uppercase m-1' ><Link to="/login" >Ir a mi Panel</Link></button> : <button className='login-button h-10 w-[45%] bg-yellow-500 rounded-lg uppercase' ><Link to="/login" > ingresar</Link></button>}
                    {isLogged && <button className='logout-button h-10 w-[45%] bg-red-800 rounded-lg uppercase text-white m-1'> Salir </button>}
                </div>
            </div >
        </div>
    </>
    )
}

export default UserPanel