import React from "react";
import Map from "../Map/Map";

const Branches = () => {


    return (
        <div className="bg-black h-screen flex justify-center items-center flex-col" id="branches">
            <h2 className="text-2xl font-bold text-center text-yellow-400 font-custom1 border-b-2 border-current mb-5">Visitanos en nuestras sucursales</h2>

            <Map />

        </div>
    );
};

export default Branches;