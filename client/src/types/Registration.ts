import type { User } from "./User";

export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    adminPasscode?: number;
}

export interface RegistrationFormProps {
    onSubmit: (user: User) => void;
    initialData?: User;
}