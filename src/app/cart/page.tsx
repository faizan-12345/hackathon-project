// src/app/cart/page.tsx
"use client";  // This will mark the component as client-side only

import { useCart } from "../context/CartContext";  // Import useCart hook
import { Button } from "../components/ui/button";  // Assuming you have a Button component

export default function CartPage() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();  // Get the cart items

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">Price: £{item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <Button onClick={() => removeFromCart(item.id)} variant="outline">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">Total: £{getTotalPrice()}</p>
            <Button className="mt-4" variant="outline">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
