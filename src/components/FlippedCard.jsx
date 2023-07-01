import React from 'react'

const FlippedCard = () => {
    return (
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className="absolute inset-0">
                    <img src="images\burgerPNG\AtlanticaMax.png" alt="fotoHamburguesa" className="className h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className='flex justify-center font-custom1 text-theboxyellow text-xl uppercase p-8'>Hola</div>
                </div>
            </div>
        </div>
    )
}

export default FlippedCard