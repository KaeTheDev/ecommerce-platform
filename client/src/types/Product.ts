export interface ProductFormData {
    name: string;
    subtitle: string;
    category: 'ring' | 'bracelet' | 'watch' | 'necklace' | 'earrings';
    price: string;
    status: 'active' | 'inactive';

    primaryImageUrl: string;
    galleryImageUrls: string[];

    sizes: string[];
    material: string;
    gemstoneType: string;
    weightPreset: string;
    style: string;

    description: string;
    careTemplateKey: string;
    specsFromAttributes: boolean;

    sku: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductFormProps {
    onSubmit: (data: ProductFormData) => void;
    initialData?: Partial<ProductFormData>;
}