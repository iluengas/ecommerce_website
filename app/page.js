import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full h-screen bg-white flex items-center justify-center">
      <section className="w-3/5 h-3/5">
        <Link href="/pages/allproducts" passHref className="">
          <div className="w-full h-full bg-gray-100 hover:bg-white flex items-center justify-center text-9xl font-extrabold text-white hover:text-gray-100 rounded-md shadow-lg">
            Click
          </div>
        </Link>
      </section>
    </main>
  );
}
