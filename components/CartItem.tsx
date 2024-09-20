import { useDispatchCart } from "@/modules/AppContext";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export const CartItem = ({item}: any) => {
    const setCart = useDispatchCart();
    
    return (
        <Card className="max-w-[400px] mt-10 bg-gradient-to-r from-lime-300 to-blue-300">
            <CardBody>
                <Image 
                    src={item.image}
                    alt={item.title}
                />
            </CardBody>
            <CardFooter className="flex-col space-y-4">
                <b>{item.title}</b>
                <p>${item.price}</p>
                <ButtonGroup color="warning">
                    <Button onClick={() => {
                        setCart({type: 'remove', product: item});
                    }}>
                        -
                    </Button>
                    <Button>{item.quantity}</Button>
                    <Button onClick={() => {
                        setCart({type: 'add', product: item});
                    }}>                         
                        +
                    </Button>
                </ButtonGroup>
                <Button
                    onClick={() => {
                        setCart({type: 'remove', product: item})
                    }}
                >
                    Remove
                </Button>
            </CardFooter>
        </Card>
    );
}