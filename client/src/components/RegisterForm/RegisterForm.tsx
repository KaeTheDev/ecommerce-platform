import { useId } from "react";

export const RegisterForm = () => {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const adminPasscodeId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form Submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-100 p-6 space-y-5 bg-white rounded-2xl shadow-xl border border-gray-100">
    <div className="flex gap-3">
      <div className="flex-1 space-y-1.5">
        <label htmlFor={firstNameId} className="text-xs font-medium text-gray-700 block leading-tight">
          First Name
        </label>
        <input 
          type="text" 
          id={firstNameId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="Jane"
        />
      </div>
      <div className="flex-1 space-y-1.5">
        <label htmlFor={lastNameId} className="text-xs font-medium text-gray-700 block leading-tight">
          Last Name
        </label>
        <input 
          type="text" 
          id={lastNameId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="Doe"
        />
      </div>
    </div>

    {/* Single Column Fields */}
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor={emailId} className="text-xs font-medium text-gray-700 block leading-tight">
          Email Address
        </label>
        <input 
          type="email"
          id={emailId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={passwordId} className="text-xs font-medium text-gray-700 block leading-tight">
          Password
        </label>
        <input 
          type="password"
          id={passwordId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="Minimum 8 characters"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={confirmPasswordId} className="text-xs font-medium text-gray-700 block leading-tight">
          Confirm Password
        </label>
        <input 
          type="password"
          id={confirmPasswordId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="Re-enter your password"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={adminPasscodeId} className="text-xs font-medium text-gray-700 block leading-tight">
          Admin Passcode (Optional)
        </label>
        <input 
          type="password" 
          id={adminPasscodeId}
          className="w-full h-11 px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
          placeholder="Leave blank for customer access"
        />
      </div>
    </div>

    <button 
      type="submit"
      className="w-full h-12 bg-black text-white rounded-xl font-medium text-sm hover:bg-green-600 focus:ring-2 focus:ring-gray-400 transition-all shadow-lg border border-transparent"
    >
      Create Account
    </button>
  </form>
  );
};