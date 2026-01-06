const ProfileOverview = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center border rounded-2xl px-6 py-4 w-full">
        <span className="border rounded-2xl px-5 py-4 mb-3 sm:mb-0 sm:mr-4">
          SL
        </span>

        <div className="flex flex-col text-left">
          <p className="font-medium">Sophia Laurent</p>
          <p className="text-sm text-gray-500">sophia.laurent@example.com</p>
          <p className="text-sm">⛨ Customer</p>
        </div>
      </div>

      {/* Account Information */}
      <div className="border rounded-2xl px-5 py-4 w-full">
        <p className="mb-6 font-medium text-center sm:text-left">
          Account Information
        </p>

        {/* Centered column on mobile, left on desktop */}
        <div className="flex justify-center sm:justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {/* Item */}
            <div className="flex items-start">
              <span className="mr-4">ICON</span>
              <div>
                <span className="text-sm text-gray-400">Full Name</span>
                <p>Sophia Laurent</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="mr-4">ICON</span>
              <div>
                <span className="text-sm text-gray-400">Email Address</span>
                <p>sophia.laurent@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="mr-4">ICON</span>
              <div>
                <span className="text-sm text-gray-400">Member Since</span>
                <p>December 15, 2025</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="mr-4">ICON</span>
              <div>
                <span className="text-sm text-gray-400">Account Role</span>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Help link */}
      <p className="mt-8 text-sm text-gray-400 text-center sm:text-left">
        Need help with orders, shipping or returns?{" "}
        <a href="#" className="underline hover:text-gray-600">
          Visit our help & FAQ center
        </a>
      </p>
    </div>
  );
};

export default ProfileOverview;