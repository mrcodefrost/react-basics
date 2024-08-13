
const Cart = () => {

    const items = ["Wireless Earbuds", "Power bank", "New SSD", "Hoodies"];


    return (
        <>
            <h1>Cart 🛒</h1>

            {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

            <ul>
                <h4>Products</h4>
                {items.map(product => (
                    <li key={Math.random() * 10}>
                        {product}
                    </li>
                ))}
            </ul>


        </>
    )
}

export default Cart