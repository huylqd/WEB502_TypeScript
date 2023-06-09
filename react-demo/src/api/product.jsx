import instance from "./instance";
export const getAllProduct = () => {
  return instance.get("/api/products");
};
export const getOneProduct = (id) => {
  return instance.get(`/api/products/${id}`);
};
export const addProduct = (product) => {
  return instance.post(`/api/products`, product);
};
export const updateProduct = (product) => {
  return instance.put(`/api/products/${product._id}`, product);
};
export const deleteProduct = (id) => {
  return instance.delete(`/api/products/${id}`);
};
