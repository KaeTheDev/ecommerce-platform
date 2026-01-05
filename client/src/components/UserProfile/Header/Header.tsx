const Header = () => {
    return (
        <div className="bg-white border p-6 flex flex-row justify-between items-center">
              <div className="flex flex-col">
              <p className="text-2xl font-medium text-gray-900 flex-1 lg:ml-0 lg:flex-none ml-3">My Account</p>
                <p className="text-sm text-gray-900 flex-1 lg:ml-0 lg:flex-none ml-3">
                    Manage your profile, orders and preferences
                </p>
              </div>
        </div>
    )
}
export default Header;