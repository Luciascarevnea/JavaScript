// JS: literal object (plain object)


let order = {
    name: "Pizza",   // proprietati: valori,
    image: "https://www.allrecipes.com/thmb/ooZbu_yUBrGQ74uKbuOENWuNxMM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
    price: 100,
    available: true,
    quantity: 0,
    totalCost: 0
}


function increaseQuantity (){
    if(order.quantity < 10){
        order.quantity++
        updateTotalCost()
        showOrder ()
    }
}

function decrementQuantity (){
    if(order.quantity > 0){
        order.quantity--
        updateTotalCost()
        showOrder ()
    }
}

function updateTotalCost(){
    order.totalCost = order.price * order.quantity
}

function showOrder (){
    const content = document.getElementById('content')
    content.innerHTML = `
    <h2>${order.name}</h2>
    <img src="${order.image}" width="200"/>
    <p>Price: ${order.price}</p>
    <p>Total cost: ${order.totalCost}</p>
    <p>${order.available ? 'available' : 'not available'}</p>
    ${order.available ? `<div><button onclick="decrementQuantity ()">-</button><span>${order.quantity}</span><button onclick="increaseQuantity()">+</button></div>` : ``}
    </br><button onclick="sendOrder()">Send order</button>
    `
}

function sendOrder(){
    alert("Your order has been sent successfully!")
}


showOrder ()

// de uitat la acest operator ?:
// de facut decrement quantity (limit inc/dec 0..10)
// update the total cost