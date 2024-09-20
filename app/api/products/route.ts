
import { connectDB } from "@/lib/mongodb"
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { ItemDTO } from "@/lib/ItemDTO.dto";
import Cart from "@/models/Cart";

export async function POST(req: NextRequest) {
    await connectDB();
    const item: ItemDTO = await req.json();
    const device_token = randomUUID();

    const { productID, quantity, price } = item;
    const subTotalPrice = quantity * price;

    const cart = await getCart(device_token);

    if (!cart) {
        const cart =  await createCart(device_token, item, subTotalPrice, subTotalPrice);

        return Response.json({
            cart,
            status: HttpStatusCode.Created
        });
    }

    const itemIndex = cart.items.findIndex((item: any) =>  item.productID === productID);

    if (itemIndex === -1) {
        cart.items.push({ ...item, subTotalPrice });
        recalculateCart(cart);
        cart.save();

        return cart;
    }

    var adjustedItem = cart.items[itemIndex];

    adjustedItem.quantity = adjustedItem.quantity + quantity;
    adjustedItem.subTotalPrice = item.quantity * item.price;
    recalculateCart(cart);

    cart.items[itemIndex] = adjustedItem;

    cart.save();

    return NextResponse.json({
        cart,
        status: HttpStatusCode.Created
    });
}

export async function getCart(userId: string): Promise<any> {
    return await Cart.findOne({ userId });
}

export async function createCart(device_token: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<any> {
    const cart = await Cart.create({device_token, items: [{...itemDTO, subTotalPrice}], totalPrice: totalPrice});
    return cart;
}

export function recalculateCart(cart: any) {
    cart.totalPrice = 0;
    cart.items.forEach((item: any) => {
        cart.totalPrice += item.subTotalPrice;
    });
}