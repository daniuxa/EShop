import { useDispatch } from "react-redux";
import { addProductToCard } from '../store/productsSlice';

export default function Product({item})
{
    const dispatch = useDispatch();
    const addToCard = (id) => {
        dispatch(addProductToCard(id));
    }

    return (
        <div className="product">
            <a href={item.link} target="_blank">
                <img className="productImg" src={item.photoLink} title={item.name}/>
            </a>

            <h3>{item.name}</h3> 

            <div className="productPrice">
                <h3>{item.price}$</h3>
                <button className="button"
                onClick={() => {addToCard(item.id)}}>Add to card</button>
            </div>
        </div>
    );
}