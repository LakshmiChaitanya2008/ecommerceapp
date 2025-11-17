import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
export const CartContext = createContext();
import { UserContext } from "./UserContext";

export const CartContextProvider = function ({ children }) {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  const getCart = async function () {
    if (currentUser) {
      const data = await axios.get("https://ecommerceapp-bno1.onrender.com/cart/", {
        headers: {
          "x-access-token": currentUser.token,
        },
      });

      setCart(data.data.items);
    }
  };

  useEffect(() => {
    getCart();
  }, [currentUser]);
  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
