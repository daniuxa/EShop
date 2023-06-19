import { useSelector } from "react-redux";
import ProductInCard from "./ProductInCard";
export default function Card({call, onDestroy}){
    const productsInCard = useSelector((state) => 
    {
        return state.productsValue.productsInCard;
    }); 
    let totalSum;
    if (!call){
        return null;
    }
    if (productsInCard.length === 0)
    {
        totalSum = 0;
    }
    else
    {
        totalSum = productsInCard.reduce((partialSum, el) => partialSum + el.amount * el.product.price, 0);
    }
    return (
        //className="modal-wrapper"
        <div className="modal">
        <div className="card">
            <h1>Card</h1>
            <div className="list">
                <ul className="listCard">
                    {productsInCard.map(el => <ProductInCard key = {el.product.id} item={el} />)}
                </ul>
            </div>
            <div className="checkOut">
                <div className="total">{totalSum}</div>
                <div className="closeShopping"
                onClick={onDestroy}>Close</div>
            </div>
        </div>
    </div>
    );
}