export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    adminPasscode?: string;
}

export interface RegistrationFormProps {
    onSubmit: (data: RegistrationFormData) => void;
    initialData?: Partial<RegistrationFormData>;
}