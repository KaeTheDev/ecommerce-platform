import { Schema, model, Document } from 'mongoose';

// TS Interface for Product Item
export interface IProductItem {
    productName: string;
}

// TS Interface - the shape of a Review document
export interface IReview extends Document {
    products: IProductItem[],
    customerFirstName: string;
    customerLastName: string;
    rating: number,
    comment: string;
    date: Date;
}

// Mongoose Schema -  enforces this shape at DB level
const reviewSchema = new Schema<IReview>({
    products: [{
        productName: { type: String, required: true }
    }],
    customerFirstName: { type: String, required: true },
    customerLastName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
}, 
{ timestamps: true }
)

// Mongoose Model - typed constructor that gets imported elsewhere
export const Review = model<IReview>('Review', reviewSchema);