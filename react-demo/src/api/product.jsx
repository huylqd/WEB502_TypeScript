import instance from "./instance";
export const getAllProduct = () => {
  return instance.get("/products");
};
export const getOneProduct = (id) => {
  return instance.get(`/products/${id}`);
};
export const addProduct = (product) => {
  return instance.post(`/products`, product);
};
export const updateProduct = (product, id) => {
  return instance.update(`/products/${id}`, product);
};
export const deleteProduct = (id) => {
  return instance.delete(`/products/${id}`);
};
