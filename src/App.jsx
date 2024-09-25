import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";

function App() {

  const [userAction, setUserAction] = useState('');

  const [cartItems, setCartItems] = useState([]);

  function showCart() {
    setUserAction('cart');
  }

  function showCheckout() {
    setUserAction('checkout');
  }

  function showConfirmation() {
    setUserAction('confirm');
  }

  function hideModal() {
    setUserAction('');
  }

  function handleSetCartItems(item, quantity) {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if(!cartItem) {
      setCartItems([...cartItems, {...item, quantity}]);
      return;
    }

    const newItems = cartItems.map((item) => {
      if(cartItem.id === item.id) {
        return {...cartItem, quantity: cartItem.quantity + quantity}
      } 
      return item;
    });

    setCartItems(newItems.filter(item => item.quantity !== 0));
  }
  
  const totalItemsInCart = cartItems.length;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
);

  console.log(userAction === 'checkout');
  

  return (
    <>
      <Cart 
        open={userAction === 'cart'} 
        close={hideModal} 
        items={cartItems} 
        totalPrice={totalPrice}
        editQuantity={handleSetCartItems} 
        onConfirm={showCheckout}
      />
      <Checkout 
        open={userAction === 'checkout'} 
        close={hideModal}
        totalPrice={totalPrice}
        onCheckout={showConfirmation}
      />
      <Confirmation
        open={userAction === 'confirm'}
        close={hideModal}
      />
      <Header showCart={showCart} itemsInCart={totalItemsInCart} />
      <Meals addMealToCart={handleSetCartItems} />
    </>
  );
}

export default App;
