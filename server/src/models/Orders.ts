import { Schema, model, Document } from 'mongoose';

// TS Interface for Order Items
export interface IOrderItem {
    productId: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

// TS Interface - the shape of a Order document
export interface IOrder extends Document {
    orderNumber: number;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
    customerEmail: string;
    orderDate: Date;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    items: IOrderItem[];
    total: number;
}

// Mongoose Schema - enforces this shape at DB level
const orderSchema = new Schema<IOrder>({
    orderNumber: { type: Number, required: true },
    customerId: { type: Number, required: true },
    customerFirstName: { type: String, required: true },
    customerLastName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    orderDate: {type: Date, required: true },
    status: { type: String, required: true, enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    },
    items: [{
        productId: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        subtotal: { type: Number, required: true }
    }],
    total: { type: Number, required: true }
})