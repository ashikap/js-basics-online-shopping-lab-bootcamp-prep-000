var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random()*100);
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
return getCart()
}

function viewCart() {
  
}

function total() {
   let t = 0;
   return t;
}

function removeFromCart(item) {
  
  }

function placeOrder(cardNumber) {
  
    }

