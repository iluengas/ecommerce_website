// This is a server-side function, no need for useEffect or useState
async function fetchProduct(url) {

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return { data: result, loading: false, error: null };
  } catch (error) {
    return { data: {}, loading: false, error: error.message };
  }
}

export default fetchProduct;
