export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'customer';
    memberSince: string;
}

export interface ProfileAccountProps {
    user: User;
}