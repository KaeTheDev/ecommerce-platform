const RecentActivity = () => {
  return (
    <>
    
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Recent Activity
                  </h2>

                  <div className="space-y-6">
                    {/* 1. New order placed */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">
                          New order placed
                        </span>
                        <span className="text-sm text-gray-500">
                          1 hour ago
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">Order #1043</div>
                    </div>

                    {/* 2. Product updated */}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">
                          Product updated
                        </span>
                        <span className="text-sm text-gray-500">
                          2 hours ago
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Luxury Watch Collection
                      </div>
                    </div>

                    {/* 3. Order shipped */}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">
                          Order shipped
                        </span>
                        <span className="text-sm text-gray-500">
                          3 hours ago
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">Order #1042</div>
                    </div>

                    {/* 4. New review posted */}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">
                          New review posted
                        </span>
                        <span className="text-sm text-gray-500">
                          4 hours ago
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Designer Handbag
                      </div>
                    </div>

                    {/* 5. Product created */}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">
                          Product created
                        </span>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Silk Scarf Set
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}
export default RecentActivity;