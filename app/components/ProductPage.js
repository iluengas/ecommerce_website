import FilterBar from "@/app/components/FilterBar";
import fetchProduct from "@/app/hooks/fetchProduct";
import Sidenavbar from "@/app/components/sidenavbar";
import ProductGrid from "@/app/components/ProductGrid";
import ErrorPage from "@/app/components/ErrorPage";
import ProductNavbar from "@/app/components/ProductNavbar";

export default async function ProductPage({
  url,
  default_page_title,
  className,
}) {
  const { data, loading, error } = await fetchProduct(url);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error || !data || !data.results)
    return <ErrorPage error_message="Error" />;

  const product_list = data.results || []; // Default to empty array if results is undefined
  const page_title = default_page_title || product_list[0].category;

  return (
    <main className={`w-full h-full ${className}`}>
      <section className="px-1 md:px-10">
        <ProductNavbar pageName={page_title} />
        <FilterBar className="h-16" />
      </section>

      <section className="flex mt-2 md:space-x-2">
        <ProductGrid products={product_list} />
      </section>
    </main>
  );
}
