const ProductsTab = () => {
  return (
<>
<div className="p-8 min-h-150px relative">
      <div className="flex flex-col pr-52 lg:pr-48">
        <p className="text-3xl">Products</p>
        <p className="text-sm -mb-2">Manage Your Store Products</p>
      </div>
      <button className="absolute top-11 right-4 lg:right-8 bg-blue-500 text-white px-4 lg:px-6 py-2 rounded-xl hover:bg-blue-600 transition-all whitespace-nowrap">
        + Create Product
      </button>
    </div>

    <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Diamond Necklace</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,450</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="mr-4">✏️</button>
                        <button>🗑️</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</>
  );
};
export default ProductsTab;