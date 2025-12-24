import { Schema, model, Document } from 'mongoose';

// TS Interface - the shape of a User document
export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    role: 'admin' | 'customer';
}

// Mongoose Schema - enforces this shape at DB level
const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'customer']}
});

// Mongoose Model - typed constructor that gets imported elsewhere
export const User = model<IUser>('User', userSchema);