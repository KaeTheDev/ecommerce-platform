import { useId, useState } from "react";
import type { LoginFormData, LoginFormProps } from "../../../types/Login";

export const LoginForm: React.FC<LoginFormProps> =({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });

  const emailId = useId();
  const passwordId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
    if(!initialData) {
      setFormData({ email: "", password: ""})
    };
  }

  const handleInputChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-150 p-6 space-y-5 bg-white rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor={emailId}
            className="text-xs font-medium text-gray-700 block leading-tight"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            id={emailId}
            className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor={passwordId}
            className="text-xs font-medium text-gray-700 block leading-tight"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            id={passwordId}
            className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <a href="#" className="text-sm text-gray-800 hover:text-gray-400">
      <div className="text-right mb-3.5">
        Forgot Password?
        </div>
      </a>
      <button
        type="submit"
        className="w-full h-12 bg-black text-white rounded-xl font-medium text-sm hover:bg-green-600 focus:ring-2 focus:ring-gray-400 transition-all shadow-lg border border-transparent"
      >
        Login
      </button>
    </form>
  );
};