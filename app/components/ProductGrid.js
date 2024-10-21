import Card from "@/app/components/card";

export default function ProductGrid({ products, className }) {
  return (
    <main className={`${className} w-full h-fit`}>
      <section className="">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product_data={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
