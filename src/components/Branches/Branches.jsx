import React from "react";
import Map from "./Map/Map";
import BranchCard from "./BranchCard/BranchCard";

const Branches = () => {


    return (
        <div className="bg-black">
            <div className=" flex justify-center items-center flex-col relative top-20 pb-10">
                <h2 className="text-2xl font-bold text-center text-theboxyellow font-custom1 p-2 uppercase">Busca nuestros locales</h2>

                <div className="max-w-[85%] w-full mx-4 mb-4">
                    <Map />
                </div>
                <BranchCard title={"Edison"} address={"Edison 2876"} phone={+542235950092} opening={"Todos los dias 12hs a 24hs"} url={"sucursalEdison.jpeg"} />
                <BranchCard title={"Centro"} address={"Entre Rios 2233"} phone={+542236749602} opening={"Todos los dias 12hs a 24hs"} url={"sucursalCentro.png"} />
                <BranchCard title={"Constitucion"} address={"C.Arenal 3950"} phone={+542235058817} opening={"De mar a dom 12hs a 24hs"} url={"sucursalFoodTruck.png"} />
            </div>

        </div>
    );
};

export default Branches;