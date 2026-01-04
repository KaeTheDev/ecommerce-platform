export interface Product{
    id: string;
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
    specsFromAttributes: boolean;

    sku: string;
    slug?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductTableItem {
    id: string;
    name: string;
    price: string;
    status: 'active' | 'inactive';
}

export interface ProductFormProps {
    onSubmit: (data: Product) => void;
    initialData?: Partial<Product>;
}

export interface ProductsTabProps {
    onOpenProductForm: () => void;
    products: ProductTableItem[];
    onDelete: (productId: string) => void;
    onEdit: (productId: string) => void;
  }  