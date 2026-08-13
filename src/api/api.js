const products = async (limit = 16) => {
  const response = await fetch("https://dummyjson.com/products?limit=" + limit);
  const data = await response.json();
  return data;
};

const featuredProducts = async () => {
  const response = await fetch(
    "https://dummyjson.com/products?limit=0&select=id,title,category,price,rating,thumbnail",
  );

  if (!response.ok) {
    throw new Error("Unable to load featured products.");
  }

  const data = await response.json();
  const categories = new Set();

  return data.products
    .filter((product) => product.rating > 4)
    .filter((product) => {
      if (categories.has(product.category)) {
        return false;
      }

      categories.add(product.category);
      return true;
    })
    .slice(0, 8)
    .map((product) => ({ ...product, image: product.thumbnail }));
};

export { products, featuredProducts };
