import Card from './Card';
import { useState } from 'react';
import { useSelector } from "react-redux";

export default function Header(){
    const [cardState, setCardState] = useState(false);
    const productsInCard = useSelector((state) => 
    {
        return state.productsValue.productsInCard;
    }); 
    return (
        <header>
            <div className="centerItems">
            <a href="index.html">
                <img className="logoImg" src="https://ik.imagekit.io/Salivon/eshop.png?updatedAt=1680168499818" title="EShop"/>
             </a>
        </div>
        
         <div className="centerItems">
            <form method="post" id="searchForm" className="centerItems">
                <input type="text" className="textField" placeholder="Search..."/>
                <button className="button searchButton">Search</button>
            </form>
        </div>  

        <div className="centerItems shopping">   
            <button className="cartButton button"
            onClick={
                () => {
                    setCardState(true)
                }
            }></button>
            <span className="quantity">{productsInCard.length}</span>
        </div>
        <Card call={cardState} onDestroy={() => setCardState(false)}/> 

        </header>
    );
}