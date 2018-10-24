var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function itemPrice(){
    return Math.floor(Math.random(0,1)*100);
  }
  cart.push({[item]:itemPrice()});
  return `${item} has been added to your cart.`
}

function viewCart() {
  var itemArray = [];
  var priceArray = [];

  for(i=0; i<=cart.length-1;i++){
    for(key in cart[i]) {
      itemArray.push(key);
      priceArray.push(cart[i][key]);
    }
  }

  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${itemArray[0]} at $${priceArray[0]}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${itemArray[0]} at $${priceArray[0]}, and ${itemArray[1]} at $${priceArray[1]}`
  } else {
    str =  `In your cart, you have ${itemArray[0]} at $${priceArray[0]}`
    for (i=1; i<=cart.length-2; i++){
      str+= `, ${itemArray[i]} at $${priceArray[i]}`
    }
    str+= `, and ${itemArray[itemArray.length-1]} at $${itemArray.length-1}.`
    return str;
  }
}

function total() {
  var total = 0;
  for(i=0; i<=cart.length-1;i++){
    for(key in cart[i]) {
      total += cart[i][key];
    }
  }
  return total;
}

function removeFromCart(item) {
  const originalCart = cart;

  for(i=0; i<=cart.length-1; i++){
  	if (cart[i].hasOwnProperty(item)){
      cart[i].splice(i, 1)
    };
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
