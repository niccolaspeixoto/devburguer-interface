import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

export function PrivateRoute() {
    const { userInfo } = useUser()

    return userInfo?.token ? <Outlet /> : <Navigate to="/login" replace />
}
