export default function Nav(){

    return (
        <nav>
            <div className="sortSelect">
            <label htmlFor="sort-select">Sort by:{' '}</label>
            <select name="sort" id="sort-select">
            <option value="popularity">Popularity</option>
            <option value="less-price">Less price</option>
            <option value="bigger-price">Bigger price</option>
            </select>
        </div>
        <button className="filterButton button">Filter</button>
        </nav>
    );
}