
export default function Product({item})
{
    return (
        <div className="product">
            <a href={item.link} target="_blank">
                <img className="productImg" src={item.photoLink} title={item.name}/>
            </a>

            <h3>{item.name}</h3> 

            <div className="productPrice">
                <h3>{item.price}$</h3>
                <button className="button">Add to card</button>
            </div>
        </div>
    );
}