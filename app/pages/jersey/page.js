import ProductPage from "@/app/components/ProductPage";

export default function JerseysPage() {
  const all_shirts_url = "http://127.0.0.1:8000/api/v1/products/moto-jersey/";
  return <ProductPage url={all_shirts_url} />;
}
