'use client'
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/contexts/AppContext";

const Cart = () => {
    const cart = useCart();    
    return (
        <>
          <title>Cart</title>
            <div className="flex flex-col items-center">
            {
                cart.map((item: any) => (
                    <CartItem item={item} key={item.id} />
                ))
            }
            </div>
        </>
    );
}

export default Cart;