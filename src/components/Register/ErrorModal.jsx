import React from "react";

const ErrorModal = ({ error, onClose, validationError }) => {
  

    const getErrorMessage = (error) => {
        switch (error) {
            case "Firebase: Error (auth/email-already-in-use).":
                return "Ese correo electrónico ya se encuentra registrado.";
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                return "La contraseña es demasiado débil.";
            case "Firebase: Error (auth/user-not-found).":
                return "El mail no se encuentra en nuestra base de datos";
            case "Firebase: Error (auth/wrong-password).":
                return "El password es incorrecto"

            default:
                return "Ocurrió un error. Por favor, intenta nuevamente.";
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black bg-opacity-75"></div>
            <div className="relative bg-white rounded p-4">
                <h2 className="text-xl font-bold mb-2">Error</h2>
                <p>{error ? getErrorMessage(error) : validationError}</p>
                <button
                    className="mt-4 bg-theboxyellow text-black py-2 px-4 rounded hover:bg-yellow-500 focus:outline-none"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ErrorModal;
