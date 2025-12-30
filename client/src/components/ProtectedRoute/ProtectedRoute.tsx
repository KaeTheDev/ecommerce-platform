import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    // No token? -> Redirect to home
    if(!token) {
        return <Navigate to="/" replace />
    }

    // Has token -> Show Page
    return <Outlet />
}