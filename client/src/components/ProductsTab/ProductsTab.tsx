const ProductsTab = () => {
return (
    <div className="bg-white rounded-2xl shadow-lg border p-8 min-h-150px relative">
    <div className="flex flex-col pr-52 lg:pr-48">
        <p className="text-3xl">Products</p>
        <p className="text-sm -mb-2">Manage your store products</p>
    </div>
    <button className="absolute top-8 right-4 lg:right-8 bg-blue-500 text-white px-4 lg:px-6 py-2 rounded-xl hover:bg-blue-600 transition-all whitespace-nowrap">
        + Create Product
    </button>
</div>
)}
export default ProductsTab;