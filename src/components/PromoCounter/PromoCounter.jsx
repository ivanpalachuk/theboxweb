import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";


const PromoCounter = () => {
    const [percentToDisplay, setPercentToDisplay] = useState(0);
    const [userTotals, setUserTotals] = useState(0);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const countUsers = async () => {
            const usersCollection = collection(db, "users");
            const querySnapshot = await getDocs(usersCollection);
            const userCount = querySnapshot.size;
            const calculatedPercent = ((userCount + 70) / 2500) * 100;
            setPercentToDisplay(calculatedPercent);
            setUserTotals(userCount + 70);

            const usersData = [];
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                usersData.push(userData);
            });

            setUserList(usersData);
            setLoading(false);
        };

        countUsers();
    }, []);

    return (
        <div className="promo-container bg-black font-custom1 text-theboxyellow flex flex-col justify-around [word-spacing:3px] p-2">
            {loading ? (
                <div className="promo-message w-1/2 mx-auto text-center text-lg uppercase mt-4">
                    Cargando...
                </div>
            ) : (
                <>
                    <div className="promo-message w-1/2 mx-auto text-center text-lg uppercase mt-4">
                        {/* Tu mensaje promocional */}
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
                    <div>Lista de registrados:</div>
                    <table className="w-full mt-4">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.displayName}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default PromoCounter;
