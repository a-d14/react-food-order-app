import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";

function App() {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function handleShowCart() {
    setShowCart(true);
  }

  function handleHideCart() {
    setShowCart(false);
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

  return (
    <>
      <Cart open={showCart} close={handleHideCart} items={cartItems} editQuantity={handleSetCartItems} />
      <Header showCart={handleShowCart} itemsInCart={totalItemsInCart} />
      <Meals addMealToCart={handleSetCartItems} />
    </>
  );
}

export default App;
