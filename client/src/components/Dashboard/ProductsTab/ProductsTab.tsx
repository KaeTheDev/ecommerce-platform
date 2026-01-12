import type { ProductsTabProps } from "../../../types/Product";
import { useConfirmDelete } from "../../../contexts/ConfirmDeleteContext";


const ProductsTab = ({ onOpenProductForm, products, onDelete, onEdit }: ProductsTabProps) => {
  const { requestConfirm } = useConfirmDelete();
  return (
    <>
      <div className="p-8 min-h-150px relative">
        <div className="flex flex-col pr-52 lg:pr-48">
          <p className="text-3xl">Products</p>
          <p className="text-sm -mb-2">Manage Your Store Products</p>
        </div>
        <button
          onClick={onOpenProductForm}
          className="absolute top-11 right-4 lg:right-8 bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-xl hover:bg-blue-400 transition-all whitespace-nowrap"
        >
          + Create Product
        </button>
      </div>

      <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide gray-200">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                      product.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => onEdit(product.id)} 
                    className="mr-4 hover:scale-110 transition-transform">✏️</button>
                  <button className="hover:scale-110 transition-transform" onClick={() => requestConfirm({
                    title: "Delete Product?",
                    message: "This product will be permanently removed and cannot be recovered.",
                    onConfirm: () => onDelete(product.id),
                  })}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductsTab;