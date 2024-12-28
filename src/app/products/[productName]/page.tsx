"use client";  // This marks the component as a client-side component

import { notFound } from "next/navigation";
import { Button } from "../../components/ui/button";  // Assuming you have a Button component
import { useCart } from "../../context/CartContext";  // Import useCart hook

const products = [
  {
    name: "Rustic Vase Set",
    price: 155,
    imageUrl: "/images/product%232.jpg",
    description: "A beautiful set of rustic vases to complement your home decor."
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    imageUrl: "/images/product%234.jpg",
    description: "A stunning lamp to brighten up your living space."
  },
  {
    name: "The Silky Vase",
    price: 125,
    imageUrl: "/images/product%233.jpg",
    description: "A silky smooth vase that enhances the beauty of your room."
  },
  {
    name: "The Dandy chair",
    price: 250,
    imageUrl: "/images/product%231.jpg",
    description: "A dandy chair that combines style and comfort."
  }
];

export default function ProductPage({ params }: { params: { productName: string } }) {
  const product = products.find(
    (p) =>
      p.name.toLowerCase().replace(/\s+/g, "-") === params.productName.toLowerCase()
  );

  const { addToCart } = useCart();  // Use the cart context to access addToCart function

  if (!product) {
    notFound(); // Show 404 page if the product doesn't exist
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.name.toLowerCase().replace(/\s+/g, "-"), // Generate a unique ID based on product name
      name: product.name,
      price: product.price,
      quantity: 1
    };
    addToCart(cartItem);  // Add the product to the cart
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto object-cover mb-6"
      />
      <p className="text-xl mb-4">Price: £{product.price}</p>
      <p className="text-md text-gray-700">{product.description}</p>
      <Button onClick={handleAddToCart} variant="outline" className="mt-4">
        Add to Cart
      </Button>
    </div>
  );
}
