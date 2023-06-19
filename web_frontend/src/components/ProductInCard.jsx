import { useDispatch } from "react-redux";
import { removeProductFromCard } from '../store/productsSlice';

export default function ProductInCard({item}){
    const dispatch = useDispatch();

    return (
        <li className="productInCard">
            <img className ="imgInCard" src={item.product.photoLink}/>
			<div className="prodDescription">
				<div>{item.product.name}</div>
                <div>Price: {item.product.price}</div>
            	<div className="count">Quantity: {item.amount}</div>
			</div>
			<img className="deleteCrossImg" 
            onClick={() => {dispatch(removeProductFromCard(item.product.id))}}
            src="https://ik.imagekit.io/Salivon/x_close_cross_delete_icon_159748.png?updatedAt=1685784457457"/>
        </li>
    );
}