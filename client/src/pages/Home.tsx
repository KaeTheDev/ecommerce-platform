import { LoginForm } from "../components/LoginForm/LoginForm"
import { RegisterForm } from "../components/RegisterForm/RegisterForm"

export const Home = () => {
    return (
        <div className="flex flex-row">
            <RegisterForm />
            <LoginForm />
        </div>
    )
}