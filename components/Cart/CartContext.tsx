import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface ICartItem {
  price: number;
  title: string;
}

interface ICartState {
  items: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
}

export const CartStateContext = createContext<ICartState | null>(null);

export function CartStateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  return (
    <CartStateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => [...prevState, item]);
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error('You forgot CartStateContextProvider!');
  }

  return cartState;
}
