const StatsCard = () => {
  return (
    <>
        {/* Stats Cards */}
        <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
          <p className="text-sm font-medium text-gray 600 mb-1">
            Total Products
          </p>
          <p className="text-xl font-medium text-gray-900">24</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
          <p className="text-sm font-medium text-gray 600 mb-1">
            Active Products
          </p>
          <p className="text-xl font-medium text-gray-900">18</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
          <p className="text-sm font-medium text-gray 600 mb-1">Total Orders</p>
          <p className="text-xl font-medium text-gray-900">156</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all">
          <p className="text-sm font-medium text-gray 600 mb-1">
            Total Reviews
          </p>
          <p className="text-xl font-medium text-gray-900">42</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default StatsCard;