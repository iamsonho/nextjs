
import { useCart } from "@/contexts/CartContext";
import { Button, Card, CardBody, CardFooter, Image, Spacer } from "@nextui-org/react";

const ProductCard = ({product}: any) => {
    const { title, price, images } =  product;
    const { addItemToCart } = useCart();
    
    const handleAddToCart = async (product: any) => {
        addItemToCart(product);
    }

    return (
        <Card>
            <CardBody>
                <Image 
                    src={images[0]}
                    alt={title}
                />
            </CardBody>
            <CardFooter className="flex-col space-y-4">
                <b>{title}</b>
                <p>{price}</p>
                <Button
                    onClick={() => handleAddToCart(product)}
                >Add To Cart</Button>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;