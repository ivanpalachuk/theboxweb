import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";

const PromoCounter = () => {
    const [percentToDisplay, setPercentToDisplay] = useState(0);
    const [userTotals, setUserTotals] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const countUsers = async () => {
            const usersCollection = collection(db, "users");
            const querySnapshot = await getDocs(usersCollection);
            const userCount = querySnapshot.size;
            const calculatedPercent = ((userCount + 70) / 2500) * 100;
            setPercentToDisplay(calculatedPercent);
            setUserTotals(userCount + 70)
            setLoading(false)
        };

        countUsers();
    }, []);
    
    return (
        <div className="promo-container h-screen bg-black font-custom1 text-theboxyellow flex flex-col justify-around [word-spacing:3px] p-2">
            {loading ? (
                <div className="promo-message w-1/2 mx-auto text-center text-lg uppercase mt-4">
                    Cargando...
                </div>
            ) : (
                <>
                    <div className="promo-message w-1/2 mx-auto text-center text-lg uppercase mt-4">
                        Gracias por ser parte de nuestro equipo, desde todos lados ponemos un poco para que este sorteo salga de lo mejor, y nuestra marca empiece a ser más y más reconocida, sin vos y las ganas de meterle, no lo lograríamos... ¡vamos!!!
                    </div>
                    <div className="bg-neutral-200 dark:bg-neutral-600 w-3/4 rounded-xl mx-auto">
                        <div
                            className="bg-theboxyellow p-0.5 text-center text-base font-medium rounded-l leading-none text-black"
                            style={{ width: `${percentToDisplay}%` }}
                        >
                            {percentToDisplay}%
                        </div>
                    </div>
                    <div className="users-total text-center text-xl uppercase">Hasta ahora logramos {userTotals} registrados</div>
                </>
            )}
        </div>
    );
};

export default PromoCounter;
