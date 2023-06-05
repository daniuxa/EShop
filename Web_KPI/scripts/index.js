//Take data from dom tree
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('main');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

//Add event for opening the card
openShopping.addEventListener('click', ()=>{
	document.querySelector('.card').classList.add('active');
	document.querySelector('.modal-wrapper').style.display='block';
})

//Add event for closing the card
closeShopping.addEventListener('click', ()=>{
	document.querySelector('.card').classList.remove('active');
	document.querySelector('.modal-wrapper').style.display='none';
})

//Where we collect phones from api
let phones = [ ];

//Async function to get data from api. Important: works only when api is running with docker
async function getData() {
	try {
	  const response = await fetch('http://localhost:8080/api/phones');
	  const data = await response.json();
	  
	  data.forEach(obj => {
		phones.push(obj);
	  });
  
	} catch (error) {
	  console.error('Error:', error);
	}
}

//Async function to init site with data which we get from api
(async function initApp(){
	await getData();
    phones.forEach(value =>{
		console.log(value);
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
		<a href="${value.link}" target="_blank">
		<img class="productImg" src="${value.photoLink}" title="${value.name}">
	</a>

	<h3>${value.name}</h3>

	<div class="productPrice">
		<h3>${value.price.toLocaleString()}$</h3>
		<button class="button" onclick="addToCard(${value.id})">Add to card</button>
	</div>`;
		list.appendChild(newDiv);
    })
})();

//List of products in card
let listCards  = [];

//Add products to card
function addToCard(key){
	console.log(key);
	if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(phones.filter(x => x.id == key)[0]));
        listCards[key].quantity = 1;
    }
	else{
		listCards[key].quantity++;
	}
    reloadCard();
}

//Refresh data in the card
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price*value.quantity;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
				<div class="productInCard">
                <img class ="imgInCard" src="${value.photoLink}"/>
				<div class="prodDescription">
				<div>${value.name}</div>
                <div>Price: ${value.price.toLocaleString()}</div>
            	<div class="count">Quantity: ${value.quantity}</div>
				</div>
				<img class="deleteCrossImg" onclick="changeQuantity(${key}, ${value.quantity - 1})" src="https://ik.imagekit.io/Salivon/x_close_cross_delete_icon_159748.png?updatedAt=1685784457457"/>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

//Change quantity and total price of products
function changeQuantity(key, quantity)
{
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * phones[key].price;
    }
    reloadCard();
}