function Inventory () {
    return (
        <div>
            <h1 className="inventory-header">Below, you can view and update your inventory.</h1>



               <div className="wrapper">
                <Card
                img="https://o.remove.bg/downloads/3542e01d-85a4-4734-a2d7-d74ba497b733/1550609-removebg-preview.png"
                itemTitle="Oranges"
                />







                </div>
                </div>


    )
}

const increaseAmount = document.getElementById("increase");
const decreaseAmount = document.getElementById("decrease");

const totalAmount= document.getElementById("total-amount");

let amount = 0;

totalAmount.innerHTML = amount;

const handleIncrease = () => {
    amount++;
    totalAmount.innerHTML = amount;
};

const handleDecrease = () => {
    amount--;
    totalAmount.innerHTML = amount;
}

increaseAmount.addEventListener("click", handleIncrease);
decreaseAmount.addEventListener("click", handleDecrease); 




function Card (props) {
    return (
        <div className="inventory-cards">

            <h1 className="item-title">
                Item: {props.itemTitle}
            </h1>


            <img src={props.img} className="item-image" />
            <div className="card_body">

</div>



 </div>
    )
}

export default Inventory;
