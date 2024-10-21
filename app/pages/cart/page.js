import ShoppingCart from "@/app/components/ShoppingCart";

export default function CartPage({ products }) {
  return (
    <main>
      <ShoppingCart className="w-full h-full border-black px-1 md:px-10 mt-10"/>
    </main>
  );
}
