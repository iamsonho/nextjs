import {Schema } from "mongoose";

export interface ItemDocument {
    productID: string;
    title: string;
    images: [];
    quantity: number;
    price: number;
    subTotalPrice: number;
}

export const ItemSchema = new Schema<ItemDocument>({
    productID: String,
    title: String,
    images: Array,
    quantity: Number,
    price: Number,
    subTotalPrice: Number,
});