import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";

export default function Card({ product_data }) {
  return (
    <main className="pb-6">
      <section className=" relative h-96 lg:h-[550px]  border-black">
        <Image
          src={product_data.image}
          alt={product_data.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </section>
      {/* Adjust the property names based on your API response */}
      <section className=" border-black px-2 w-full flex flex-col items-start my-1">
        <h2 className=" border-black text-lg font-extralight text-gray-800">
          {product_data.name.toUpperCase()}
        </h2>
        <p className=" border-black text-lg font-light text-gray-400">
          {product_data.category.toLowerCase()}
        </p>
        <p className=" border-black text-lg font-semibold">
          ${product_data.price}
        </p>
        <CustomButton className="bg-black hover:bg-gray-800 text-white rounded-sm p-2" buttonText={"Add to Cart"} product={product_data}/>
      </section>
    </main>
  );
}
