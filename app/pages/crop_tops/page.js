import ProductPage from "@/app/components/ProductPage";

export default function CropTopsPage() {
  const all_shirts_url = "http://127.0.0.1:8000/api/v1/products/crop-top/";
  return <ProductPage url={all_shirts_url} />;
}
