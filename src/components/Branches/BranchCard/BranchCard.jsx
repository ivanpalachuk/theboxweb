export default function BranchCard(props) {
    return (
        <div className="cardContainer rounded-xl bg-theboxyellow w-[90%] max-w-xl h-auto flex flex-row mb-4 [word-spacing:3px]">
            <div className="imageContainer w-[40%] h-auto">
                <div className="imageContent w-full h-full bg-cover bg-center rounded-l-xl" style={{ backgroundImage: `url(/images/${props.url})` }}></div>
            </div>
            <div className="dataContainer font-custom1 uppercase text-sm border-l-2 border-black p-2">
                <div className="title text-lg">Sucursal {props.title}</div>
                <div className="address">Direccion: {props.address}</div>
                <div className="phone">Teléfono: {props.phone}</div>
                <div className="opening">Horario:{props.opening}</div>
            </div>
        </div>
    );
}
