import type { User } from "../../../types/User";

interface ProfileOverviewProps {
  user: User;
}

const ProfileOverview = ({ user }: ProfileOverviewProps) => {
  const memberSinceFormatted = new Date(user.memberSince).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center border rounded-2xl px-6 py-4 w-full">
        <span className="border rounded-2xl px-5 py-4 mb-3 sm:mb-0 sm:mr-4">
          {user.firstName[0]}
          {user.lastName[0]}
        </span>

        <div className="text-center md:text-left lg:text-left">
          <p className="font-medium">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm">
            ⛨ {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </p>
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
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

              <div>
                <span className="text-sm text-gray-400">Full Name</span>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

              <div>
                <span className="text-sm text-gray-400">Email Address</span>
                <p>{user.email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

              <div>
                <span className="text-sm text-gray-400">Member Since</span>
                <p>{memberSinceFormatted}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>

              <div>
                <span className="text-sm text-gray-400">Account Role</span>
                <p>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
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