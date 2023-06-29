import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF,InfoWindowF } from "@react-google-maps/api";
import logoSymbol from "/images/LogoSIMBOL.png"

const Map = () => {

    const apiKey = import.meta.env.VITE_API_KEY_GMAPS;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: apiKey,
    });

    if (loadError) {
        return <div>Error al cargar el mapa</div>;
    }

    if (!isLoaded) {
        return <div>Cargando mapa...</div>;

    }

    const markerIcon = {
        url: logoSymbol,
        scaledSize: new window.google.maps.Size(50, 50), // Ajusta el tamaño según tus necesidades
    };

    return (
        <div className="max-w-4xl w-full mx-4">
            <GoogleMap
                zoom={11}
                center={{ lat: -37.97235646204869, lng: -57.54639106291803 }}
                mapContainerStyle={{ height: "400px", width: "100%" }}
            >
                <MarkerF position={{ lat: -38.05853175230957, lng: -57.5684188193814 }} icon={markerIcon} title={"Edison"} />
                <MarkerF position={{ lat: -37.97235646204869, lng: -57.544195680355664 }} icon={markerIcon} title={"Centro"} />
                <MarkerF position={{ lat: -38.00551786992269, lng: -57.54639106291803 }} icon={markerIcon} title={"Constitucion"} />
                ,

            </GoogleMap>
        </div>
    );
};

export default Map;