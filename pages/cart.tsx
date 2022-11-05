import { useCartState } from '../components/Cart/CartContext';

function CartPage() {
  const cartState = useCartState();
  return (
    <div>
      <ul>
        {cartState.items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${item.title}_${index}`}>{`${item.title} - ${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
