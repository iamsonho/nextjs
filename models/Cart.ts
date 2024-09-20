
import mongoose, { model, Schema } from "mongoose";
import { ItemDocument, ItemSchema } from "./Item";

export interface CartDocument {
    device_token: string;
    items: ItemDocument[],
    totalPrice: number
}

const CartSchema = new Schema<CartDocument>({
    device_token: {
        type: String,
        unique: true
    },
    items: {
        type: [ItemSchema]
    },
    totalPrice: {
        type: Number
    }
})

const Cart = mongoose.models?.Cart || model<CartDocument>('Cart', CartSchema);

export default Cart;