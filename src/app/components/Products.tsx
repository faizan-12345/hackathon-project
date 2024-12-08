import { ProductCard } from "./ui/product-card";
import { Button } from "./ui/button";

const products = [
  {
    name: "Rustic Vase Set",
    price: "155",
    imageUrl: "/images/product%232.jpg",
    href: "/products/rustic-vase-set"
  },
  {
    name: "The Lucy Lamp",
    price: "399",
    imageUrl: "/images/product%234.jpg",
    href: "/products/the-lucy-lamp"
  },
  {
    name: "The Silky Vase",
    price: "125",
    imageUrl: "/images/product%233.jpg",
    href: "/products/the-silky-vase"
  },
  {
    name: "The Dandy chair",
    price: "250",
    imageUrl: "/images/product%231.jpg",
    href: "/products/the-dandy-chair"
  }
];

export default function Products() {
  return (
    <section className="py-12 px-4 md:py-20 md:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            href={product.href}
          />
        ))}
      </div>
      <div className="mt-8 md:mt-12 text-center">
        <Button
          variant="outline"
          className="font-['Clash_Display'] text-[16px] leading-[24px] w-full md:w-auto"
        >
          View collection
        </Button>
      </div>
    </section>
  );
}
