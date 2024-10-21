import ProductPage from "@/app/components/ProductPage";

export default function AllProductsPage() {
  const all_products_url = "http://127.0.0.1:8000/api/v1/products/";
  return <ProductPage url={all_products_url} default_page_title={"All Products"}/>;
}
