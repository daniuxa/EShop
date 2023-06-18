import Card from './Card';

export default function Header(){

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

           <Card /> 
        <div className="centerItems shopping">   
            <button className="cartButton button"></button>
            <span className="quantity">0</span>
        </div>
        </header>
    );
}