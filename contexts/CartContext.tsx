import { createContext, useContext, useState } from "react";

type CartContextType = {
    cart: {
        items: any
    },
    addItemToCart: (item: any) => {}
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState({items: []});

    const addItemToCart = async (item: any) => {
        item.quantity = 1;
        item.productID = item.id;
        
        const data = await fetch('api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const result = await data.json();
        setCart(result.cart);
    }

    return (
        <CartContext.Provider value={{ cart, addItemToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Undefine context!");
        
    }

    return context;
}