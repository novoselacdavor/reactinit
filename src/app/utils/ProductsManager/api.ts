export const getProductsAPI = () => {
  return fetch(`https://dummyjson.com/products`).then((res) => res.json());
};

export const getSingleProductAPI = ({ id }: { id: string }) => {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
};
