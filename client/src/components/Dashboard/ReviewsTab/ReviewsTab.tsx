const ReviewsTab = () => {
    return (
        <>
        <div className="p-4 md:p-8 min-h-25 md:min-h-37.5 relative">
            <div className="flex flex-col">
                <p className="text-xl md:text-3xl">Reviews</p>
                <p className="text-xs md:text-sm">View Customer Reviews For Your Products</p>
            </div>
        </div>

        <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg -mx-4 md:mx-0">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                    <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr> 
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                    <td className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">
                        <div className="min-w-20 md:min-w-0">Diamond Necklace</div>
                    </td>
                    <td className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">
                        <div className="min-w-20 md:min-w-0">Kashmir Price</div>
                    </td>
                    <td className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">
                        <div className="min-w-20 md:min-w-0">⭐️⭐️⭐️⭐️⭐️</div>
                    </td>
                    <td className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">
                        <div className="min-w-37.5 md:min-w-50 max-w-50 md:max-w-xs">
                            Absolutely Stunning! Perfect gift for any occasion. Would buy again!
                        </div>
                    </td>
                    <td className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">
                        <div className="min-w-17.5 md:min-w-0">12/27/2025</div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ReviewsTab;