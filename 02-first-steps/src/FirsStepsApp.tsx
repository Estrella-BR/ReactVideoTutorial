import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity?: number;
}

const itemsInCart: ItemInCart[] = [
    {
        productName: 'Nintendo switch 2',
        quantity: 2
    },
    {
        productName: 'PlayStation 5'
    },
    {
        productName: 'Xbox Series X',
        quantity: 3
    }
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {/* <ItemCounter name="Nintendo switch 2" quantity={2} />
            <ItemCounter name="PlayStation 5" />
            <ItemCounter name="Xbox Series X" quantity={3} /> */}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>
    )

}