import { useUserContext } from "../../providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const { user } = useUserContext();

    return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
