import Card from './Card';
import { useState } from 'react';
export default function Header(){
    const [cardState, setCardState] = useState(false);


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

           <Card card call={cardState} onDestroy={() => setCardState(false)}/> 
        <div className="centerItems shopping">   
            <button className="cartButton button"
            onClick={
                () => {
                    setCardState(true)
                }
            }></button>
            <span className="quantity">0</span>
        </div>
        </header>
    );
}