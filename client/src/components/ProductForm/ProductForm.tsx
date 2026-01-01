import { useState, useEffect } from "react";
import type { ProductFormData, ProductFormProps } from "../../types/Product";
import {
  CATEGORY_CONFIG,
  buildSku,
  getCategoryDefaults,
} from "../../constants/productConfig";
import { uploadImage } from "../../api/uploadImage";

export const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    subtitle: "",
    category: "ring",
    price: "",
    status: "active",
    primaryImageUrl: "",
    galleryImageUrls: [],
    sizes: [],
    material: "",
    gemstoneType: "",
    weightPreset: "",
    style: "",
    description: "",
    careTemplateKey: "",
    specsFromAttributes: false,
    sku: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const [primaryPreview, setPrimaryPreview] = useState<string | null>(
    initialData?.primaryImageUrl ?? null
  );

  const [galleryPreviews, setGalleryPreviews] = useState<string[]>(
    initialData?.galleryImageUrls ?? []
  );

  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange =
    (field: keyof ProductFormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFormData({ ...formData, [field]: e.target.value as any });
    };

  const handleCategoryChange = (category: ProductFormData["category"]) => {
    const defaults = getCategoryDefaults(category);
    setFormData((prev) => ({
      ...prev,
      category,
      ...defaults,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        name: "",
        subtitle: "",
        category: "ring",
        price: "",
        status: "active",
        primaryImageUrl: "",
        galleryImageUrls: [],
        sizes: [],
        material: "",
        gemstoneType: "",
        weightPreset: "",
        style: "",
        description: "",
        careTemplateKey: "",
        specsFromAttributes: false,
        sku: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  };

  const handlePrimaryImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Local Preview
    const previewUrl = URL.createObjectURL(file);
    setPrimaryPreview(previewUrl);

    try {
      setIsUploading(true);

      const uploadedUrl = await uploadImage(file);

      setFormData((prev) => ({
        ...prev,
        primaryImageUrl: uploadedUrl,
      }));
    } catch (err) {
      console.error(err);
      alert("Primary image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleGalleryImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
  
    const fileArray = Array.from(files);
  
    // Show local previews immediately
    const previews = fileArray.map((file) => URL.createObjectURL(file));
    setGalleryPreviews((prev) => [...prev, ...previews]);
  
    setIsUploading(true);
  
    try {
      const uploadedUrls = await Promise.all(
        fileArray.map((file) => uploadImage(file))
      );
  
      setFormData((prev) => ({
        ...prev,
        galleryImageUrls: [...prev.galleryImageUrls, ...uploadedUrls],
      }));
    } catch (err) {
      console.error(err);
      alert("Some gallery images failed to upload. Check console.");
    } finally {
      setIsUploading(false);
    }
  };
  

  // Dynamically build SKU based on category + gemstone type
  useEffect(() => {
    const newSku = buildSku(formData.category, formData.gemstoneType);
    setFormData((prev) => ({ ...prev, sku: newSku }));
  }, [formData.category, formData.gemstoneType]);

  const config =
    CATEGORY_CONFIG[formData.category as keyof typeof CATEGORY_CONFIG];

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* HEADER */}
        <div className="px-6">
          <h2 className="text-md text-gray-900">Create New Product</h2>
          <p className="text-sm text-gray-500">
            Add a new item to your luxury jewelry collection
          </p>
        </div>

        {/* BASIC PRODUCT INFORMATION */}
        <div className="border border-gray-200 rounded-2xl p-6 space-y-6">
          <h3 className="text-sm -mb-1">Basic Product Information</h3>
          <p className="text-sm text-gray-500">
            Core details about your product
          </p>

          {/* PRODUCT NAME */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.name}
              placeholder="e.g., Eternal Brilliance Diamond Ring"
              onChange={handleInputChange("name")}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
          </div>

          {/* SUBTITLE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Short Marketing Subtitle <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.subtitle}
              placeholder="e.g., Timeless elegance meets modern luxury"
              onChange={handleInputChange("subtitle")}
              className="w-full px-4 py-3 border rounded-xl"
            />
            <span className="text-sm">
              Displayed under product title on the product page
            </span>
          </div>

          {/* PRICE + SKU */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="$0.00"
                value={formData.price}
                onChange={handleInputChange("price")}
                className="w-full px-4 py-3 border rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.sku}
                readOnly
                className="w-full px-4 py-3 border rounded-xl bg-gray-50"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.description}
              placeholder="Describe the product's features, craftsmanship, and unique qualities"
              onChange={handleInputChange("description")}
              className="w-full px-4 py-3 border rounded-xl"
            />
          </div>
        </div>

{/* PRODUCT IMAGES */}
<div className="border border-gray-200 rounded-2xl p-6">
  <h3 className="text-lg font-semibold mb-4">Product Images</h3>
  <div className="grid md:grid-cols-2 gap-6">

    {/* PRIMARY IMAGE */}
    <div>
      <label
        htmlFor="primaryImageUrl"
        className="block text-sm font-medium mb-2"
      >
        Main Image
      </label>

      <label
        htmlFor="primaryImageUrl"
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 transition-colors block"
      >
        <p className="text-sm text-gray-500">
          Click to upload main product image <br />
          PNG, JPG up to 10MB
        </p>
      </label>

      <input
        id="primaryImageUrl"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePrimaryImageChange}
      />

      {primaryPreview && (
        <img
          src={primaryPreview}
          alt="Primary preview"
          className="mt-4 w-40 h-40 object-cover rounded-xl border"
        />
      )}

      {isUploading && (
        <p className="text-sm text-gray-500 mt-2">Uploading image...</p>
      )}
    </div>

    {/* GALLERY IMAGES */}
    <div>
      <label
        htmlFor="galleryImages"
        className="block text-sm font-medium mb-2"
      >
        Image Gallery
      </label>

      <label
        htmlFor="galleryImages"
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 transition-colors block"
      >
        <p className="text-sm text-gray-500">Upload Gallery Images</p>
      </label>

      <input
        id="galleryImages"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleGalleryImageChange}
      />

      {galleryPreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-4">
          {galleryPreviews.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Gallery preview ${idx + 1}`}
              className="w-24 h-24 object-cover rounded-lg border"
            />
          ))}
        </div>
      )}

      {isUploading && (
        <p className="text-sm text-gray-500 mt-2">Uploading images...</p>
      )}
    </div>

  </div>
</div>


        {/* CATEGORY & SPECIFICATIONS */}
        <div className="border border-gray-200 rounded-2xl p-6 space-y-6">
          <h3 className="text-lg font-semibold">Category & Specifications</h3>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                handleCategoryChange(
                  e.target.value as ProductFormData["category"]
                )
              }
              className="w-full px-4 py-3 border rounded-xl"
            >
              <option value="ring">Ring</option>
              <option value="bracelet">Bracelet</option>
              <option value="watch">Watch</option>
              <option value="necklace">Necklace</option>
              <option value="earrings">Earrings</option>
            </select>
          </div>

          {/* MULTI-SIZE SELECTION FOR ALL CATEGORIES */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Available Sizes <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2 p-3 border border-gray-200 rounded-xl bg-gray-50">
              {config.sizes.map((size) => {
                const selected = formData.sizes.includes(size);
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        sizes: selected
                          ? prev.sizes.filter((s) => s !== size)
                          : [...prev.sizes, size],
                      }))
                    }
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selected
                        ? "bg-black text-white border-black shadow-sm"
                        : "bg-white text-gray-700 border-gray-300 hover:border-black hover:shadow-md"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            {formData.sizes.length === 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Select at least one size
              </p>
            )}
            {formData.sizes.length > 0 && (
              <p className="text-xs text-green-600 mt-2">
                Selected: {formData.sizes.join(", ")} ({formData.sizes.length}{" "}
                sizes)
              </p>
            )}
          </div>

          {/* MATERIAL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Material <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.material}
              onChange={handleInputChange("material")}
              className="w-full px-4 py-3 border rounded-xl"
            >
              {config.materials.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* GEMSTONE + STYLE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Gemstone Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.gemstoneType}
                onChange={handleInputChange("gemstoneType")}
                className="w-full px-4 py-3 border rounded-xl"
              >
                {config.gemstoneTypes.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Setting / Style <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.style}
                onChange={handleInputChange("style")}
                className="w-full px-4 py-3 border rounded-xl"
              >
                {config.styles.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* WEIGHT */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Weight <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.weightPreset}
              onChange={handleInputChange("weightPreset")}
              className="w-full px-4 py-3 border rounded-xl"
            >
              {config.weights.map((w) => (
                <option key={w}>{w}</option>
              ))}
            </select>
          </div>

          {/* PREVIEW SECTION */}
          <p className="text-sm font-medium -mb-1.5">
            {" "}
            Auto-Generated Information
          </p>
          <p className="text-sm">Automatically compiled from your selections</p>
          <h4 className="text-sm font-bold">Specifications Preview</h4>
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-2">
            <div className="text-sm text-gray-700 space-y-1">
              <div>
                <strong>Category:</strong> {formData.category}
              </div>
              <div>
                <strong>Material:</strong> {formData.material}
              </div>
              <div>
                <strong>Gemstone Type:</strong> {formData.gemstoneType}
              </div>
              <div>
                <strong>Style:</strong> {formData.style}
              </div>
              <div>
                <strong>Weight:</strong> {formData.weightPreset}
              </div>
              {formData.sizes.length > 0 && (
                <div>
                  <strong>Size:</strong> {formData.sizes.join(", ")}
                </div>
              )}
            </div>
          </div>

          {/* CARE INSTRUCTIONS */}
          {config.careInstructions && (
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Care Instructions</h4>
                <span className="text-xs text-gray-500">Auto-assigned</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {config.careInstructions
                  .split("•")
                  .map((i) => i.trim())
                  .filter(Boolean)
                  .map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isUploading || !formData.primaryImageUrl}
            className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-900 hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02] border border-transparent hover:border-gray-200 transition-all duration-200"
          >
            {isUploading ? "Uploading..." : "Save Product"}
          </button>

          <button
            type="button"
            className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-black hover:border-black hover:shadow-md hover:shadow-gray-900/10 hover:scale-[1.02] transition-all duration-200"
          >
            Preview Product Page
          </button>
        </div>
      </form>
    </div>
  );
};
