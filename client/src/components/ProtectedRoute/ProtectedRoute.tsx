import { Navigate } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { UserProfile } from "../../pages/UserProfile";

export const AdminRoute = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');


    if(!token || !user) return <Navigate to="/" replace />;
    const parsedUser = JSON.parse(user);
    if (parsedUser.role !== 'admin') return <Navigate to="/userProfile" replace />;

    return <Dashboard />; 
};

export const CustomerRoute = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(!token || !user) return <Navigate to="/" replace />;
    const parsedUser = JSON.parse(user);
    if(parsedUser.role !== 'customer') return <Navigate to="/dashboard" replace />;

    return <UserProfile />;
};