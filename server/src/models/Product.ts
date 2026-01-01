import { Schema, model, Document } from 'mongoose';

// TS Interface - the shape of a Product document
export interface IProduct extends Document {
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
    slug: string;

    createdAt: Date;
    updatedAt: Date;
}

// Mongoose Schema - enforces this shape at DB level
const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    subtitle: { type: String, required: true},
    category: {
        type: String,
        required: true,
        enum: ['ring', 'bracelet', 'watch', 'necklace', 'earrings'],
    },
    price: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'], default: 'active' },

    primaryImageUrl: { type: String, required: true },
    galleryImageUrls: { type: [String], default: [] },
    
    sizes: { type: [String], default: [] },
    material: { type: String, required: true },
    gemstoneType: { type: String, required: true },
    weightPreset: { type: String, required: true },

    description: { type: String, required: true },
    careTemplateKey: { type: String, required: true },
    specsFromAttributes: { type: Boolean, default: true },

    sku: { type: String, required: true, unique: true},
    slug: { type: String, required: true, unique: true },
},
{ timestamps: true}
);

// Mongoose Model - typed constructor that gets imported elsewhere
export const Product = model<IProduct>('Product', productSchema);