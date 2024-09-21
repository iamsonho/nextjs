'use client'
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/contexts/CartContext";   

const Cart = () => {
    const { cart } = useCart();
    console.log(111, cart);
       
    return (
        <>
          <title>Cart</title>
            <div className="flex flex-col items-center">
            {
                cart.items.map((item: any) => (
                    <CartItem item={item} key={item.id} />
                ))
            }
            </div>
        </>
    );
}

export default Cart;