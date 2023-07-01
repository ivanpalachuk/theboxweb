import React from "react";
import Map from "../Map/Map";

const Branches = () => {


    return (
        <div className="bg-black h-screen flex justify-center items-center flex-col" id="branches">
            <h2 className="text-2xl font-bold text-center text-theboxyellow font-custom1 mb-5 p-2 uppercase mt-10">Busca nuestros locales</h2>
            {<Map />}
            <div className='text-yellow-400'>Datos local 1</div>
            <div className='text-yellow-400'>Datos local 2</div>
            <div className='text-yellow-400'>Datos local 3</div>
        </div>
    );
};

export default Branches;