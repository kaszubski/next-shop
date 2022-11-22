/* eslint-disable react/jsx-one-expression-per-line */
import { useCartState } from '../components/Cart/CartContext';

function CartContent() {
  const cartState = useCartState();

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartState.items.map((item) => (
          <li key={`${item.title}`} className="py-4 flex justify-between">
            <div>{item.count} x {item.title}</div>
            <div>{item.price}
              <button type="button" className="ml-4 text-red-500"> Delete </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CartSummary() {
  const cartState = useCartState();

  return (
    <div> Summary: {cartState.items.length}</div>
  );
}

function CartPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-8">
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
}

export default CartPage;
