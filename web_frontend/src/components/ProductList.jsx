import Product from "./Product";

export default function ProductList({products, error})
{
    if (error !== 0)
    {
        return (
            <main className="productHandler">
                <h1>Error:{' ' + error}</h1>
            </main>
        );
    }
    if (products === null || products === undefined || products.length === 0)
    {
        return (
            <main className="productHandler">
                <h1>No data</h1>
            </main>
        );
    }

    return (
        <main className="productHandler">
            {products.map(el => <Product key = {el.id} item = {el}/> )}
        </main>
    );
}