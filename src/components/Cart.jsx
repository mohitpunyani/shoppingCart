import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowCheckoutModal(true);
  };

  const handleConfirmOrder = () => {
    // Clear cart by removing all items
    items.forEach(item => {
      dispatch(removeItem(item.id));
    });
    setShowCheckoutModal(false);
    alert('Order placed successfully! 🎉');
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span>Order Summary</span>
        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{items.length} items</span>
      </h2>

      {items.length === 0 && (
        <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-slate-400 font-medium">Your cart is empty</p>
          <p className="text-slate-400 text-sm mt-1">Start adding products!</p>
        </div>
      )}

      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-slate-800 text-lg">
                  {item.name}
                </p>
                <p className="text-sm font-medium text-slate-500">
                  ₹{item.price.toLocaleString('en-IN')} each
                </p>
              </div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-slate-300 hover:text-red-500 transition-colors p-1"
                title="Remove item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-slate-50 rounded-full px-3 py-1 border border-slate-100">
                <button
                  onClick={() => dispatch(decreaseItem(item.id))}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-slate-500 hover:bg-white hover:text-slate-800 hover:shadow-sm transition-all text-lg leading-none pb-0.5"
                >
                  −
                </button>

                <span className="w-6 text-center font-semibold text-slate-800">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(addItem(item))}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-slate-500 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all text-lg leading-none pb-0.5"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <p className="font-bold text-slate-800">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </p>
            </div>

            <div className="h-px bg-slate-50 w-full mt-2 group-last:hidden"></div>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <>
          {/* Divider */}
          <hr className="my-6 border-slate-100 border-dashed" />

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-500 font-medium">Total Cost</span>
            <span className="text-3xl font-bold text-slate-900 tracking-tight">
              ₹{total.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Checkout */}
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[99%] transition-all flex items-center justify-center gap-2"
          >
            <span>Checkout</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-[fadeIn_0.2s_ease-in-out]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Confirm Order</h3>
            </div>

            <p className="text-slate-600 mb-4">
              You are about to place an order for <span className="font-semibold">{items.length} item(s)</span>
            </p>

            {/* Order Summary */}
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-slate-700">
                    {item.name} <span className="text-slate-400">× {item.quantity}</span>
                  </span>
                  <span className="font-semibold text-slate-900">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
              <div className="h-px bg-slate-200 my-2"></div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-slate-700">Total</span>
                <span className="text-blue-600">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 px-4 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="flex-1 px-4 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

