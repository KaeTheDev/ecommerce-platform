const ReviewsTab = () => {
    return (
        <>
        <div className="p-8 min-h-150px relative">
            <div className="flex flex-col pr-52 lg:pr-48">
                <p className="text-3xl">Reviews</p>
                <p className="text-sm -mb-2">View Customer Reviews For Your Products</p>
            </div>
        </div>

        <div className="overflow-x-auto shadow-sm bordr border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr> 
                </thead>

                <tbody className="bg-white divide-y divide gray-200">
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Diamond Necklace</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kashmir Price</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">⭐️⭐️⭐️⭐️⭐️</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Absolutely Stunning! <br /> Perfect gift for any occasion. 
                        Would buy again!</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12/27/2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ReviewsTab;