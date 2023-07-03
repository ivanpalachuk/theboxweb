
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
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

        <GoogleMap
            zoom={15}
            center={{ lat: -38.00569, lng: -57.54641 }}
            mapContainerStyle={{ height: "30rem", width: "100%", border: "yellow 2px solid" }}
        >
            <MarkerF position={{ lat: -38.05853175230957, lng: -57.5684188193814 }} icon={markerIcon} title={"Edison"} />
            <MarkerF position={{ lat: -37.97235646204869, lng: -57.544195680355664 }} icon={markerIcon} title={"Constitucion"} />
            <MarkerF position={{ lat: -38.00569, lng: -57.54641 }} icon={markerIcon} title={"Centro"} />
        </GoogleMap>

    );
};

export default Map;