export default function Card({call, onDestroy}){

    if (!call){
        return null;
    }
    return (
        //className="modal-wrapper"
        <div className="modal">
        <div className="card">
            <h1>Card</h1>
            <div className="list">
                <ul className="listCard"></ul>
            </div>
            <div className="checkOut">
                <div className="total">0</div>
                <div className="closeShopping"
                onClick={onDestroy}>Close</div>
            </div>
        </div>
    </div>
    );
}