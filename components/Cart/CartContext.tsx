import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface ICartItem {
  price: number;
  title: string;
  count: number;
}

interface ICartState {
  items: readonly ICartItem[];
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
          setCartItems((prevState) => {
            const existingItem = prevState.find(
              (elo) => elo.title === item.title,
            );
            if (!existingItem) {
              return [...prevState, item];
            }
            // eslint-disable-next-line @typescript-eslint/no-shadow
            return prevState.map((existingItem) => (existingItem.title === item.title
              ? { ...existingItem, count: existingItem.count + 1 }
              : existingItem));
          });
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
