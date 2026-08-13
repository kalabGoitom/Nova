const products = async (limit = 12, skip = 0, category = "") => {
  const categoryPath = category
    ? `/category/${encodeURIComponent(category)}`
    : "";
  const response = await fetch(
    `https://dummyjson.com/products${categoryPath}?limit=${limit}&skip=${skip}&select=id,title,category,price,rating,thumbnail`,
  );

  if (!response.ok) {
    throw new Error("Unable to load products.");
  }

  return response.json();
};

const productCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");

  if (!response.ok) {
    throw new Error("Unable to load product categories.");
  }

  return response.json();
};

const product = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Unable to load product details.");
  }

  return response.json();
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
    .slice(0, 16)
    .map((product) => ({ ...product, image: product.thumbnail }));
};

export { products, product, productCategories, featuredProducts };
