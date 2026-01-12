import React from "react";
import { Navigate } from "react-router-dom";
import { Panel } from "../../../pages/Panel";
import { UserProfile } from "../../../pages/UserProfile";

interface DrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminRoute = ({ drawerOpen, setDrawerOpen }: DrawerProps) => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if(!token || !userString) return <Navigate to="/" replace />;

    const parsedUser = JSON.parse(userString);
    if (parsedUser.role !== 'admin') return <Navigate to="/userProfile" replace />;

    return <Panel drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />; 
};

export const CustomerRoute = ({ drawerOpen, setDrawerOpen }: DrawerProps) => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if(!token || !userString) return <Navigate to="/" replace />;
    const parsedUser = JSON.parse(userString);
    if(parsedUser.role !== 'customer') return <Navigate to="/panel" replace />;

    return <UserProfile drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />;
};