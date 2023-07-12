import { useAuth } from '../../context/AuthContext';
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        // Mostrar un indicador de carga mientras se verifica la autenticación
        return (
            <div className='flex justify-center bg-black h-screen'>
                <div className="inline-block h-[50%] w-[50%] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
            </div>
        );
    }

    if (!user) {
        // Redirigir al usuario a la página de inicio de sesión si no está autenticado
        return <Navigate to="/login" />;
    }

    // Renderizar el contenido protegido si el usuario está autenticado
    return <>{children}</>;
}

export default ProtectedRoute;
