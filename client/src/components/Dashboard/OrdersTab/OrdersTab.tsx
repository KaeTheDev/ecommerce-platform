const OrdersTab = () => {
    return (
        <>
        <div className="p-8 min-h-150px relative">
            <div className="flex flex-col pr-52 lg:pr-48">
                <p className="text-3xl">Orders</p>
                <p className="text-sm -mb 2">Manage Customer Orders</p>
            </div>
        </div>

        <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
            <table className="min-w-full divide y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1045</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kashmir Price</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$1499.97</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12/26/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button>👁️</button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default OrdersTab;