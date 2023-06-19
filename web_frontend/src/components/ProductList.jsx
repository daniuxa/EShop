import Product from "./Product";

export default function ProductList({products})
{
    return (
        <main className="productHandler">
            {products.map(el => <Product key = {el.id} item = {el}/> )}
        </main>
    );
}